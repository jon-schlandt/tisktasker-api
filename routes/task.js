const { taskData } = require('./tasks');

var express = require('express');
var router = express.Router();

/* PUT task by Id. */
router.put('/', function(req, res, next) {
  let taskToUpdate = req.body;
  let taskIndex = taskData.findIndex(t => t.id = taskToUpdate.id);

  taskData.splice(taskIndex, 1, taskToUpdate)
  res.send(JSON.stringify({ numberOfRecordsUpdated: 1 }))
});

module.exports = router;
