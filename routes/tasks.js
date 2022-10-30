const { v4: uuidv4 } = require('uuid')
const dayjs = require('dayjs')

var express = require('express')
var router = express.Router()

/* GET tasks. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(taskData))
})

let taskData = [
  {
    "id": uuidv4(),
    "title": "Brainstorm app ideas",
    "description": "Let's get creative!",
    "points": 5,
    "isCompleted": true,
    "enteredDate": dayjs().subtract(2, 'day').format('YYYY-MM-DD'),
    "completionDate": dayjs().subtract(2, 'day').format('YYYY-MM-DD')
  },
  {
    "id": uuidv4(),
    "title": "Settle on a tasking app",
    "description": "Reminders is just an inspo.",
    "points": 3,
    "isCompleted": true,
    "enteredDate": dayjs().subtract(2, 'day').format('YYYY-MM-DD'),
    "completionDate": dayjs().subtract(1, 'day').format('YYYY-MM-DD')
  },
  {
    "id": uuidv4(),
    "title": "Buy Bitcoin",
    "description": "Got a good feeling this time.",
    "points": 5,
    "isCompleted": false,
    "enteredDate": dayjs().format('YYYY-MM-DD'),
    "completionDate": null
  },
  {
    "id": uuidv4(),
    "title": "Clean the car",
    "description": "Time to clean off last year's snow.",
    "points": 3,
    "isCompleted": false,
    "enteredDate": dayjs().format('YYYY-MM-DD'),
    "completionDate": null
  }
]

module.exports = { router, taskData }
