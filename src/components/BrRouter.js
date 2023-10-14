import React from "react";
import { Link, Route, Router } from "react-router-dom";
import TechStack from "./TechStack";


function BrRouter(){
    return (
        <div>

{/* <Router>
    <Route path='/techstack' component={<TechStack/>} />
  </Router> */}

  <button>
  <a href='/techstack'>TechnStack</a>
  </button>
        </div>
    );

};

export default BrRouter;