const db = require('../models/elephantsql');
import { runConsume } from '../../rabbitmq/consume';

import { Messages, MessageController } from '../../types';

import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';

const messageController: MessageController = {};

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

messageController.runConsume = async (req, res, next) => {
  const projectID: number = req.body.projectID;
  // Grab the URL from the database to use in rabbitmq/consume
  const queryString: string = `SELECT project_url FROM projects WHERE project_id = ${projectID}`;

  if (projectID) {
    await db
      .query(queryString)
      .then((data: Array<any>) => {
        const URL = data[0][0]['project_url'];
        // Start the channel in rabbitmq/consume, using the selected project ID and its URL
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
