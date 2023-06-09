import axios from "axios";

const apiUrl=process.env.REACT_APP_API_URL;

const useAxios=()=>{
    const API=axios.create({baseURL:apiUrl})

    return API
}

export default useAxios;