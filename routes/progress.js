var express = require('express')
var router = express.Router()

/* GET progress by User Id. */
router.get('/', function(req, res, next) {
  let userId = parseInt(req.query.userId)
  let userProgress = progressData.find(s => s.userId == userId)

  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(userProgress))
})

/* PUT progress by User Id. */
router.put('/', function(req, res, next) {
  let progressToUpdate = {
    userId: req.body.userId, 
    avatarUrl: req.body.avatarUrl,
    fullName: req.body.fullName, 
    totalTasks: req.body.totalTasks,
    totalPoints: req.body.totalPoints
  }

  let progressIndex = progressData.findIndex(t => t.userId == progressToUpdate.userId)
  progressData.splice(progressIndex, 1, progressToUpdate)

  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({ numberOfRecordsUpdated: 1 }))
})

let progressData = [
  {
    "userId": 0,
    "avatarUrl": null,
    "fullName": "Erling Haaland",
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
