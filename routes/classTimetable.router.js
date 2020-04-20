const { Router } = require('express');
const ClassesTimetable = require('../models/ClassesTimetable');

const router = Router();

router.get('/api/classTimetable', async (req, res) => {
  try {
    const classes = await ClassesTimetable.find({});
    res.send(classes);
  } catch (err) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

router.get('/api/classTimetable/:week&:group', async (req, res) => {
  try {
    const timetable = await ClassesTimetable.find({
      week: req.params.week,
      group: req.params.group,
    });
    res.send(timetable);
  } catch (err) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

router.get('/api/classTimetable/groups/:group', async (req, res) => {
  try {
    const group = await ClassesTimetable.find({ group: req.params.group });
    res.send(group);
  } catch (err) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

router.get('/api/classTimetable/groups/', async (req, res) => {
  try {
    const groups = await ClassesTimetable.find({ }).select('group');
    res.send(groups);
  } catch (err) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

// router.post('/api/classTimetable/post', async (req, res) => {
//   try {
//     const myClass = await new ClassesTimetable({
//       className: 'Математика',
//       classNum: 1,
//       room: 310,
//       group: 'П-43',
//       day: 'Понедельник',
//       week: 'Нечетная',
//     }).save();
//     res.send(myClass);
//   } catch (err) {
//     res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
//   }
// });

module.exports = router;
