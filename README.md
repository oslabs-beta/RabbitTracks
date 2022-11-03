<img src=src/assets/images/RT_logo_wide.png>
 
# RabbitTracks
 
RabbitTracks is a full-stack application that developers use to monitor and debug failed messages in RabbitMQ.
 
RabbitTracks is an open source devTool, accelerated under OSLabs.
 
## What You’ll Need to Get Started
 
1. A local Integrated Development Environment (ie - VSCode, NetBeans, Eclipse, etc.)
2. A working RabbitMQ publisher/consumer instance (more information on how to set this up can be found on their website - https://www.rabbitmq.com/)
3. A PostgresQL Database Hosting Service account (ie - ElephantSQL, ScaleGrid, Aiven, etc… it is free!)
 
## Database Set-Up Instructions
 
Before installing the RabbitTracks application, it is vital you set up your Database!
 
1. Same as step 3 in the “What You’ll Need to Get Started” section! Set up a PostgresQL Database Hosting Service account (ie - ElephantSQL, ScaleGrid, Aiven, etc… it is free!)
2. Create Tables in SQL. Below is an image of the entity relationship diagrams that you’ll need for RabbitTracks. Also, below is code that you need to execute in your SQL’s query in order to replicate the diagram’s schema:
 
<img src=src/assets/images/RabbitTracks-DB-Schema.png>
 
A. Creating ‘users’ table for Authentication and security purposes:
 
```SQL
CREATE TABLE users (
      user_id integer SERIAL PRIMARY KEY,
      user_email text UNIQUE NOT NULL,
      user_password text NOT NULL,
      first_name text NOT NULL,
      last_name text NOT NULL,
      session_key text,
      session_start_time timestamp,
      created_at timestamp DEFAULT now() NOT NULL
);
```
 
B. Creating ‘projects’ table to help connect users' projects with messages:
 
```SQL
CREATE TABLE projects (
      project_id integer SERIAL PRIMARY KEY,
      project_url text NOT NULL,
      created_at timestamp DEFAULT now() NOT NULL
);
```
 
C. Creating ‘users_projects’ table for users to keep their projects organized:
 
```SQL
CREATE TABLE users_projects (
      user_project_id integer SERIAL PRIMARY KEY,
      user_id integer REFERENCES users(user_id),
      project_id integer REFERENCES projects(project_id),
      project_name text,
      created_at timestamp DEFAULT now() NOT NULL
);
```
 
D. Creating ‘messages’ table to obtain essential message data that RabbitMQ offers:
 
```SQL
CREATE TABLE messages (
      message_id integer SERIAL PRIMARY KEY,
      project_id integer REFERENCES projects(project_id),
      consumertag text,
      deliverytag integer,
      redelivered boolean,
      exchange text,
      routingkey text,
      contenttype text,
      contentencoding text,
      correlationid text,
      replyto text,
      expiration text,
      messageid text,
      timestamp bigint,
      type text,
      userid text,
      appid text,
      clusterid text,
      first_death_reason text,
      first_death_queue text,
      first_death_exchange text,
      deliverymode text,
      priority integer,
      created_at timestamp DEFAULT now() NOT NULL
);
```
 
## Add code to your RabbitMQ instance
 
A. IF YOU **DO** HAVE A DEAD LETTER EXCHANGE ALREADY SET UP:
 
1. Make sure that your existing Dead Letter Exchange type is “fanout” and keep the exchange name handy.
2. Skip ahead to the [Installation](#Installation) section below! \*NOTE: MAKE SURE YOU DON'T MISS INSTALLATION STEP 4!
 
B. IF YOU **DO NOT** HAVE A DEAD LETTER EXCHANGE SET UP:
 
1. In your RabbitMQ instance, add the following **exact** lines of code within your channel before any messages are sent or consumed:
 
```Javascript
const DLExchange = 'RabbitTracks-DLExchange'
channel.assertExchange(DLExchange, 'fanout');
```
 
2. Add the RabbitTracks Dead Letter Exchange to your queue’s arguments, or configure it in your server as a policy. More information about establishing the Dead Letter Exchange via either of these methods is available in the [RabbitMQ documentation.](https://www.rabbitmq.com/dlx.html)
 
   Here is a simple example of how to add the exchange to your queue’s arguments:
 
```Javascript
channel.assertQueue( queueName… , {
      additionalArgs… ,
      deadLetterExchange: DLExchange
})
```
 
<a name="Installation"></a>
 
## Installation
 
1. Fork and clone this repository! (step-by-step instructions found [here](https://docs.github.com/en/get-started/quickstart/fork-a-repo) if you need)
 
2. Next, use the following command to install any new npm dependencies:
 
```bash
npm install --legacy-peer-deps
```
 
\*Please note that you must add the flag “--legacy-peer-deps” in order to bypass potential React dependency version issues.
 
3. Create a “.env” file in your root directory that consists of the following PRECISE key-value pairs:
 
   - **PORT** = “\_\_\_”
     - Within quotes, please indicate IN QUOTES which port number you would like your server to run on. ie - “3000”. This will be used in server/server.ts
   - **JWT_SECRET** = “\_\_\_”
     - Within quotes, please insert IN QUOTES any string, buffer, or object containing either the secret for HMAC algorithms or the PEM encoded private key for RSA and ECDSA. Where this will be used in the application can be found in the /server/controllers/authController.ts file.
   - **SALT_WORK_FACTOR** = \_\_\_
     - Please indicate WITHOUT QUOTES the amount of times you would like your password to be hashed (ie 12). This will be used in the /server/controllers/authController.ts file.
   - **JWT_EXPIRES_IN** = "\_\_\_"
     - Expressed in seconds or a string describing a time span vercel/ms (ie: 60, "2 days", "10h", "7d"). This can also be found in the /server/controllers/authController.ts file.
   - **SQL_URI** = “\_\_\_”
     - Within quotes, please indicate IN QUOTES the URI to your PostgresQL Database Instance on the Hosting Service you set up earlier.
 
4. ONLY if you are using an **EXISTING** Dead Letter Exchange, go to the rabbitmq/consume.ts file and **replace** “RabbitTracks-DLExchange” with your exchange name in the following line of code:
 
```javascript
const DLExchange: string = "RabbitTracks-DLExchange";
```
 
5. Run build
 
```bash
npm run build
```
 
6. Start your application by running
 
```bash
npm run start
```
 
7. You are all done! Track your failed messages and enjoy using our application! :)
 
## Available Scripts
 
In the project directory, you can also run:
 
### `npm run dev`
 
Runs the app in the development mode.\
Your browser will open RabbitTracks on [http://localhost:8080](http://localhost:8080).
 
The page will reload and update when you make changes in the codebase.\
You may also see lint errors in the console.
 
### `npm test`
 
Runs all written frontend and backend tests... feel free to add your own as well!
 
### `npm run build`
 
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
 
## Authors
 
Jerikko Agatep - [Github](https://github.com/jerikko) | [LinkedIn](https://www.linkedin.com/in/jerikko-agatep/)\
Evelyn Brown - [Github](https://github.com/elrjolliffe) | [LinkedIn](https://www.linkedin.com/in/elrjolliffe/)\
Glen Kasoff - [Github](https://github.com/gkasoff) | [LinkedIn](https://www.linkedin.com/in/glen-kasoff/)\
Jake Kazi - [Github](https://github.com/jakekazi) | [LinkedIn](https://www.linkedin.com/in/jakekazi/)
 
## Contributions Welcome!
 
Contributions are what make the open source community such an amazing place to learn, inspire, and create. We welcome and appreciate your contributions to this product!
 
Here are some ways you can contribute:
 
- Submitting any bugs or feature requests as [Github Issues](https://github.com/oslabs-beta/Rabbit-Tracks/issues)
- Adding new features and fixing issues by opening Pull Requests:
  - Fork the Project
  - Create your Feature Branch (git checkout -b feature/FeatureName)
  - Commit your Changes (git commit -m 'Completed new FeatureName')
  - Push to the Branch (git push origin feature/FeatureName)
  - Open a Pull Request into the **dev branch**
- Improving documentation
 
## License
 
This project is licensed under the MIT License - see the [LICENSE](https://github.com/oslabs-beta/Rabbit-Tracks/blob/main/LICENSE) file for details