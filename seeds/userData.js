const { User } = require('../models');

const userdata =
[
  {
    "username": "Admin1",
    "password": "password1234"
  },
  {
    "username": "Admin2",
    "password": "assword1234"
  },
  {
    "username": "Admin3",
    "password": "assword1234"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;

