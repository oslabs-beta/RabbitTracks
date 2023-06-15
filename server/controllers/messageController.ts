const db = require('../models/elephantsql');

// IMPORTANT: Import runConsume from /rabbitmq/consume. The consume file is integral to displaying Dead Letter Messages in the UI
import { runConsume } from '../../rabbitmq/consume';

// Import types from types.ts file
import { Messages, MessageController } from '../../types';

// Import types from express library
import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';

const messageController: MessageController = {};

// The getAllMessages method takes the project_id from the request body and selects from the database all the messages that belong to the
//  project_id
messageController.getAllMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const projectId: number = req.body.project_id;

  const queryString: string = `SELECT * FROM messages WHERE project_id = ${projectId}`;

  if (projectId) {
    await db
      .query(queryString)
      .then((data: Array<Messages>) => {
        res.locals.messages = data[0];
        return next();
      })
      .catch((err: Error) => {
        return next({
          log: `Error in messageController.getAllMessages... Query from database unsuccessful: ${JSON.stringify(
            err
          )}`,
          status: 500,
          message: 'Query from database unsuccessful.',
        });
      });
  } else {
    return next({
      log: 'Error in messageController.getAllMessages... Did not receive projectId in getAllMessages request.',
      status: 500,
      message: 'Did not receive projectId in getAllMessages request.',
    });
  }
};

// The addMessage method is called in the /rabbitmq/consume.ts file. It takes the message properties from the request body and creates
//  the SQL query string to only include the properties that have values. The message is then inserted into the database.
messageController.addMessage = async (req, res, next) => {
  // Process message content to only include variables that contain values in SQL query
  let columnText: string = '';
  let valuesText: string = '';
  let headers: string;
  const columns: Array<string> = Object.keys(req.body);
  for (let i = 0; i < columns.length; i++) {
    // Headers aren't currently being stored in the database--come back to this later
    if (columns[i] === 'headers') {
      headers = req.body[columns[i]];
    }
    // For any properties that aren't undefined, add them to the query text
    else if (columns[i] !== undefined) {
      if (columnText.length > 0) {
        columnText += ', ';
        valuesText += ', ';
      }
      columnText += columns[i] === 'projectId' ? `project_id` : `${columns[i]}`;
      valuesText += `'${req.body[columns[i]]}'`;
    }
  }

  const queryString: string = `INSERT INTO messages (${columnText}) VALUES (${valuesText}) RETURNING *`;

  await db
    .query(queryString)
    .then((data: Array<Array<Messages>>) => {
      res.locals.message = data[0][0];
      return next();
    })
    .catch((err: Error) => {
      return next({
        log: `Error in messageController.addMessage... Unable to add message to database: ${JSON.stringify(
          err
        )}`,
        status: 500,
        message: 'Unable to add message to database.',
      });
    });
};

// The runConsume method take the projectID from the request body and selects the project_url from the database. The imported runConsume 
//  file from /rabbitmq/consume.ts takes the project_url to establish a connection with the user's RabbitMQ instance using the amqp library.
//  The projectID is added as a property to the request body when the addMessage method is called in runConsume. Called in UserProjects.tsx
//  to begin consuming messages when the user navigates to see the Dead Letter Messages of a specific user project
messageController.runConsume = async (req, res, next) => {
  const projectID: number = req.body.projectID;
  const queryString: string = `SELECT project_url FROM projects WHERE project_id = ${projectID}`;
  
  // Grab the URL from the database to use in /rabbitmq/consume.ts
  if (projectID) {
    await db
      .query(queryString)
      .then((data: Array<any>) => {
        const URL = data[0][0]['project_url'];
        // Start the channel in /rabbitmq/consume.ts, using the selected project ID and its URL
        runConsume(URL, projectID);
        return next();
      })
      .catch((err: Error) => {
        return next({
          log: `Error in messageController.runConsume... Query from database unsuccessful: ${JSON.stringify(
            err
          )}`,
          status: 500,
          message: 'Query from database unsuccessful.',
        });
      });
  } else {
    return next({
      log: 'Error in messageController.runConsume... Did not receive projectId in runConsume request.',
      status: 500,
      message: 'Did not receive projectId in runConsume request.',
    });
  }
};

module.exports = messageController;
