import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import './product.css'
import data from '../../utils/slider.json'
import { sliderSettings } from "../../utils/common"

const Product = () => {
  return (
    <div>
      <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="r-head flexColStart">
            <span className="yellowText">Best Choices</span>
            <span className="primaryText">Popular Product</span>
          </div>

          <Swiper {...sliderSettings}>
            <SliderButtons />
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt="" />

                  <span className="secondaryText r-price">
                    <span style={{ color: "grey" }}>{card.price}</span>
                    <span style={{ color: "var(--yellow2)" }}> ฿</span>
                  </span>

                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText ">{card.detail}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  )
}

export default Product

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-buttons">
      <button onClick={()=>swiper.slidePrev()}>&lt;</button>
      <button onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  )
}