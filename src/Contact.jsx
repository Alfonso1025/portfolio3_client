
import React, { useRef, useState } from 'react';
import './styles/Contact.css'
import emailjs from '@emailjs/browser';
import SentEmail from './SentEmail';
function Contact(){
    //state variables
    const [status, setStatus] = useState('')
    const [message, setMessage] = useState('')
    
    const form = useRef()

    function sendEmail(e){
        e.preventDefault();
        
        const inputs = form.current.querySelectorAll('input[type="text"], input[type="email"]');
        for (const input of inputs) {
            if (!input.value.trim()) {
                setStatus('ERROR')
                setMessage('Missing a required field!')
                setTimeout(()=>{
                    setStatus('')
                }, 2000)
                return; 
    }
  }
        emailjs.sendForm('service_wd04e3j', "id_contact_form", form.current, '7NspTMH9mI7skH4vJ')
          .then((result) => {
             setStatus('SUCCESS')
             setTimeout(()=>{
                e.target.reset() 
                setStatus('')
            }, 3000)

              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
         

    }
    if (status === 'SUCCESS') return <SentEmail/>
    return(
        <div className="contact-wrapper">
             <form  ref= {form} onSubmit={sendEmail} className="form">
                <div  className="input-grid">
                    <input name="from_firstname" className="contact-input" type="text" placeholder="Firts name"/>
                    <input name="from_lastname" className="contact-input" type="text" placeholder="Last Name"/>
                    <input name="from_email"className="contact-input" type="email" placeholder="Email"/>
                    <input name="company"className="contact-input" type="text" placeholder="Company"/>

                </div>
                <textarea name="message" className="contact-message" placeholder="Message" ></textarea>
                <button className="button"  id="contact-button">
                    SEND MESSAGE
                </button>
                  
                    
                    
            </form>
            {
                status === 'ERROR' &&
                <div className='error-container'>
                    <p className='error-text'>{message}</p>
                </div>
            }
                  
        </div>
    )
}

export default Contact