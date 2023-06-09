import {BrowserRouter,Routes,Route} from "react-router-dom";
//import { useEffect } from "react";
import './App.css';
import Layout from "./components/Layout/Layout";
import AllEvent from "./pages/AllEvent/AllEvent";
import EventDetails from "./pages/EventDetails/EventDetails";
import Home from "./pages/Home/Home";
//import { getAllEvent } from "./api/eventRequest";
import 'reactjs-popup/dist/index.css';
//import { EventState } from "./context/eventContextProvider";
//import useAxios from "./hooks/useAxios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  //const {eventData,setEventData,setLoading}=EventState()
  //const API=useAxios()

  

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/event" element={<AllEvent />} />
          <Route path="/event/:id" element={<EventDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer />
    </div>
  );
}

export default App;
