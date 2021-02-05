import React, { useState } from 'react';
import {useTransition, animated} from 'react-spring';
import Dp1 from './Dp1.png'
export default function About() {
    const [items, set] = useState([{'text': ""}])
    const transitions = useTransition(items, item => item.key, {
        from: { transform: 'translate3d(0,-100px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,-100px,0)' },
        })
    return (transitions.map(({ item, props, key }) =>
    <animated.div key={key} style={props}>
        <div>
            <img src={Dp1} id="img"/>
            <h1 className="nameAbout">Dhanapalan</h1>
            <h1 className="desig">Web Developer</h1>
            <p className="para">After graduating in 2017 with a Bachelor’s Degree (First Class) in Mechanical Engineering, I joined in infosys. I was doing order processing, order queries handling and invoice disputes. After completed 2 years in Infosys, I got an offer in Hewlett Packard Enterprise. I joined and still working. I am really interested in web development. I am learning web development for last 1 year. I am searching for an opportunity to start my new carrier in Web Development. </p>
            <p className="para2">I have ability to learn and adapt things at the short period of time And Creative mind, Hardworking and Possess good management and organizational skills. My hobbies are playing Cricket and watching Hollywood Series.</p>
        </div></animated.div>
        )
    )
}
