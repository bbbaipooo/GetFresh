import React from 'react'
import './contact.css'
import {MdPhone} from 'react-icons/md'
import {IoChatbubbleEllipsesSharp,IoVideocam} from "react-icons/io5";
import {IoMdText} from "react-icons/io";
import Box from './Box';
const Contact = () => {
  return (
    <div>
      <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c--container">
            {/* left side */}
            <div className="flexColStart c-left">
                <span className="yellowText">Our Contacts</span>
                <span className="primaryText">Easy to Contact us</span>
                <span className="secondaryText">We always ready to help by finding the best product alway for you. We believe <br/>a good blance to live can make your life better.</span>

                <div className="flexColStart contactModes">
                    {/* first row */}
                    <div className="flexStart row ">
                        <Box icon={<MdPhone size={25}/>} name="Call" nameBtn="Call Now" />
                        {/* second mode */}
                        <Box icon={<IoChatbubbleEllipsesSharp size={25}/>} name="Chat" nameBtn="Chat Now"/>                     
                    </div>

                    {/* second row */}
                    <div className="flexStart row ">
                        <Box icon={<IoVideocam size={25}/>} name=" Video Call" nameBtn="Video Call Now" />
                        {/* second mode */}
                        <Box icon={<IoMdText size={25}/>} name="Message" nameBtn="Message Now"/> 
                    </div>
                </div>
            
            </div>

            {/* right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./organic2.jpg" alt="" />
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
