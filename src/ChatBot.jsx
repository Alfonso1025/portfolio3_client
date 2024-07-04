import { useState } from "react"
import bot from './media/chatbot5.png'
import './styles/Chatbot.css'
import {AiOutlineSend} from "react-icons/ai"
import {BsThreeDots,BsRobot} from "react-icons/bs"
import {RxFace} from "react-icons/rx"
import Loader from "./Loader"


function ChatBot() {

  const initValue = {
        content : '',
        author : 'bot',
        timestamp: Date.now()
      }
  const localServer = 'http://localhost:3001'
  const remoteServer = 'https://portfolio-server-f6pp.onrender.com'
  const [inputMessage, setInputMessage] = useState('')
  const [userMessage, setUserMessage] = useState('') 
  const [initMessage, setInitMessage] = useState(`Hi! I am Alfonso's AI assistant. I am here to
  help you with questions about Alfonso's professional skills and experience. `)
  const [botMessage, setBotMessage] = useState('')
  const [isBotResponding, setIsBotResponding] = useState(false)
  const [hasUserTexted, setHasUserTexted] = useState(false)
  
  const sendMessage = async(e)=>{
    e.preventDefault()
    try {
      console.log('sending message')
      
      setUserMessage(inputMessage)
      if(inputMessage !== ''){
        setHasUserTexted(true)
        console.log('the message is: ', inputMessage)
        setIsBotResponding(true)
        const body = {message : inputMessage}
        const response = await fetch(`${remoteServer}/chat`, {
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
        }
    } catch (error) {
      console.log('this is the error', error.message)
    }
    

  }
  return (
    <div className="chatbot-wrapper">
    {
      !isBotResponding &&
       <div>
          <img src={bot} alt="" className="chatbot-image" />
  
        </div>
    }
    
      
      
      <div className="message-wrapper">
        {
           hasUserTexted &&
          <div  className='user-message'>
             <RxFace style={{fontSize: '20px',color:'#1DEDBD'}}/>
            <p className='message-text'>{userMessage}</p>
          </div>
        }
        {
          !isBotResponding && !hasUserTexted &&
          <div  className='init-message'>
            <BsRobot style={{fontSize: '20px',color:'#1DEDBD'}}/>
            <p className='message-text'>{initMessage}</p>
          </div>
        }
            
        { !isBotResponding && hasUserTexted &&
            
            <div  className='bot-message'>
                <BsRobot style={{fontSize: '20px',color:'#1DEDBD'}}/>
                <p className='message-text'>{botMessage}</p>
            </div>
        } 
            
        
      </div>

      {
        !isBotResponding ?
        <form className="chatbot-form" >
            <textarea
                 className="chatbot-input"
                  placeholder="Ask a question"
                  value={inputMessage}
                  onChange={e=>setInputMessage(e.target.value)}
                  />
            <button onClick={sendMessage} className="chat-button">
              <AiOutlineSend style={{fontSize: '30px',color:'#1DEDBD'}}/>
            </button>
        </form>
        :
        <Loader/>
      }
     
    </div>
  );
}

export default ChatBot;
