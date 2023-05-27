import React from "react"
import './styles/Contact.css'
import emailjs from 'emailjs-com';
function Contact(){
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('alfonso25elorriaga', "template_twea4g9", e.target, 'user_hixMCK9CUhz3EOAIIHtPH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    
    return(
        <div className="contact-wrapper">
             <form  onSubmit={sendEmail} className="grid-form">
                
                <input id="firstname" className="contact-input" type="text" placeholder="Name"/>
                <input id="email"className="contact-input" type="email" placeholder="Email"/>
                <input id="company"className="contact-input" type="text" placeholder="Company"/>
                <textarea id="message" className="contact-message" placeholder="Message" ></textarea>
                <button className="button"  id="contact-button">
                    SEND MESSAGE
                </button>
                  
                    
                    
            </form>
                  
        </div>
    )
}

export default Contact