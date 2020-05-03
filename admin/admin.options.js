const AdminBro = require('admin-bro');
const mongoose = require('mongoose');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

/** @type {AdminBro.AdminBroOptions} */
const options = {
  databases: [mongoose],
  branding: {
    companyName: 'Расписание колледжа'
  },
  rootPath: '/timetable-admin',
  logoutPath: '/timetable-admin/exit',
  loginPath: '/timetable-admin/sign-in',
}

module.exports = options;