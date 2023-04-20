import "./AllEvent.css";
//import eventData from "../../data/AllEventData";
import SingleEvent from "../../components/SingleEvent/SingleEvent";
import AddEvent from "../../components/AddEvent/AddEvent";
// import { getAllEvent } from "../../api/eventRequest";
import { useState } from "react";
import { EventState } from "../../context/eventContextProvider";

const AllEvent=()=>{
    const {eventData}=EventState()
    const [query, setQuery]=useState("")
    
    

    const datas=eventData.filter(data=>data.name.toLowerCase().includes(query.toLowerCase()))
    
    if(datas.length===0){
        
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
                    {datas.map((event)=>{
                        const {_id,image,name,venue,address,eventDate,eventTime}= event
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
                            />
                        )
                    })}
    
                </div>
            </div>
        )
        
    }
    
}

export default AllEvent;