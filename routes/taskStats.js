var express = require('express')
var router = express.Router()

/* GET task stats by User Id. */
router.get('/', function(req, res, next) {
  let userId = parseInt(req.query.userId)
  let userStats = taskStatData.find(s => s.userId == userId)

  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(userStats))
})

/* PUT task stats by User Id. */
router.put('/', function(req, res, next) {
  let taskStatsToUpdate = {
    userId: req.body.userId, 
    avatarUrl: req.body.avatarUrl,
    fullName: req.body.fullName, 
    totalTasks: req.body.totalTasks,
    totalPoints: req.body.totalPoints
  }

  let taskStatsIndex = taskStatData.findIndex(t => t.userId == taskStatsToUpdate.userId)
  taskStatData.splice(taskStatsIndex, 1, taskStatsToUpdate)

  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({ numberOfRecordsUpdated: 1 }))
})

let taskStatData = [
  {
    "userId": 0,
    "avatarUrl": null,
    "fullName": "Elon Mush",
    "totalTasks": 7,
    "totalPoints": 27
  },
  {
    "userId": 1, 
    "avatarUrl": null,
    "fullName": "Jimmy Neutron",
    "totalTasks": 0, 
    "totalPoints": 0
  }
]

module.exports = router;
