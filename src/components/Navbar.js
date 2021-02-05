import React, { useState } from 'react';
import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from './About';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Users from './Users';

export default function Navbar() {
    const [colornew, setColor] = useState(false)
    const [colornew1, setColor1] = useState(false)
    const [colornew2, setColor2] = useState(false)
    const [colornew3, setColor3] = useState(false)
    const [colornew4, setColor4] = useState(false)
    const changeColor = () => {
        setColor(true)
        setColor1(false)
        setColor2(false)
        setColor3(false)
        setColor4(false)
    }
    const changeColor1 = () => {
        setColor(false)
        setColor1(true)
        setColor2(false)
        setColor3(false)
        setColor4(false)
    }
    const changeColor2 = () => {
        setColor(false)
        setColor1(false)
        setColor2(true)
        setColor3(false)
        setColor4(false)
    }
    const changeColor3 = () => {
        setColor(false)
        setColor1(false)
        setColor2(false)
        setColor3(true)
        setColor4(false)
    }
    const changeColor4 = () => {
        setColor(false)
        setColor1(false)
        setColor2(false)
        setColor3(false)
        setColor4(true)
    }
    return (
        <div>
            <Router>
      <div>
        <nav>
          <ul style={{"list-style-type": "none","margin": 0,"padding": 0}} className="ul">
            <li style={{ "display": "inline"}} className="homeNav li">
              <Link style={colornew?{"textDecoration": "none","color":"#fff","transition":"3s", 'fontWeight': "bold"}:{"textDecoration": "none","color":"black",'fontWeight': "bold", "transition":"2s", "cursor":"default"}} to="/"><button  onClick={changeColor} className="dpbutton">DP</button></Link>
            </li>
            <div className="right">
            <li style={{ "display": "inline"}}  >
              <Link style={colornew1?{"textDecoration": "none","color":"#fff", 'fontWeight': "bold", "transition":"3s" }:{"textDecoration": "none","color":"black", 'fontWeight': "bold", "transition":"2s", "cursor":"default"}} className="about" to="/about"><button  onClick={changeColor1}  className="ABbutton">About me</button></Link>
            </li>
            <li style={{ "display": "inline"}} >
              <Link style={colornew2?{"textDecoration": "none","color":"#fff", 'fontWeight': "bold","transition":"3s" }:{"textDecoration": "none","color":"black",'fontWeight': "bold","transition":"2s", "cursor":"default"}} className="about" to="/skills"><button  onClick={changeColor2} className="ABbutton">Skills</button></Link>
            </li>
            <li style={{ "display": "inline"}} >
              <Link style={colornew3?{"textDecoration": "none","color":"#fff", 'fontWeight': "bold","transition":"3s" }:{"textDecoration": "none","color":"black", 'fontWeight': "bold","transition":"2s", "cursor":"default"}} className="about" to="/Projects"><button onClick={changeColor3} className="ABbutton">Projects</button></Link>
            </li>
            <li style={{ "display": "inline"}}  className="users">
              <Link  style={colornew4?{"textDecoration": "none","color":"#fff", 'fontWeight': "bold","transition":"3s" }:{"textDecoration": "none","color":"black", 'fontWeight': "bold","transition":"2s", "cursor":"default"}} to="/users"><button onClick={changeColor4} className="USbutton">Contact me</button></Link>
            </li>
            </div>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/skills">
            <Skills/>
          </Route>
          <Route path="/Projects">
            <Projects/>
          </Route>

          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
            
        </div>
    )
}
