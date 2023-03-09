import "./AllEvent.css";
//import eventData from "../../data/AllEventData";
import SingleEvent from "../../components/SingleEvent/SingleEvent";
import AddEvent from "../../components/AddEvent/AddEvent";
import { getAllEvent } from "../../api/eventRequest";
import { useEffect, useState } from "react";

const AllEvent=()=>{
    const [datas, setEventData]=useState([])

    const [query, setQuery]=useState("")
    
    useEffect(() => {
        const eventDataHandler= async ()=>{
            try {
                const response= await  getAllEvent()
                setEventData(response.data)
            } catch (error) {
                console.log(error)    
            }       
        }
        eventDataHandler()
    },[])

    const eventData=datas.filter(data=>data.name.toLowerCase().includes(query.toLowerCase()))
    
    if(eventData.length===0){
        
        return(
            <div className="AllEvent">
                <div>
                    <input 
                        type="text"
                        placeholder="Search By Name" 
                        value={query}
                        onChange={(e)=>setQuery(e.target.value)}                         
                    />
                    <AddEvent />
                </div>
                
                <div>
                    NO EVENT FOUND
    
                </div>
            </div>
        )
    }else{
        return(
            <div className="AllEvent">
                <div>
                    <input 
                        type="text"
                        placeholder="Search By Name" 
                        value={query}
                        onChange={(e)=>setQuery(e.target.value)}                         
                    />
                    <AddEvent />
                </div>
                
                <div>
                    {eventData.map((event)=>{
                        const {_id,image,name,venue,address,eventDate,eventTime,noOfGoing}= event
                        return(
                            <SingleEvent 
                                _id={_id}
                                key={_id}
                                name={name}
                                image={image}
                                venue={venue}
                                address={address}
                                time={eventTime}
                                date={eventDate}
                                noOfGoing={noOfGoing}                            
                            />
                        )
                    })}
    
                </div>
            </div>
        )
        
    }
    
}

export default AllEvent;