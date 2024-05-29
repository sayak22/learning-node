const mongoose=require('mongoose')

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        required:true,
        enum:['manager','waiter','chef']
    },
    mobile:{
        type:Number,
        required: true,
        unique:true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
})

const Person = mongoose.model('Person', personSchema)
module.exports=Person