const { Schema, model } = require('mongoose');
const validator = require('validator');

const User = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => validator.isEmail(value),
  },
  password: { type: String, required: true },
});

module.exports = model('User', User);
