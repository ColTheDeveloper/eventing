import { useParams } from "react-router-dom";
import "./EventDetails.css";

const EventDetails=()=>{
    const {id}=useParams()
    
    return(
        <div>
        EVENT DETAILS
        {id}

        </div>
    )
}

export default EventDetails;