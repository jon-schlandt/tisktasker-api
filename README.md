# TiskTasker-API

### Table of Contents
- [Overview](#overview)
- [Endpoints](#endpoints)
- [Setup Instructions](#setup-instructions)

## Overview
TiskTasker-API is the back-end that powers the TiskTasker iOS app - repo [here](https://github.com/jon-schlandt/tisktasker). This API was built using Express and follows the standard Express app architecture.

## Endpoints
#### GET tasks
Gets all task records.

##### Request
N/A

##### Response
An array of tasks:
```
[
  {
    "id": UUID,
    "title": String,
    "description": String,
    "points": Int,
    "isCompleted": Boolean,
    "enteredDate": DateTime,
    "completionDate": DateTime
  }
]
```

#### POST task
Inserts a new tasks record.

##### Request
Task information to insert, all required:
```
{
  "title": String,
  "description": String, 
  "points": String,
}
```

##### Response
The number of records inserted:
```
{
  "numberOfRecordsInserted": Int
}
```

#### PUT task
Updates an existing task record by Task Id.

##### Request
Properties to update, Id is required:
```
{
  "id": UUID,
  "title": String,
  "description": String,
  "points": Int,
  "isCompleted": Boolean,
  "enteredDate": DateTime,
  "completionDate": DateTime
}
```

##### Response
The number of records updated:
```
{
  "numberOfRecordsUpdated": Int
}
```

#### DELETE task

##### Request
Query parameter:
```
TaskId = {taskIdToDelete}
```

##### Response
The number of records deleted: 
```
{
  "numberOfRecordsDeleted": Int
}
```

#### GET task-stats
Gets user task stat information by User Id.

##### Request
Query parameter:
```
UserId = {userIdToGet}
```

##### Response
User task stat information:
```
{
  "userId": Int,
  "avatarUrl": String,
  "fullName": String,
  "totalTasks": Int,
  "totalPoints": Int
}
```

#### PUT task-stats
Updates a user's task stat information by User Id.

##### Request
Query parameter:
```
UserId = {userIdToUpdate}
```

##### Response
The number of records updated:
```
{
  "numberOfRecordsUpdated": Int
}
```

## Setup Instructions
#### Running the app:
1. Use `git clone git@github.com:jon-schlandt/tisktasker-api.git` to clone down this repository
2. Install the latest version of Node [here](https://nodejs.org/en/download/)
3. Run TiskTasker's API via Node using `DEBUG=tisktaskerapi:* npm start`
4. Make calls as needed
