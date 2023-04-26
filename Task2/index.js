import express from 'express'
import router from "./router.js"

const PORT = 3000
const app=express()
app.use(express.json())
app.use('/api',router)

function startApp(){
    try{
        app.listen(PORT, ()=>{console.log('SERVER STARTED ON PORT: ' + PORT)})
    }catch (e) {
        console.log(e)
    }
}

startApp()

