import React, { Component } from 'react';
import "./About.css";
import ShibaInu from "../assets/ShibaInu.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              // Image goes here
              src={ShibaInu}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Charlie Jin</div>
            <div className="brief_description">
              CP4BAaaS development manager at IBM
            </div>
          </div>
        </div>
      </div>
    )
  }
}