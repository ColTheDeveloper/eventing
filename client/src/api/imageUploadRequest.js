import axios from "axios"

const imageUrl=process.env.REACT_APP_IMAGE_URL;

const API=axios.create({baseURL:imageUrl})

export const uploadImage=(imageData)=>API.post("/upload", imageData)