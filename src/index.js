import dbConnection from "./db/db.js";
import dotenv from 'dotenv'
import { app } from "./app.js";

dotenv.config({
    path: './.env'
})

dbConnection()
.then(()=>{
    // app.on('error', (error)=>{
    //     console.log('databases error', error)
    //     throw error
    // })

    app.listen(process.env.PORT || 8000, ()=>{
        console.log('DB connected port', process.env.PORT)
    })
})
.catch((error)=>{
    console.log('mongoDB data fetching error',error)
})


