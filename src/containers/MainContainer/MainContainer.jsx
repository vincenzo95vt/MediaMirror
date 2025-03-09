import React from 'react'
import "./MainContainer.css"

const MainContainer = () => {
  return (
    <div className='main-cnt'>
        <div className='url-cnt'>
            <span className='url'>URL: </span>
            <input type="link" className='link'/>
            <button type='submit' className='btn-find'>Investigar</button>
        </div>
        <div className="info-cnt">
            <span className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            <span className='news-summary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam placeat maiores aperiam totam accusantium omnis, rerum consequatur maxime laudantium nihil molestiae eius voluptate exercitationem consectetur sapiente vitae quasi dolorem earum!</span>
            <span className='news-report'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique unde nesciunt quisquam ex molestias natus neque ducimus? Sint odio consectetur delectus, vitae dolor magnam nesciunt corrupti molestiae. Vitae, eius!</span>
            <span className='news-question'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, deserunt possimus? Veniam quam sequi?</span>
        </div>
    </div>
  )
}

export default MainContainer
