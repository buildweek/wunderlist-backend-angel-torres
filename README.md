# WunderList-Back-End-
## Angel Torres

### Live Backend URL: https://buildweek-wunderlist.herokuapp.com/

### **Register a user**
*method url*: `/api/register`

*http method*: **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `username`     | String | Yes      | Must be unique           |
| `password`     | String | Yes      |                          |


#### Example
```
  {
    "username": "user",
    "password": "1234",
  }
  ```
#### Response
##### 201 (created)
  ###### Example Response
```
  {
    "id": 1
  }
  ```
##### 400 (Bad Request)
```
  {
    "message": "please provide username and password"
  }
  ```

--------------------------------------------

  ### **Login**
*method url*: `/api/register`

*http method*: **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `username`     | String | Yes      | Must be unique           |
| `password`     | String | Yes      |                          |


#### Example
```
  {
    "username": "user",
    "password": "1234",
  }
  ```
#### Response
##### 201 (created)
  ###### Example Response
```
  {
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcsImlhdCI6MTU1MjQyNzIzMiwiZXhwIjoxNTUyNDMwODMyfQ.oF4nN54xkzNH9znawRdDfDxMnTDaPSdOh7S_JRdAkhd"
  }
  ```
##### 400 (Bad Request)
```
  {
    "message": "please provide username and password"
  }
```

--------------------------------------------

  ### **Get All Lists**
*method url*: `/api/lists`

*http method*: **[GET]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |
|`Authorization` | String | Yes      | Must include token       | 

#### Response
##### 200 (ok)
  ###### Example Response
```
[
    {
        "id": 1,
        "title": "new lis",
        "description": "new list",
        "dueDate": "04/02/2019",
        "completed": "false",
        "userId": 6,
        "createdAt": "2019-03-12 16:49:50"
    },
    {
        "id": 2,
        "title": "new listaaaa",
        "description": "new list......",
        "dueDate": "04/25/2020",
        "completed": 0,
        "userId": 6,
        "createdAt": "2019-03-12 16:53:51"
    }
]
  ```
##### 401 (unauthorized)
```
{
    "name": "JsonWebTokenError",
    "message": "invalid signature"
}
```

-----------------------------------------------------------------------------

  ### **Get All Lists From One User**
*method url*: `/api/lists/:userId`

*http method*: **[GET]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |
|`Authorization` | String | Yes      | Must include token       | 

#### Response
##### 200 (ok)
  ###### Example Response
```
[
    {
        "id": 1,
        "title": "new lis",
        "description": "new list",
        "dueDate": "04/02/2019",
        "completed": "false",
        "userId": 6,
        "createdAt": "2019-03-12 16:49:50"
    },
    {
        "id": 2,
        "title": "new listaaaa",
        "description": "new list......",
        "dueDate": "04/25/2020",
        "completed": 0,
        "userId": 6,
        "createdAt": "2019-03-12 16:53:51"
    }
]
  ```
##### 401 (unauthorized)
```
{
    "name": "JsonWebTokenError",
    "message": "invalid signature"
}
```

-----------------------------------------------------------------------------

  ### **Post List To Database**
*method url*: `/api/lists`

*http method*: **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |
|`Authorization` | String | Yes      | Must include token       | 

#### Body

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `title`        | String | Yes      |                          |
| `description`  | String | Yes      |                          |
| `dueDate`      | String | Yes      |                          |


#### Example
```
  {
    "title": "new lsis",
    "description": "new lissdt",
    "dueDate": "04/02/2019"
  }
  ```

#### Response
##### 201 (created)
  ###### Example Response
```
{
    "id": 1,
}
  ```
##### 400 (bad request)
```
{
    "message": "please provide title, description, and due date"
}
```


-----------------------------------------------------------------------------

  ### **Update List On Database**
*method url*: `/api/lists/:listId`

*http method*: **[PUT]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |
|`Authorization` | String | Yes      | Must include token       | 

#### Body

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `title`        | String | Yes      |                          |
| `description`  | String | Yes      |                          |
| `dueDate`      | String | Yes      |                          |


#### Example
```
  {
    "title": "new lsis",
    "description": "new lissdt",
    "dueDate": "04/02/2019"
  }
  ```

#### Response
##### 204 (no content)

##### 400 (bad request)
```
{
    "message": "please provide title, description, and due date"
}
```
-----------------------------------------------------------------------------

  ### **Delete List On Database**
*method url*: `/api/lists/:listId`

*http method*: **[DELETE]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |
|`Authorization` | String | Yes      | Must include token       | 


#### Response
##### 204 (no content)

|wunderlist|
|---|
|Angel Torres|
