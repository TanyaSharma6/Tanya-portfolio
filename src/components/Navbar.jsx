import React from "react";
import { Link, Route, BrowserRouter as Router , Routes } from "react-router-dom";
import App from "../App";
import Education from "./Education";
import Contact from "./Contact";

function Navbar() {
    return(


        <div className="App">
            <Router> 
            <ul className="App-header">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
            </ul>
     
        <Routes>
                <Route  path='/' element={< App />}></Route>
                <Route  path='/about' element={< Education />}></Route>
                <Route  path='/contact' element={< Contact />}></Route>
        </Routes>
    </Router>
        </div>
    );
}

export default Navbar;