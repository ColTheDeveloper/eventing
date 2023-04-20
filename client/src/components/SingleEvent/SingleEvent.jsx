import "./SingleEvent.css";
import {Link} from "react-router-dom"
const SingleEvent=({_id,image,name,venue,address,date,time})=>{
    return(
        <div className="SingleEvent">
            <Link to={`/event/${_id}`}>
                <img src={image} alt="Event" />
                <span>{name}</span>
                <span>{venue}-{address}</span>
                <span>{time}</span>
                <span>{date}</span>
            </Link>
        </div>        
    )
}
export default SingleEvent;