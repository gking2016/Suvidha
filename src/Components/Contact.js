import React, { Component } from 'react';
import '../css/Contact.css';
import shape from '../images/shape.png'
import loc from '../images/location.png'
import em from '../images/email.png'
import pn from '../images/phone.png'

export default class Contact extends Component {
  render() {
    return <>
    <div>
            <div class="container">
      <span class="big-circle"></span>
      <img src={shape} class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
            Thanks for Joining Suvidha!!<br/>
            Linked In: Suvidha Foundation<br/>
            Instagram: SuvidhaFoundationedutech<br/>
            Youtube Channels: Suvidha Foundation, Codekaro Yaaro
          </p>

          <div class="info">
            <div class="information">
              <img src={loc} class="icon" alt="" />
              <p>H.No. 1951,W.N.4,Khaperkheda, Saoner,Nagpur</p>
            </div>
            <div class="information">
              <img src={em} class="icon" alt="" />
              <p>Info@Suvidhafoundationedutech.Org</p>
            </div>
            <div class="information">
              <img src={pn} class="icon" alt="" />
              <p>7020044091</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 class="title">Contact us</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" placeholder='Username' />
              {/* <label for="">Username</label> */}
              {/* <span>Username</span> */}
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" placeholder='Email' />
              {/* <label for="">Email</label> */}
              {/* <span>Email</span> */}
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" placeholder='Phone'/>
              {/* <label for="">Phone</label> */}
              {/* <span>Phone</span> */}
            </div>
            <div class="input-container textarea" placeholder='Message'>
              <textarea name="message" class="input"></textarea>
              {/* <label for="">Message</label> */}
              {/* <span>Message</span> */}
            </div>
            <input type="submit" value="Send" class="btn" />
          </form>
        </div>
      </div></div></div>
   </>;
  }
}
