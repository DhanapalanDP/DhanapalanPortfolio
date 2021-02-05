
import Tik from './Tik.PNG';
import clock from './clock.png';
import game from './game.png';
import expense from './expense.png';
import Calculator from './Calculator.png';
import todo from './todo.png';
import React, { useState } from 'react';
import {useTransition, animated} from 'react-spring';

export default function Projects() {
    const [items, set] = useState([{'text': ""}])
    const transitions = useTransition(items, item => item.key, {
        from: { transform: 'translate3d(0,-100px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,-100px,0)' },
        })

    return (transitions.map(({ item, props, key }) =>
    <animated.div key={key} style={props}>
        <div className="Projects">
            <div className="project1">
                <img src={Tik} className="projectimg1"/>
                <p  className="projectName" style={{textAlign: "center", fontWeight: "600"}}>Tik Tok Toe</p>
            </div>
            <div className="project2">
                <img src={todo}  className="projectimg2"/>
                <p className="projectName" style={{textAlign: "center", fontWeight: "600"}}>Todo List</p>
            </div>
            <div className="project3">
                <img src={game}  className="projectimg3"/>
                <p className="projectName" style={{textAlign: "center", fontWeight: "600"}}>Flip game</p>
            </div>
            <div className="project4">
                <img src={expense}  className="projectimg4"/>
                <p className="projectName" style={{textAlign: "center", fontWeight: "600"}}>Expense Tracker</p>
            </div>
            <div className="project5">
                <img src={clock}  className="projectimg5"/>
                <p className="projectName" style={{textAlign: "center", fontWeight: "600"}}>Clock</p>
            </div>
            <div className="project6">
                <img src={Calculator}  className="projectimg6"/>
                <p className="projectName" style={{textAlign: "center", fontWeight: "600"}}>Calculator</p>
            </div>
        </div></animated.div>
    )
    )
}
