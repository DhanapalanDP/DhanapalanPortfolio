import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {useTransition, animated} from 'react-spring';

export default function Users() {
    const [items, set] = useState([{'text': ""}])

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_brdwlhi', 'template_ayl53ln', e.target, 'user_p02foJXVJujhxP7uzGzwo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  
    const transitions = useTransition(items, item => item.key, {
        from: { transform: 'translate3d(0,-100px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,-100px,0)' },
        })
  return (transitions.map(({ item, props, key }) =>
  <animated.div key={key} style={props}>
    <div className="bodyForm">
        <div className="Wrapper">
        
        
        <form className="contact-form" onSubmit={sendEmail}>
        <div className="emailMe">
                <h1>Email Me</h1>
        </div>
            <div className="input-fields">
                    <input className="input" type="text" name="name" placeholder="Name" />
                    <input className="input" type="email" id="textIn" name="email" placeholder="Email Address" />
                    <input className="input" type="text" id="textIn" name="subject" placeholder="Subject" />
            </div>
            <div className="msg">
                    <textarea className="textArea" placeholder="Message"  name="message" />
                    <input type="submit" className="btn" value="Send"/>
            </div>
        </form>
        <p className="call" id='or'>or</p>
        <p className="call">Call Me : (+91) 8838931314</p>
        </div>
    
    </div>
    
    </animated.div>
  )
  );
}