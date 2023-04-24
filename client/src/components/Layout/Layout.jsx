import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Layout=()=>{
    return(
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}
export default Layout;