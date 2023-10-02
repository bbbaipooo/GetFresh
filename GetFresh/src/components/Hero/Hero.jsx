import React from 'react'
import "./Hero.css"
// import {HiLocationMaker} from 'react-icons/hi'
import { FaSearch } from "react-icons/fa";
import CountUp from "react-countup";
import {animate, motion} from "framer-motion"

const Hero = () => {
    return (
        <div>
            <section className="hero-wrapper">
                <div className=" paddings innerWidth hero-container">
                    {/* left side */}
                    <div className=" hero-left">
                        <div className="hero-title flexColStart">
                            <div className="yellow-circle"/>
                            <motion.h1
                            initial={{y:"2rem",opacity:0}}
                            animate={{y:0,opacity:1}}
                            transition={{
                                duration:2,
                                tyoe:"spring"
                            }}
                            >
                                Take <br/>
                                {/* Take  */}
                                The Power's<br/>
                                From Nature.
                                <br />
                            </motion.h1>
                        </div>

                        <div className="secondaryText flexColStart hero-des">
                            <br/>
                            <span>Find a product from nature that suit you very easility</span>
                            <span>Forget all difficulties in finding a organic product for you</span>
                            <br/>
                        </div>

                        <div className="flexCenter1 search-bar">
                            {/* <FaSearch color="var(--greenLight)" size={25}/> */}
                            <FaSearch color="var(--purple)" size={25}/>
                            <input type="text" />
                            <button className="buttonP">Search</button>
                        </div>

                        <div className="flexCenter1 stats">
                            <div className="flexColStart stat">
                                <span className="statf">
                                    <CountUp start={1800} end={2000} duration={4} />
                                    <span>+</span>
                                </span>
                                <span className='secondaryText'>Happy Customers</span>
                            </div>
                            <div className="flexColStart stat">
                                <span className="statf">
                                    <CountUp start={350} end={400} duration={4} />
                                    <span>+</span>
                                </span>
                                <span className='secondaryText'>Popular Product</span>
                            </div>
                            <div className="flexColStart stat">
                                <span className="statf">
                                    <CountUp end={28}  />
                                    <span>+</span>
                                </span>
                                <span className='secondaryText'>Popular Website</span>
                            </div>
                        </div>
                    </div> 
                    {/* right side */}
                    <div className="flexCenter hero-right">
                        <motion.div 
                        initial={{x:"7rem",opacity:0}}
                        animate={{x:0,opacity:1}}
                        transition={{
                            duration:2,
                            tyoe:"spring"
                        }}
                        className="image-container">
                            <img src="./juice1.jpg" alt="" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
