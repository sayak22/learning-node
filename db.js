const mongoose= require('mongoose')
require('dotenv').config();
/* .env file is very sensetive at it contains various sensetive information about the database and server,
 like username and password of db and port of the server
 so it is generally sent secretly and uploaded secretly while hosting on the server
 In companies also the .env of the project is shared secretly to the employees*/ 

// const mongoURL = process.env.LOCALDB_URL_LOCAL; // local mongoURL

const mongoURL = process.env.MONGODB_URL; // MongoDB Atlas hosted cluster URL

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db=mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB');
})

db.on('disconnected',()=>{
    console.log('Disconnected from MongoDB')
})

db.on('error', ()=>{
    console.log('MongoDB connection error')
})

module.exports =db;