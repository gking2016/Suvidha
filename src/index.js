import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login';
import Classes from './Components/Classes';
import Course from './Components/Course';
import StudentDashboard from './Components/StudentDashboard';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ClassCourse from './Components/ClassCourse';
import StudentProfile from './Components/StudentProfile';
import Progress from './Components/Progress';
import Chatbox from './Components/Chatbox';

ReactDOM.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/StudentDashboard" element={<StudentDashboard />}></Route>
      <Route path="/learnerSection" element={<ClassCourse />}></Route>
      <Route path="/Classes" element={<Classes />}></Route>
      <Route path="/Course" element={<Course />}></Route>
      <Route path='/StudentProfile' element={<StudentProfile/>}></Route>
      <Route path='/Progress' element={<Progress/>}></Route>
      <Route path='/Chatbox' element={<Chatbox/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
