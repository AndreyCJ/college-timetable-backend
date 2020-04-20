// Requirements
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const formidableMiddleware = require('express-formidable');
// const AdminBro = require('admin-bro');
// const AdminBroExpressjs = require('admin-bro-expressjs');
const config = require('config');

// // We have to tell AdminBro that we will manage mongoose resources with it
// AdminBro.registerAdapter(require('admin-bro-mongoose'));

const classTimetable = require('./routes/classTimetable.router');
const usersRouter = require('./routes/users.router');
const adminRouter = require('./routes/admin.router');

const MONGO_URL = config.get('mongoUri');
const PORT = 5000; // config.get('port');

// express server definition
const app = express();
app.use(bodyParser.json());

app.use(classTimetable);
app.use(usersRouter);
app.use('/admin', adminRouter);

app.get('/api', (req, res) => res.send('Hello World!'));

// Running the server
const start = async () => {
  try {
    await mongoose.connect(MONGO_URL,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      });
    app.listen(PORT, () => console.log(`Timetable-Backend listening on port ${PORT}!`));
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
};

start();
