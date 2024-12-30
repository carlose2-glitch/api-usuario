

## Description

[Todo-list](https://github.com/carlose2-glitch/todo-list) Task List API.

Create Task.
Delete Task.
Update Check Task.
Create User Task.

## Note: to create the user you must meet the following conditions.

### It must have a maximum length of 8 characters, the first letter must be uppercase, followed by a lowercase letter or number, finally it must end with some special character.


## requirements to create user in the database:

ci "user identification"
name "user name"
lastname "last name user"
user "user"
password "password"

## requirements to create task in the database:

iduser "user identification"
task "name task"
date "task date"
theme "theme of task user"
check "boolean"

## requeriments .env:

URL_MONGO "url mongo db"
JWT_KEY= "secret key JWT"


## run the project

```bash
# watch mode
$ npm run start:dev







