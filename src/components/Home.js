import React, { useState } from 'react';
import {useTransition, animated} from 'react-spring';
import Dp1 from './Dp1.png'


export default function Home() {
    const [items, set] = useState([{'text': ""}])
    const transitions = useTransition(items, item => item.key, {
        from: { transform: 'translate3d(0,-100px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,-100px,0)' },
        })
        
    return (transitions.map(({ item, props, key }) =>
    <animated.div key={key} style={props}>
        <div>
            <div>
            <img src={Dp1} id="imgHome"/>
            </div>
            <div className="home">
            <h1 className="hi">Hi,</h1>
            <h1 className="name">I'm Dhanapalan,</h1>
            <h1 className="designation">Web Developer</h1>
            <p className="front-end">(front end developer)</p>
        </div>
        </div></animated.div>
    )
        
    )
}
