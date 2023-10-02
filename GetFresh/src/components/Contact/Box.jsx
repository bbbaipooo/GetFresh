import React from 'react'
import './contact.css'

function Box(props) {
  return (
    <div className="flexColCenter mode ">
      <div className="flexStart">
          <div className="flexCenter1 icon ">
              {props.icon}
          </div>
          <div className="flexColStart detail ">
              <span className="primaryText">{props.name}</span>
              <span className="secondaryText">062 329 4213</span>
          </div>
      </div>
      <div className="flexCenter button ">{props.nameBtn}</div>
  </div>
  )
}

export default Box
