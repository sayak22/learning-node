const mongoose= require('mongoose')
require('dotenv').config();

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