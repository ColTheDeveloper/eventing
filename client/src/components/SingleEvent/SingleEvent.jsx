import More from "../More/More";
import "./SingleEvent.css";

const SingleEvent=({_id,image,name,venue,address,date,time})=>{
    return(
        <div className="SingleEvent">
            <More id={_id} name={name} image={image} venue={venue} address={address} data={date} time={time}/>
            <img src={image} alt="Event" />
            <span>{name}</span>
            <span>{venue}-{address}</span>
            <span>{time}</span>
            <span>{date}</span>
        </div>        
    )
}
export default SingleEvent;