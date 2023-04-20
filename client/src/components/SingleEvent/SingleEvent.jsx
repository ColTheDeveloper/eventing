import "./SingleEvent.css";

const SingleEvent=({_id,image,name,venue,address,date,time})=>{
    return(
        <div className="SingleEvent">
            <img src={image} alt="Event" />
            <span>{name}</span>
            <span>{venue}-{address}</span>
            <span>{time}</span>
            <span>{date}</span>
        </div>        
    )
}
export default SingleEvent;