import "./SingleEvent.css";
import {Link} from "react-router-dom"
const SingleEvent=({_id,image,name,description,venue,address,date,time,noOfGoing})=>{
    const apiUrl=process.env.REACT_APP_API_URL
    return(
        <div className="SingleEvent">
            <Link to={`/event/${_id}`}>
                <img src={`${apiUrl}/images/${image}`} alt="Event" />
                <span>{name}</span>
                <span>{venue}-{address}</span>
                <span>{time}</span>
                <span>{date}</span>
            </Link>
        </div>        
    )
}
export default SingleEvent;