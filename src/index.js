import dotenv from "dotenv"

dotenv.config({
    path: './.env'
})

import connectDB from "./db/db.js";







connectDB() 

.then( ()=> {
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log( "SERVER IS RUNNING ON PORT DEFAULT");

        
    })
}

)

.catch((err)=> {
    console.log(
        "mongo db connection is faulty" , err
    );
    
     
}

)











































































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