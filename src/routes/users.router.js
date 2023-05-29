const usersRouter = require('express').Router()

const { readAllUsers, createUser, updateUser, deleteUser, readUser } = require('../controllers/users.controller')

usersRouter.get('/', readAllUsers)
usersRouter.post('/', createUser)
usersRouter.patch('/:id', updateUser)
usersRouter.delete('/:id', deleteUser)
usersRouter.get("/:id", readUser);

module.exports = usersRouter