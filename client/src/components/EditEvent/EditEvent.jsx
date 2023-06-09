import Popup from "reactjs-popup";
import {useRef, useState} from "react"
import { uploadImage } from '../../api/imageUploadRequest';
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



const EditEvent=({id,name,image, venue,address,date, time})=>{
    const [img, setImg]=useState()
    const API=useAxios()
    const navigate=useNavigate()
    const imgRef= useRef()
    const [data,setData]=useState({
        name:name,
        venue:venue,
        address:address,
        eventDate:date,
        eventTime:time,
        image:image
    })
    

    const handleChange=(e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }

    const handleImageChange=(e)=>{
        setImg(e.target.files[0])
        
    }

    const changeImage=()=>{
        imgRef.current.click()
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        //IF IMAGE IS SELECTED THEN LOAD THIS IF STATEMENT
        if(img){
            const imageData= new FormData()
            imageData.append("file",image);
            imageData.append("upload_preset","eventing");
            imageData.append("cloud_name","djlvd6m7k" );
            try {
                const response=await uploadImage(imageData)
                data.image=response.data.url.toString()
            } catch (error) {
                console.log(error)
            }
            
               
        }
        //FUNCTION FOR SENDING THE FORM DETAILS TO THE BACKEND SERVER
        try {
            
            await API.put(`/event/${id}`, data)//createAnEvent(data)
            toast.success("Update Successful")
            // console.log(response)
            
            navigate("/")
        } catch (error) {
            toast.error("Action Failed")
            console.log(error)
        }
        // submitHandler(data)
    }

    return(
        <Popup
            trigger={<span>Edit Event</span>}
            modal
            nested
        >
        {close => 
            (                          
                <div className="modal">
                    <span className="close" onClick={close}>&times;</span>
                    <div className="header"> Edit Event </div>
                    <form onSubmit={handleSubmit}>
                        {img?
                            <img onClick={changeImage} src={URL.createObjectURL(img)} alt="event" />
                            :
                            <img onClick={changeImage} src={data.image} alt='event' />
                        }

                        <input 
                            type="file" 
                            accept="image/*" 
                            ref={imgRef}
                            onChange={handleImageChange}
                        />

                        <div>
                            <label htmlFor='name'>Event Name:</label><br/>
                            <input 
                                type="text" 
                                name="name" 
                                id='name'
                                className='inputForm'
                                onChange={handleChange}
                                placeholder="Name" 
                                value={data.name}
                            />
                        </div>
                        
                        <div>
                            <label htmlFor='venue' >Venue:</label>
                            <input 
                                type="text" 
                                name="venue" 
                                id='venue'
                                onChange={handleChange}
                                placeholder="Venue" 
                                className='inputForm'
                                value={data.venue}
                            />
                        </div>
                        <div>
                            <label htmlFor='address'>Address:</label>
                            <input 
                                type="text" 
                                name="address" 
                                id='address'
                                onChange={handleChange}
                                placeholder="Address" 
                                className='inputForm'
                                value={data.address}
                            />
                        </div>
                        <div className='inputForm'>
                                <label htmlFor='time'>Event Time:</label>
                                <input 
                                    type="time" 
                                    name="eventTime" 
                                    onChange={handleChange}
                                    id='time'
                                    value={data.eventTime}
                                    
                                />
                        </div>
                        <div className='inputForm'>
                                <label htmlFor='date'>Event Date:</label>
                                <input 
                                    type="date" 
                                    name="eventDate" 
                                    id='date'
                                    onChange={handleChange}
                                    value={data.eventDate}
                                    
                                />
                        </div>                            
                        <button className='btn' type="submit">Create New Event</button>
                    </form>
                </div>    
            )
        }

        </Popup>
    )
}
export default EditEvent;