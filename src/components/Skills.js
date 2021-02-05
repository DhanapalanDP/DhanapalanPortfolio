import React, { useState } from 'react';
import {useTransition, animated} from 'react-spring';

export default function Skills() {
    const [items, set] = useState([{'text': ""}])
    const transitions = useTransition(items, item => item.key, {
        from: { transform: 'translate3d(0,-100px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,-100px,0)' },
        })

    const lists = ["HTML5","CSS3","Javascript","jQuery","Reactjs","Git","python","SQL"]
    const numbers = lists.map((list)=>
    <li>{list}</li>)
    return (transitions.map(({ item, props, key }) =>
    <animated.div key={key} style={props}>
        <div>
            <h1  className="skills">Technical Skills</h1>
            <div className="lists">
            <ul>
                {numbers}
            </ul>
            </div>
        </div></animated.div>
    )
    )
}
