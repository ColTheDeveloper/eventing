import axios from "axios";

const apiUrl=process.env.REACT_APP_API_URL;

const API=axios.create({baseURL:apiUrl})

//export const getAllEvent=()=>API.get("/event");

//export const getAEvent=(id)=>API.get(`/event/${id}`)

//export const createAnEvent=(data)=>API.post("/event", data)

export const deleteAnEvent=(id)=>API.delete(`/event/${id}`)

export const editAnEvent=({id,data})=>API.put(`/event/${id}`, data)