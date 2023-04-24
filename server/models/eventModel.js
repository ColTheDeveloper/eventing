import mongoose from "mongoose"

const eventSchema= mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    venue:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    eventDate:{
        type: String,
        required:true
    },
    eventTime:{
        type: String,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    noOfGoing:{
        type:Number,
        Required:true
    }
},
{timestamps:true})

const eventModel=mongoose.model("Events", eventSchema)
export default eventModel;