import React, { useContext } from 'react'
import './main.css'

import profile from '../../assets/p.png'
import gemini from '../../assets/gem.png'

import { LuClock4 } from "react-icons/lu";
import { GoLightBulb } from "react-icons/go";
import { IoChatboxOutline } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";
import { BiImageAdd } from "react-icons/bi";
import { IoMicOutline } from "react-icons/io5";
import { LuSendHorizonal } from "react-icons/lu";

import {Context} from '../../Context/Context'


const Main = () => {

  const {input,setInput,recent,setRecent,prevInputs,setPrevInputs,load,setLoad,resultData,setResultData,showResult,setshowResult,onSent} = useContext(Context);

  return (
   
    
    <div className="main">

      <div className="nav">

          <p>Gemini</p>

          <img src={profile} alt="" />

      </div>

      <div className="main-container">

        

        {
          !showResult ?

          <>

            <div className="greet">

            <p><span>Hello, Sabarish</span></p>
            <p>How can I help you today?</p>

            </div>

            <div className="suggestions">

            <div className="suggestion-card">

              <p>Suggest beautiful places to see an on upcoming road trip</p>

              <div className="suggestion-icon"><LuClock4 /></div>    

            </div>
            <div className="suggestion-card">

              <p>Briefly summarize this concept : urban planning</p>

              <div className="suggestion-icon"><GoLightBulb /></div>          

            </div>
            <div className="suggestion-card">

              <p>Brainstorm team bonding activities for our work retreat</p>

              <div className="suggestion-icon"><IoChatboxOutline /></div> 

            </div>
            <div className="suggestion-card">

              <p>Improve the readability of the following code</p>

              <div className="suggestion-icon"><IoCodeSlashOutline /></div>         

            </div>
            </div>
          
          </>

          :

          <div className="result">

            <div className="result-header">

              <img src={profile} alt="" />

              <p>{recent}</p>
            </div>

            <div className="result-data">

              <img src={gemini} alt="" />

              {

                load 

                ? <div className="loader">
                  
                  <hr />
                  <hr />
                  <hr />

                </div>

                : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
              
            </div>


          </div>
        }

        

        <div className="main-bottom">

          <div className="search">

            <input 
                  type="text" 
                  placeholder='Enter a prompt here'
                  value = {input}
                  onChange={(e) => setInput(e.target.value)}                                   
            />

            <div>

              <BiImageAdd />
              <IoMicOutline />
              {input ? <LuSendHorizonal onClick={() => onSent()}/> : null }

            </div>
          </div>

          <p className="bottom-info">

                Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>

    </div>
  )
}

export default Main