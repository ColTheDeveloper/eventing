import { Link } from "react-router-dom";
import SingleEvent from "../SingleEvent/SingleEvent";
import "./AllEventComponent.css"
// import { getAllEvent } from "../../api/eventRequest";
// import { useEffect, useState } from "react";
import { EventState } from "../../context/eventContextProvider";

const AllEventComponent=()=>{
    const {eventData}=EventState()
    
    
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
                    })
                }
                
            </div>

        </div>
    )
}
export default AllEventComponent; 