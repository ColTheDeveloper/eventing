import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Layout from "./components/Layout/Layout";
import AllEvent from "./pages/AllEvent/AllEvent";
import EventDetails from "./pages/EventDetails/EventDetails";
import Home from "./pages/Home/Home";
import 'reactjs-popup/dist/index.css';

function App() {
  console.log(process.env.REACT_APP_API_URL)
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
      
    </div>
  );
}

export default App;
