REST API 

General Infomation 
1. Run command "npm intall"  to install all dependence  in project root directory 
2. All api will return either JSON or Array Object

Public API Endpoints

1. Insert Candidate 
    POST /student/register
     it's accept two property name,email 

2. Insert Test Score 
    POST /testscores/:id 
    it accept three property first_round,second_round ,third_round 
    
    
3. Show Candidate 
    GET /student
    return JSON response which has  name,email of all student 
     // http://localhost:3000/student
RESPONSE 
[
  {
    "_id": "60c749d80812640fe8646186",
    "name": "test1",
    "email": "test@gmail.com",
    "createdAt": "2021-06-14T12:21:44.118Z",
    "updatedAt": "2021-06-14T12:21:44.118Z",
    "__v": 0
  },
  {
    "_id": "60c749e00812640fe8646187",
    "name": "test2",
    "email": "test2@gmail.com",
    "createdAt": "2021-06-14T12:21:52.463Z",
    "updatedAt": "2021-06-14T12:21:52.463Z",
    "__v": 0
  },
  {
    "_id": "60c749ea0812640fe8646188",
    "name": "test3",
    "email": "test3@gmail.com",
    "createdAt": "2021-06-14T12:22:02.759Z",
    "updatedAt": "2021-06-14T12:22:02.759Z",
    "__v": 0
  }
]   


4. Show a particular Candidate 
    GET /student/:id 
    have pass candidate id in url
    reutrn JSON response 
    RESPONSE 
    // http://localhost:3000/student/60c749e00812640fe8646187

{
  "_id": "60c749e00812640fe8646187",
  "name": "test2",
  "email": "test2@gmail.com",
  "createdAt": "2021-06-14T12:21:52.463Z",
  "updatedAt": "2021-06-14T12:21:52.463Z",
  "__v": 0
}



5. Show Scores of ALL Candidate 
    GET /scores 
    return JSON response which have Candidate name and it's scores 
    RESPONSE 
    // http://localhost:3000/scores

[
  {
    "_id": "60c74ad20812640fe8646189",
    "candidate": {
      "_id": "60c749d80812640fe8646186",
      "name": "test1"
    },
    "first_round": 10,
    "second_round": 10,
    "third_round": 10,
    "total": 30,
    "createdAt": "2021-06-14T12:25:54.558Z",
    "updatedAt": "2021-06-14T12:25:54.558Z",
    "__v": 0
  },
  {
    "_id": "60c74b860812640fe864618a",
    "candidate": {
      "_id": "60c749e00812640fe8646187",
      "name": "test2"
    },
    "first_round": 5,
    "second_round": 6,
    "third_round": 5,
    "total": 16,
    "createdAt": "2021-06-14T12:28:54.069Z",
    "updatedAt": "2021-06-14T12:28:54.069Z",
    "__v": 0
  },
  {
    "_id": "60c74ba00812640fe864618b",
    "candidate": {
      "_id": "60c749ea0812640fe8646188",
      "name": "test3"
    },
    "first_round": 2,
    "second_round": 3,
    "third_round": 1,
    "total": 6,
    "createdAt": "2021-06-14T12:29:20.888Z",
    "updatedAt": "2021-06-14T12:29:20.888Z",
    "__v": 0
  }
]



6. Show Score of particular Candidate
    GET /scores/:id 
    return JSON response  it' require ID of candidate 
    RESPONSE 
    // http://localhost:3000/scores/60c74ad20812640fe8646189

{
  "_id": "60c74ad20812640fe8646189",
  "candidate": "60c749d80812640fe8646186",
  "first_round": 10,
  "second_round": 10,
  "third_round": 10,
  "total": 30,
  "createdAt": "2021-06-14T12:25:54.558Z",
  "updatedAt": "2021-06-14T12:25:54.558Z",
  "__v": 0
}

7. Show scores of Highest Scoring student
    GET /scores/highest 
    return JSON response  
    {
  "_id": "60c74ad20812640fe8646189",
  "candidate": "60c749d80812640fe8646186",
  "first_round": 10,
  "second_round": 10,
  "third_round": 10,
  "total": 30,
  "createdAt": "2021-06-14T12:25:54.558Z",
  "updatedAt": "2021-06-14T12:25:54.558Z",
  "__v": 0,
  "name": "test1",
  "email": "test@gmail.com"
}


8. Show the Average Score in every Round
    GET /scores/average 
    return JSON response 
    // http://localhost:3000/scores/highest

{
  "_id": "60c74ad20812640fe8646189",
  "candidate": "60c749d80812640fe8646186",
  "first_round": 10,
  "second_round": 10,
  "third_round": 10,
  "total": 30,
  "createdAt": "2021-06-14T12:25:54.558Z",
  "updatedAt": "2021-06-14T12:25:54.558Z",
  "__v": 0,
  "name": "test1",
  "email": "test@gmail.com"
}
