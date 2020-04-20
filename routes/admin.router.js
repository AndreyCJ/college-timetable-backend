const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroMongoose = require('admin-bro-mongoose');
const mongoose = require('mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: '/admin',
});

const PASS = 'jt!76ptip[^4;8~C}Zm@KmR06a59a4';

const ADMIN = {
  email: process.env.ADMIN_EMAIL || 'admin@timetable.com',
  password: process.env.ADMIN_PASSWORD || PASS,
};

const router = AdminBroExpress.buildAuthenticatedRouter(
  adminBro,
  {
    cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
    cookiePassword: process.env.ADMIN_COOKIE_PASS || PASS,
    authenticate: async (email, password) => {
      if (email === ADMIN.email && password === ADMIN.password) {
        return ADMIN;
      }
      return null;
    },
  },
  null,
  {
    resave: true,
    saveUninitialized: true,
  },
);

module.exports = router;
