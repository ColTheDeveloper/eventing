import {createContext, useContext, useState} from "react"

const EventContext=createContext()

const EventContextProvider=({children})=>{
    const [eventData, setEventData]=useState([])
    
    return(
        <EventContext.Provider value={{eventData, setEventData}}>
            {children}
        </EventContext.Provider>
    )

}
export default EventContextProvider

export const EventState=()=>{
    return useContext(EventContext)
}