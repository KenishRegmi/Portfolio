import React from 'react'

const Footer = () => {
  return (
<footer>
    <div className="foot-container">
    <h1 className='foot-title-1'>Let's Work Together Contact Me</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dptates impedit ipsa nihil tempora at aliquam fuga repellat, <br />possimus officiis quas, eveniet obcaecati.</p>
    <input type="text" value="" className='foot-inp' placeholder='Enter you Email' />
    <button className='Sub'>Subscribe</button>
    <br /><br />
    <p className='foot-p'>Kenish Regmi</p>
    <ul className="foot-items">
            <li><a href="">Home</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Contact</a></li>
            </ul>
            <div className="foot-icons">
                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="" />
                <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="" />
                <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="" />
                <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
             </div>
    </div>
</footer>
  )
}

export default Footer
