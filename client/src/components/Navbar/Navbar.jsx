import profile from "../../images/profile.PNG";
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar =()=>{
    return(
        <div className="Navbar">
            <nav>
                <span><Link to="/">Eventing</Link></span>
                <div>
                    <div >
                        <img src={profile} alt="profile" />
                    </div>
                    <i className="bi bi-caret-down"></i>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar;