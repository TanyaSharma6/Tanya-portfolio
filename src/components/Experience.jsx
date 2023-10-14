import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import '../App.css';
import mysql from "../images/mysql.png";
import springboot from "../images/springboot.png";
import springmvc from "../images/springmvc.png";
import gitlab from "../images/gitlab.webp";
import github from "../images/github.png";
import bootstrap from "../images/bootstrap.png";
import hibernate from "../images/hibernate.png";

const Experience=()=>{

    return(
        <>
            <ResponsiveAppBar/>
            <div className="container-fluid pt-5 container-bg2">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-sm-5">
                                <div>
                                    <h3 className="text-light">Vedika Credit Capital</h3>
                                    <h5 className="text-light">Web Developer</h5>
                                    <h6 className="text-light">Jan 2022 - July 2023</h6>
                                </div>
                        </div>
                        <div className="col-sm-2 tech_stack">
                                <div className="tech_stack_used">
                                    {/* <h6 className="text-light">Tech Stacks Used</h6> */}
                                    <div className="techstack-img">
                                        <img src={springmvc} alt="spring mvc"/>
                                    </div>
                                   
                                    <div className="techstack-img">
                                        <img src={mysql} alt="mysql"/>
                                    </div>
                                    <div className="techstack-img">
                                        <img src={github} alt="github"/>
                                    </div>
                                    <div className="techstack-img">
                                        <img src={gitlab} alt="gitlab"/>
                                    </div>
                                    <div className="techstack-img">
                                        <img src={hibernate} alt="hibernate"/>
                                    </div>
                                    <div className="techstack-img">
                                        <img src={bootstrap} alt="bootstrap"/>
                                    </div>
                                </div>
                        </div>
                        <div className="col-sm-5">
                                <ul className="text-light">

                                    <li>Designed and Developed dynamic & responsive websites using <strong>HTML, CSS, JAVASCRIPT, BootStrap and Angular.</strong></li>
                                    <br/>
                                    <li> Worked with <strong>REST APIs</strong> to retrieve and display data from database.</li>
                                    <br/>
                                    <li>Improved <strong>Website Performace</strong> and speed through optimization techniques.</li>
                                    <br/>
                                    <li>Workedwith <strong>Spring MVC Framework</strong> to develop robust and scalable backend.</li>
                                    <br/>
                                    <li>Troubleshoot and <strong>fixed bugs</strong> and issues in the backend to ensure smooth operation of the applicaion.</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience;