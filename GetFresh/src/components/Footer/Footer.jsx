import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div>
      <section className="f-wrapper bgColor">
        <div className="paddings innerWidth flexCenter f-container">
            {/*left side */}
            <div className="flexColStart f-left">
                <div className="flexCenter1">
                    <img src="./logo.png" alt="logo" width={40} className="red" />
                    <h2><a href=""><span className='textGet'>Get </span><span className="textFresh">Fresh</span></a></h2>
                </div>

                <span className="secondaryText">Our vision is to make all people<br/>that want to care health.</span>
                <span className="credit"><h1>&copy; </h1> bbbaipooo</span>
            </div>

            <div className="flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className="secondaryText"></span>
                
                <div className="flexCenter f-menu">
                    <span>Health Care</span>
                    <span>Benefit</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
