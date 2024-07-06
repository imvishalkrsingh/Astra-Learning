import React from "react";
import "./Footer.css"
import fb from "../Footer/fb.svg"
import google from "../Footer/google.png"
import linkdin from "../Footer/linkdin.png"
import logo from "../Footer/logo.svg"
const Footer = ()=>{

    return (
      <div id="main">
      <div id="left">
          <h1><img id="logo" src={logo} alt=""/>astra</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, minima?</p>
          <div id="sociallinks">
              <img src={fb} alt=""/>
              <img src={google} alt=""/>
              <img src={linkdin} alt=""/>
          </div>
      </div>
      <div id="right">
          <div id="sections">
              <h2>Astra</h2>
              <div id="menu">
                  <a href="/home">Home</a>
                  <a href="/courses">Courses</a>
                  <a href="/">Mentors</a>
                  <a href="/about">About us</a>
                  <a href="/contact">Contact</a>
              </div>
          </div>
          <div id="sections">
              <h2>Build</h2>
              <div id="menu">
                  <a href="/">Home</a>
                  <a href="/">Courses</a>
                  <a href="/">Mentors</a>
                  <a href="/">About</a>
                  <a href="/">Contact</a>
              </div>
          </div>
          <div id="sections">
              <h2>Get started</h2>
              <div id="menu">
                  <a href="/">Home</a>
                  <a href="/courses">Courses</a>
                  <h2>Resources</h2>
                  <a href="/">Notes</a>
                  <a href="/">Careers</a>
              </div>
          </div>

      </div>
  </div>
  )
}
export default Footer;