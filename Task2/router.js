import Router from 'express'
import UserController from './UserController.js';
import validateUser from './validator.js'

const router = new Router()

router.post('/users', validateUser, UserController.createUser)

router.get('/users', UserController.getUsers)

router.get('/user/:id', UserController.getUserById)

router.put('/user/:id', UserController.updateUserByid)

router.delete('/user/:id', UserController.deleteUserById)

export default router