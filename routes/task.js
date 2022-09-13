const { v4: uuidv4 } = require('uuid');
const dayjs = require('dayjs');
const { taskData } = require('./tasks');

var express = require('express');
var router = express.Router();

/* POST task by Id. */
router.post('/', function(req, res, next) {
  let taskToAdd = {
    id: uuidv4(), 
    title: req.body.title,
    description: req.body.description, 
    points: req.body.points,
    isCompleted: false,
    enteredDate: dayjs().format('YYYY-MM-DD'),
    completionDate: null
  }

  taskData.push(taskToAdd)

  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({ numberOfRecordsInserted: 1 }))
})

/* PUT task by Id. */
router.put('/', function(req, res, next) {
  let taskToUpdate = {
    id: req.body.id, 
    title: req.body.title,
    description: req.body.description, 
    points: req.body.points,
    isCompleted: req.body.isCompleted,
    enteredDate: req.body.enteredDate,
    completionDate: req.body.completionDate
  }

  let taskIndex = taskData.findIndex(t => t.id.toLowerCase() == taskToUpdate.id.toLowerCase());
  taskData.splice(taskIndex, 1, taskToUpdate)

  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({ numberOfRecordsUpdated: 1 }))
});

module.exports = router;
