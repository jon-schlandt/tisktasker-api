var express = require('express')
var router = express.Router()

/* GET user stats by Id. */
router.get('/', function(req, res, next) {
  let userId = parseInt(req.query.userId)
  let userStats = userStatData.find(s => s.userId == userId)

  res.send(JSON.stringify(userStats))
})

let userStatData = [
  {
    "userId": 0,
    "avatarUrl": null,
    "fullName": "Elon Kush",
    "totalTasks": 7,
    "totalPoints": 420
  }
]

module.exports = router;
