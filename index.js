// Requirements
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('config');
// const helmet = require('helmet');

const classTimetable = require('./routes/classTimetable.router');
const callsTimetable = require('./routes/callsTimetable.router');
const calls = require('./routes/calls.router');
const weekRouter = require('./routes/week.router');
const adminRouter = require('./routes/admin.router');

const MONGO_URL = config.get('mongoUri');
const PORT = 5000; // config.get('port');

// express server definition
const app = express();
app.use(bodyParser.json());
// app.use(helmet());

// Router initialization
app.use(classTimetable);
app.use(callsTimetable);
app.use(calls);
app.use(weekRouter);
app.use('/admin', adminRouter);

// Running the server
const start = async () => {
  try {
    await mongoose.connect(MONGO_URL,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      });
    app.listen(PORT, () => console.log(`Timetable-Backend listening on port ${PORT}!`));
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
};

start();
