import dbConnection from "./db/db.js";
import dotenv from 'dotenv'
import express from 'express'

const app = express()
const port = process.env.PORT || 8000

dotenv.config({
    path: './env'
})

dbConnection()
.then(()=>{
    app.on('error', (error)=>{
        console.log('databases error', error)
        throw error
    })

    app.listen(port, ()=>{
        console.log('DB connected port', port)
    })
})
.catch((error)=>{
    console.log('mongoDB data fetching error',error)
})


