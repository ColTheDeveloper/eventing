import { Link } from "react-router-dom";
import SingleEvent from "../SingleEvent/SingleEvent";
import "./AllEventComponent.css"
import { getAllEvent } from "../../api/eventRequest";
import { useEffect, useState } from "react";

const AllEventComponent=()=>{
    const [eventData, setEventData]=useState([])
    
    useEffect(() => {
        const eventDataHandler= async ()=>{
            try {
                const response= await  getAllEvent()
                console.log(response)
                setEventData(response.data)
            } catch (error) {
                console.log(error)
                
            }
            
        }
        eventDataHandler()
    },[])

    
    
    return(
        <div className="AllEventComponent">
            <div>
                <div>
                    <span></span>
                    <span>All Event</span>
                </div>
                <Link to="/event" ><button className="btn">See All</button></Link>
            </div>
            <div>
                {
                    eventData.map((event)=>{
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
                    })
                }
                
            </div>

        </div>
    )
}
export default AllEventComponent; 