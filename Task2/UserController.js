import { v4 as uuid } from 'uuid'
const users =[]

class UserController {
    
    createUser(req,res){
        const user= req.body;
        if(!Object.keys(user).length){
            return res.sendStatus(400)
        }
        user.id=uuid()
        users.push(user)
        console.log(`USERS: ${JSON.stringify(users)} `)
        res.status(201).json(user)
    }

    getUsers (req,res) {
        res.status(200).json(users)
    }

    getUserById (req,res) {
        res.status(200).json(users.filter( el => el.id===req.params.id)[0])
    }

    updateUserByid (req,res) {
        users.forEach( (el,index) => {
            if(el.id===req.params.id){
                users[index]=req.body
                users[index].id=req.params.id
            }
        })
        res.status(201).json(users)
    }

    deleteUserById (req,res) {
        users.forEach( (el,index) => {
            if(el.id===req.params.id){
                users[index].isDeleted = true
            }
        })
        res.status(200).json(users)
    }
}

export default new UserController()