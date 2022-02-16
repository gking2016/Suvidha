import React from "react";
import '../css/SDashboard.css'
import { Link } from 'react-router-dom';
function StudentDashboard() {
  return <div>
          <div class="containe">
        <aside>
            <div class="top">
                <div class="logo">
                    <img src="insert logo here.jpg" />
                    <h2>SUVIDHA</h2>
                </div>
                <div class="close" id="close-btn">
                    <span class="material-icons-sharp">
                        close
                        </span>
                </div>
            </div>
            <div class="sidebar">
                <Link to="/StudentProfile">
                    <span class="material-icons-sharp">
                        person
                        </span>
                        <h3>My Profile</h3>
                </Link>
                <a href="#" class="active">
                    <span class="material-icons-sharp">
                        space_dashboard
                        </span>
                        <h3>Dashboard</h3>
                </a>
                <a href="#">
                    <span class="material-icons-sharp">
                        library_books
                        </span>
                        <h3>Courses</h3>
                </a>
                <Link to="/Progress">
                    <span class="material-icons-sharp">
                        data_exploration
                        </span>
                        <h3>My progress</h3>
                </Link>
                <Link to="/Chatbox">
                    <span class="material-icons-sharp">
                        chat_bubble
                        </span>
                        <h3>Chatbox</h3>
                </Link>
                <a href="#">
                    <span class="material-icons-sharp">
                        shopping_cart
                        </span>
                        <h3>Cart</h3>
                </a>
                <Link to="/">
                    <span class="material-icons-sharp">
                        logout
                        </span>
                        <h3>logout</h3>
                </Link>
            </div>
         </aside>
         <main>
           <h1>
               DASHBOARD
           </h1>
         </main>
        
    </div>
  </div>;
}

export default StudentDashboard;
