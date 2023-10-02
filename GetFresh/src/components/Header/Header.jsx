import React, { useState } from 'react'
import './header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false);
    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" }
        }
    }

    return (
        <section className="h-wrapper">
            <div className="flexCenter1 innerWidth h-container">
                <div className="flexCenter1 textBrand">
                    <img src="./logo.png" alt="logo" width={40} />
                    <h2><a href=""><span className='textGet'>Get </span><span className="textFresh">Fresh</span></a></h2>
                </div>
                <OutsideClickHandler
                    onOutsideClick={() => setMenuOpened(false)}>
                    <div className=" flexCenter1 h-menu" style={getMenuStyles(menuOpened)}>
                        <a href="">Product</a>
                        <a href="">Why Be GetFresh</a>
                        <a href="">Contact Us</a>
                        <a href="">Shop Now</a>
                        <button className="button">
                            <a href="">Contact</a>
                        </button>
                    </div>
                </OutsideClickHandler>

                <div className='menu-icon' onClick={(() => setMenuOpened((prev) => !prev))}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>


        </section>
    )
}

export default Header
