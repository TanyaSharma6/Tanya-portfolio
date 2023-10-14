import './App.css';

import Education from './components/Education';
import {  Route, BrowserRouter , Routes } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import Experience from './components/Experience';


function App() {
  return (
    <div className="App">

     <BrowserRouter> 
      <Routes>
                <Route  index element={< Home />}></Route>
                <Route  path='/education' element={< Education />}></Route>
                <Route  path='/about' element={< Home />}></Route>
                <Route  path='/contact' element={< Contact />}></Route>
                <Route  path='/experience' element={< Experience />}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
