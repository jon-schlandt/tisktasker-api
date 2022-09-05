const { v4: uuidv4 } = require('uuid');
const dayjs = require('dayjs');

var express = require('express');
var router = express.Router();

/* GET tasks. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(taskData));
});

let taskData = [
  {
    "id": uuidv4(),
    "title": "Did stuff",
    "description": "Did the stuff until it was done.",
    "points": 5,
    "isCompleted": true,
    "enteredDate": dayjs().subtract(2, 'day').format('YYYY-MM-DD'),
    "completionDate": dayjs().subtract(0, 'day').format('YYYY-MM-DD')
  },
  {
    "id": uuidv4(),
    "title": "Did more stuff",
    "description": "Did even more stuff until it was done.",
    "points": 3,
    "isCompleted": true,
    "enteredDate": dayjs().subtract(2, 'day').format('YYYY-MM-DD'),
    "completionDate": dayjs().subtract(0, 'day').format('YYYY-MM-DD')
  },
  {
    "id": uuidv4(),
    "title": "Do stuff",
    "description": "Do the thing until it is done.",
    "points": 5,
    "isCompleted": false,
    "enteredDate": dayjs().format('YYYY-MM-DD'),
    "completionDate": null
  },
  {
    "id": uuidv4(),
    "title": "Do more stuff",
    "description": "Keep doing more stuff until the thing is done.",
    "points": 3,
    "isCompleted": false,
    "enteredDate": dayjs().format('YYYY-MM-DD'),
    "completionDate": null
  }
];

module.exports = { router, taskData };
