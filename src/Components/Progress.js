import React, { Component } from 'react'
import "../css/Progress.css";


import assignments from '../images/progressPage/assignments.jpg'
import coursecontent from '../images/progressPage/coursecontent.jpg'
import certification from '../images/progressPage/certification.jpg'
import quiz from '../images/progressPage/quiz.jpg'





export default class Progress extends Component {
  render() {
    return (
      <div>
        <div>
        <section className='sec' >
          <div className="video-containerr">
            <div className="color-overlay"></div>
            <video autoplay loop muted>
              <source src="pic/Blue - 9809.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="containr">
            <h1 className="headr">COURSE PROGRESS </h1>
            <div id="stepProgressBar">
              <div className="step">
                <img className="coursepic" src={coursecontent} alt="" />
                <br />
                <p className="step-text">COURSE CONTENT</p>
                <div className="bullt b1">
                  <i className="fa fa-check"></i>{" "}
                </div>
              </div>
              <div className="step">
                <img className="coursepic" src={assignments} alt="" />
                <br />

                <p className="step-text">ASSIGNMENTS</p>
                <div className="bullt b2">
                  <i className="fa fa-check"></i>
                </div>
              </div>
              <div className="step">
                <img className="coursepic" src={quiz} alt="" />
                <br />

                <p className="step-text">QUIZ</p>
                <div className="bullt b3">
                  <i className="fa fa-check"></i>
                </div>
              </div>
              <div className="step">
                <img className="coursepic" src={certification} alt="" />
                <br />

                <p className="step-text">CERTIFICATION</p>
                <div className="bullbulltt b4">
                  <i className="fa fa-check"></i>
                </div>
              </div>
            </div>
            <div id="main">
              <div className="currently">
                <p style={{fontSize : "30px"}  }>YOU HAVE COMPLETE - </p>
                <p style={{fontSize : "30px"}}> PART-</p>
                <p  id="content"  className="text-center" >
                  {" "}
                  1
                </p>
              </div>

              <button id="previousBtn">Previous</button>
              <button id="nextBtn">Next</button>
              <button id="finishBtn">Finish</button>
            </div>
          </div>
        </section>

        <script src="app.js"></script>
        <script src="app2.js"></script>
      </div>
      </div>
    )
  }
}