import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/pf.png'
import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <section id='intro'>
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">I'm <span className="introName">Manu</span><br />Website Developer</span> 
           <p className="introPara">I'm a skilled and passionate web developer with proficiency in creating <br />visually appealing and user-friendly websites.</p>
           <Link activeClass='active' to='works' spy={true} smooth={true} offset={-15} duration={500} ><button className="btn"><img src={btnImg} alt="pf" className='btnImg' /> Portfolio</button></Link>
        </div>
        <img src={bg} alt="profile-Img" className='bg'/>
    </section>
  )
}

export default Intro