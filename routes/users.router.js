const { Router } = require('express');
const User = require('../models/User');

const router = Router();

// Route which returns last 100 users from the database
router.get('/api/users', async (req, res) => {
  try {
    const users = await User.find({}).limit(10);

    // User.methods.getFullName = function() {
    //     return this.firstName + ' ' + this.lastName;
    // };

    // const fullName = users.getFullName();

    // console.log(fullName);

    res.send(users);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

// Route which creates new user
router.post('/api/users', async (req, res) => {
  try {
    const user = await new User({
      firstName: 'Andrey',
      lastName: 'Chebotar',
      email: 'andreyoneup@gmail.com',
    }).save();
    res.send(user);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

module.exports = router;
