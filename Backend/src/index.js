
import dotenv from 'dotenv';
import connectionDB from './db/index.js';
import app from './app.js';

dotenv.config({path: "./env"})


connectionDB()
.then(() =>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Your app is listening on port : ${process.env.PORT}`);
    });
})
.catch((err) =>{
    console.log("database connection failded", err)
})







/*
(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        app.on('error', (error)=>{
            console.error('your app can not talk to your database: ',error);
            throw err;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`Your app is listening on port ${process.env.PORT}`);
        });


    }catch(error){
        console.error('Error',error);
        throw err;
    }
})();

*/