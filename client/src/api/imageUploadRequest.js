import axios from "axios"

const apiUrl=process.env.REACT_APP_API_URL;

const API=axios.create({baseURL:apiUrl})

export const uploadImage=(imageData)=>API.post("/upload", imageData)