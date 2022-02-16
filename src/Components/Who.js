import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Who.css';


export default class Who extends Component {
  render() {
    return <>
    
    <h1 className='head'>Who Can Learn.</h1>
    <div className="Containerg"> 
    
    <div class="card">
    <div class="card-side front1">
      <div><h1>Child</h1></div>
    </div>
    <div class="card-side back1">
      <div style={{textAlign: 'center'}}><h2>"OLD MEN CAN MAKE WAR, BUT IT IS CHILDREN WHO WILL MAKE HISTORY."</h2><h5>Ray Merritt</h5><button className="cbtn" ><Link to="/Login" >Login as Child</Link></button></div>
    </div>
  </div>

  <div class="card">
    <div class="card-side front2">
      <div><h1>Teacher</h1></div>
    </div>
    <div class="card-side back2">
    <div style={{textAlign: 'center'}}><h2>"I AM NOT A TEACHER, BUT AN AWAKENER."</h2><h5>Robert Frost</h5><button className="cbtn" >Login as Teacher</button></div>
    </div>
  </div>

  <div class="card">
    <div class="card-side front3">
      <div><h1>Parent</h1></div>
    </div>
    <div class="card-side back3">
    <div style={{textAlign: 'center'}}><h2>"I AM NOT A TEACHER, BUT AN AWAKENER."</h2><h5>Robert Frost</h5><button className="cbtn" >Login as Parent</button>
    </div></div>
  </div>
</div>
    </>;
  }
}
