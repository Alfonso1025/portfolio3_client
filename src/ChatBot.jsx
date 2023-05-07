import { useState } from "react"
import bot from './media/chatbot5.png'
import './styles/Chatbot.css'
import {AiOutlineSend} from "react-icons/ai"
import {BsThreeDots,BsRobot} from "react-icons/bs"
import {RxFace} from "react-icons/rx"

function ChatBot() {

  const initValue = {
        content : '',
        author : 'bot',
        timestamp: Date.now()
      }
  const [inputMessage, setInputMessage] = useState('')
  const [userMessage, setUserMessage] = useState('')
  const [botMessage, setBotMessage] = useState(`Hi I am Alfonso's AI assistant offering help with 
  questions about his professional skills. `)
  const [isBotResponding, setIsBotResponding] = useState(false)
  const [hasUserTexted, setHasUserTexted] = useState(false)
  
  const sendMessage = async(e)=>{
    e.preventDefault()
    try {
      setUserMessage(inputMessage)
      setHasUserTexted(true)
      if(userMessage === '') return 
      setIsBotResponding(true)
      const body = {message : userMessage}
      const response = await fetch('http://localhost:3001/chat', {
        method : 'POST',
        headers:{'content-type':'application/json'},
        body: JSON.stringify(body)
      })
      const parseResponse = await response.json()
      console.log('this is the response',parseResponse)
      if(parseResponse.code === 200){
       setBotMessage(parseResponse.data)   
        
      }
      setInputMessage('')
      setIsBotResponding(false)
    } catch (error) {
      console.log('this is the error', error.message)
    }
    

  }
  return (
    <div className="chatbot-wrapper">

    <div>
        <img src={bot} alt="" className="chatbot-image" />
    </div>
      
      
      <div className="message-wrapper">
        {
           hasUserTexted &&
          <div  className='message'>
             <RxFace style={{fontSize: '20px',color:'#1DEDBD'}}/>
            <p className='message-text'>{userMessage}</p>
          </div>
        }
            
            
            <div  className='message'>
                <BsRobot style={{fontSize: '20px',color:'#1DEDBD'}}/>
                <p className='message-text'>{botMessage}</p>
            </div>
        
      </div>

      {
        !isBotResponding ?
        <form className="chatbot-form" >
            <input type="text"
                 className="chatbot-input"
                  placeholder="...type your message"
                  value={inputMessage}
                  onChange={e=>setInputMessage(e.target.value)}
                  />
            <button onClick={sendMessage} className="chat-button">
              <AiOutlineSend style={{fontSize: '30px',color:'#1DEDBD'}}/>
            </button>
        </form>
        :
        <BsThreeDots style={{fontSize: '20px',color:'#1DEDBD'}}/>
      }
     
    </div>
  );
}

export default ChatBot;
