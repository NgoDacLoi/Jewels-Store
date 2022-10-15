import React from 'react'
import AboutImage from "../img/about.avif";
import "../style/about.css";
import Person1 from "../img/person2.png";
import Person2 from "../img/person3.jfif";

function About() {
  return (
    <div className="about">
        <div className="abouttop" style= {{backgroundImage: `url(${AboutImage})`}}>
        </div>
        <div className="aboutbottom">
            <h1>ABOUT US </h1>
            <div className="img-founder">
                <div className="founder1">
                    <img className="img-founder1" src={Person1} alt="person1" width="200px" height="200px"></img>
                    <p className="story-of-founder1">Story...</p> 
                </div>
                <div className="founder2">
                    <img className="img-founder2" src={Person2} alt="person2" width="200px" height="200px"></img> 
                    <p className="story-of-founder2">Story...</p>
                </div>
                  
                  
            </div>
        </div>
    </div>
  )
}

export default About
