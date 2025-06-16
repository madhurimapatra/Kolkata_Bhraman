import React from 'react'
import './newsletter.css'
import maleTourist from '../file/image/male-tourist.png'

const NewsLetter = () => {
   return (
      <section className='newsletter'>
      <div className="newsletter__img">
      <img src={maleTourist} alt="" height={"270px"} width={"1890px"}/>
      </div>
      </section>
   )
}

export default NewsLetter