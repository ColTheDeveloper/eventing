import Popup from "reactjs-popup";
import EditEvent from "../EditEvent/EditEvent";
import "./More.css"
import useAxios from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import { toast} from 'react-toastify'


const More=({id,name,image, venue,address,date, time})=>{
    const API=useAxios()
    const navigate=useNavigate()

    const handleDelete=async()=>{
        
        try {
            await API.delete(`/event/${id}`)
            toast.success("Event Successfully Deleted")
            navigate("/")
            
        } catch (error) {
            toast.error("Action Failed")
            
        }

    }
    return(
        <Popup
            trigger={<div className="more-container">
            <i className="bi bi-three-dots-vertical"></i>
        </div>}
        position="left center"
        arrow={false}
        nested
        >
            <div className="More">
                <EditEvent id={id} name={name} image={image} venue={venue} address={address} data={date} time={time}/>
                <hr />
                <span onClick={(e)=>handleDelete()}>Delete</span>
            </div>

        </Popup>

    )
}

export default More;