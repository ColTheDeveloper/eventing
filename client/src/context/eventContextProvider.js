import {createContext, useContext, useState,useEffect} from "react"
import Preloader from "../components/Preloader/Preloader" 
import useAxios from "../hooks/useAxios"


const EventContext=createContext()

const EventContextProvider=({children})=>{
    const [eventData, setEventData]=useState([])
    const [loading, setLoading]=useState(false)
    const API=useAxios()

    useEffect(() => {
        const eventDataHandler= async ()=>{
          setLoading(true)
            try {
              const response= await  API.get("/event")
              setEventData(response.data)
              setLoading(false)
            } catch (error) {
              console.log(error)
            }       
        }
        eventDataHandler()

        // eslint-disable-next-line
      },[])
    
    return(
        <EventContext.Provider value={{eventData, setEventData,setLoading}}>
            {loading?<Preloader />:children}
        </EventContext.Provider>
    )

}
export default EventContextProvider

export const EventState=()=>{
    return useContext(EventContext)
}