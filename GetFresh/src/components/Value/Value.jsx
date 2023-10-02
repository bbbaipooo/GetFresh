import React from 'react'
import './value.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import data from "../../utils/according"
import { useState } from "react";

const Value = () => {
    return (
        <div>
            <section className="v-wrapper">
                <div className="paddings innerWidth flexCenter v-container">
                    {/* left side */}
                    <div className="v-left">
                        <div className="image-container">
                            <img src="./natural1.jpeg" alt="" />
                        </div>
                    </div>
                    {/* right side */}
                    <div className="flexColStart v-right">
                        <span className="yellowText">Our Value</span>
                        <span className="primaryText">Value We Give To You</span>
                        <span className="secondaryText">
                            We always to find  the best product  from natural for you.
                            <br />
                            We believe a good blance to live can make your life better
                        </span>

                        <Accordion
                            className="accordion"
                            allowMultipleExpanded={false}
                            preExpanded={[0]}
                        >
                            {data.map((item, i) => {
                                const [className, setClassName] = useState(null)
                                return (
                                    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="flexCenter1 accordionButton">
                                                <AccordionItemState>
                                                    {({ expanded }) =>
                                                        expanded
                                                            ? setClassName("expanded")
                                                            : setClassName("collapsed")
                                                    }
                                                </AccordionItemState>

                                                <div className="flexCenter icon" >{item.icon}</div>
                                                <span className="primaryText">{item.heading}</span>
                                                <div className="flexCenter icon"><MdOutlineArrowDropDown size={20} /></div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>

                                    </AccordionItem>
                                );
                            })}

                        </Accordion>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Value
