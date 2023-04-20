import mongoose from "mongoose"
import eventModel from "../models/eventModel.js";

// CREATE AN EVENT
export const createEvent= async (req,res)=>{
    const newEvent= new eventModel(req.body);

    try {
        await newEvent.save()
        res.status(201).json(newEvent)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// GET ALL EVENT
export const getAllEvent= async (req,res)=>{
    try{
        const allEvent= await eventModel.find()
        res.status(200).json(allEvent.sort((a,b)=>1))
    }catch(error){
        res.status(500).json(error.message)
    }
}

// GET A SPECIFIC EVENT
export const getAnEvent= async (req,res)=>{
    const id=req.params.id
    try{
        const event=await eventModel.findById(id)
        res.status(200).json(event)
    }catch(error){
        res.status(500).json(error.message)
    }
}

// DELETE AN EVENT
export const deleteAnEvent= async (req,res)=>{
    const id=req.params.id
    try{
        await eventModel.findByIdAndDelete(id)
        res.status(200).json("event deleted successfully")
    }catch(error){
        res.status(500).json(error.message)
    }
}

// EDIT AN EVENT
export const editAnEvent=async (req,res)=>{
    const id = req.params.id
    try{
        const event= await eventModel.findByIdAndUpdate(id, req.body,{new:true})
        res.status(200).json(event)
    }catch(error){
        res.status(500).json(error.message)
    }
}