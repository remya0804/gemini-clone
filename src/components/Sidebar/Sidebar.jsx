import React, { useContext, useState } from 'react'
import './sidebar.css'

import { IoMenu } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { IoChatboxOutline } from "react-icons/io5";
import { MdOutlineHelpOutline } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { MdOutlineSettings } from "react-icons/md";
import { Context } from '../../Context/Context';



const Sidebar = () => {

    const [expand,setExpand] = useState(false);

    const {recent,setRecent,prevInputs,setPrevInputs,onSent,newChat} = useContext(Context);

    const loadRecent = async (prompt) => {

        setRecent(prompt);

        await onSent(prompt);
    }

  return (
    
    <div className='sidebar'>

        <div className="top">

            <IoMenu onClick={() => setExpand(!expand)} className='menu-icon'/>

            <div className="new-chat" onClick={() => newChat()}>

                <FaPlus />

                {expand ? <p>New Chat</p> : null }
            
            </div>

            {

                expand ? 

                    <div className="recent">

                        <p className="recent-title"> Recent</p>

                        {

                            prevInputs.map((item,idx) => {

                                return  <div key={idx} className="recent-entry" onClick={() => loadRecent(item)}>

                                            <IoChatboxOutline />
                
                                            <p>{item.slice(0,18)}...</p>
                
                                        </div>
                            })
                        }

                        

                    </div>  

                : null

                
            }

                    

        </div>

        <div className="bottom">

            <div className="bottom-item recent-entry">

                <MdOutlineHelpOutline />

                {expand ? <p>Help</p> : null }

            </div>
            <div className="bottom-item recent-entry">

                <GoHistory />
        
                {expand ? <p>Activity</p> : null }

            </div>
            <div className="bottom-item recent-entry">

                <MdOutlineSettings />

                {expand ? <p>Settings</p> : null }

            </div>
        </div>
    </div>
  )
}

export default Sidebar