import React from "react";
import './about.css'
import Image from "../../assets/avatar-2.svg"


const About = ()=>{
    return(
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img"/>

                <div className="about__data grid"></div>
            </div>
        </section>
    )
}

export default About