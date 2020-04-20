const { Schema, model } = require('mongoose');

const ClassesTimetable = new Schema({
  className: String,
  classNum: Number,
  room: Number,
  group: String,
  day: String,
  week: String,
});

module.exports = model('ClassesTimetable', ClassesTimetable);
