require("dotenv/config")
const mongoose = require('mongoose');
const uri = process.env.CONNECTION_STRING;


const connectDB = async () => {
    try{
    const conn = await mongoose.connect(uri);
    console.log(`Mongodb connected at ${conn.connection.host}`);}
    catch(error){
        console.log(error)
        process.exit(1);

    }
    
}

module.exports = connectDB;