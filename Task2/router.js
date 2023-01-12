import Router from 'express'
import UserController from './UserController.js';

const router = new Router()

router.post('/users',UserController.createUser)

router.get('/users',UserController.getUsers)

router.get('/users/:id',UserController.getUserById)

router.put('/users/:id',UserController.updateUserByid)

router.delete('/users/:id',UserController.deleteUserById)

export default router