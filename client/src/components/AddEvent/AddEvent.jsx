
import { useRef, useState } from 'react';
import Popup from 'reactjs-popup';
//import { createAnEvent } from '../../api/eventRequest';
import { uploadImage } from '../../api/imageUploadRequest';
import eventIcon from "../../images/eventIcon.jpg"
import "./AddEvent.css"
import useAxios from '../../hooks/useAxios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const AddEvent=()=>{
    const [data, setData]=useState({
        name:"",
        venue:"",
        address:"",
        eventDate:"",
        eventTime:"",
        image:""
    })
    const [image,setImage]=useState()

    const navigate=useNavigate()

    const API=useAxios()

    const imageRef=useRef()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        //IF IMAGE IS SELECTED THEN LOAD THIS IF STATEMENT
        if(image){
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
            
            await API.post("/event", data)//createAnEvent(data)
            toast.success("Event Created")
            // console.log(response)
            setData({
                name:"",
                venue:"",
                address:"",
                eventDate:"",
                eventTime:"",
                image:""
            })
            setImage()
            navigate("/")

        } catch (error) {
            toast.error("Action Failed")
            console.log(error)
        }
        // submitHandler(data)
    }

    //FUNCTION THAT HANDLE THE CHANGES IN THE FORM
    const handleChange=(e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }
    //FUNCTION THAT HANDLES WHAT HAPPRN IF NEW IMAGE IS SELECTED FROM FILE 
    const handleImageChange=(e)=>{
        setImage(e.target.files[0])
        
    }
    //FUNCTION THAT WILL BE CALLED IF THE IMAGE SECTION OF THE FORM IS CLICKED 
    //IT SERVE AS A BUTTON THAT IS LINKED TO THE FILE TYPE INPUT ELEMENT
    const changeImage=()=>{
        imageRef.current.click()
    }
    
    return(
        <Popup    
            trigger={<button className="btn">Add New Event</button>}    
            modal    
            nested
        >    
            {close => 
                (                          
                    <div className="modal">
                        <span className="close" onClick={close}>&times;</span>
                        <div className="header"> Add New Event </div>
                        <form onSubmit={handleSubmit}>
                            {image?
                                <img onClick={changeImage} src={URL.createObjectURL(image)} alt="event" />
                                :
                                <img onClick={changeImage} src={eventIcon} alt='event' />
                            }

                            <input 
                                type="file" 
                                accept="image/*" 
                                ref={imageRef}
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
export default AddEvent;