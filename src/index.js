import dotenv from "dotenv"

dotenv.config({
    path: './.env'
})

import connectDB from "./db/db.js";







connectDB() ;













































































// import express from "express" ; 
// const app = express()

// ;(async()=>{

    //     try {

    //         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    //         app.on ("error", (error) => {
        //             console.log(("erorr", error));
        //             throw error
        
//         })

//         app.listen(process.env.PORT, ()=> {
//             console.log("app is listening on port 3000 ");
            
//         })

        
//     } catch (error) {

//         console.error("Error: ", error);
//         ;
        
        
//     }
// })()