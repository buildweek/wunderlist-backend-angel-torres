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

--------------------------------------------------------------------------------------

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