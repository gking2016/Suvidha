import React, { Component } from 'react';
import '../css/Footer.css'
export default class Footer extends Component {
  render() {
    return <div>
         <footer>
    <div className="content">
      <div className="top">
        <div className="logo-details">
          <i className="fab fa-slack"></i>
          <span className="logo_name">Suvidha</span>
        </div>
        <div className="media-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <div className="link-boxes">
        <ul className="box">
          <li className="link_name">Links</li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Get started</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Services</li>
          <li><a href="#">Student</a></li>
          <li><a href="#">Parent</a></li>
          <li><a href="#">Teacher</a></li>
          <li><a href="#">Help</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Account</li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">My account</a></li>
          <li><a href="#"></a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Courses</li>
          <li><a href="#">Python</a></li>
          <li><a href="#">Java</a></li>
          <li><a href="#">C#</a></li>
          <li><a href="#">C</a></li>
          <li><a href="#">ReactJS
          </a></li>
        </ul>
        <ul className="box input-box">
          <li className="link_name">Enquiry</li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Submit"/></li>
        </ul>
      </div>
    </div>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">Copyright &#169; 2022 <a href="#">Suvidha</a>All rights reserved</span>
        <span className="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
    </div>;
  }
}
