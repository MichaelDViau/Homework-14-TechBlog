const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Test 101",
    "postContent": "This blog is not running right",
    "userId": 1
  },
  {
    "postTitle": "Boss",
    "postContent": "This is now working",
    "userId": 2
  },
  {
    "postTitle": "New User 01",
    "postContent": "Better then nothing",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;