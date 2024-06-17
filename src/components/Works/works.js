import React from 'react'
import './works.css'
import Portfolio_1 from '../../assets/portfolio-1.jpg'
import Portfolio_2 from '../../assets/portfolio-2.png'
import Portfolio_3 from '../../assets/portfolio-3.png'
import Portfolio_4 from '../../assets/portfolio-4.png'
import Portfolio_5 from '../../assets/portfolio-5.png'
import Portfolio_6 from '../../assets/portfolio-6.jpg'

const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">I possess a keen eye for detail and strive for pixel perfection in my work. I am eager to leverage my skills and experience to empower businesses in achieving their goals and establishing a robust online presence.</span>
        <div className="worksImgs">
            <div className="card">
                <img src={Portfolio_1} alt="Portfolio-1" className='worksImg'/>
                <div className="container">
                    <h3>Blood Bank Management System</h3> 
                    <p className='project-text'>Worked on front-end of the project which extends in creating designs in html, css ,js and making it responsive through bootstrap.</p> 
                </div>
            </div>
            <div className="card">
                <img src={Portfolio_2} alt="Portfolio-1" className='worksImg'/>
                <div className="container">
                    <h3>Tourism Management System</h3> 
                    <p className='project-text'>Worked on the designing the website properly in html, css, js and bootstrap and also done database through mySQL.</p> 
                </div>
            </div>
            <div className="card">
                <img src={Portfolio_3} alt="Portfolio-1" className='worksImg'/>
                <div className="container">
                    <h3>Car Rental Portal</h3> 
                    <p className='project-text'>Worked on idea and also its development by working on many languages like html, css, Bootstrap, js, php, MySql.</p> 
                </div>
            </div>
            <div className="card">
                <img src={Portfolio_4} alt="Portfolio-1" className='worksImg'/>
                <div className="container">
                    <h3>TextUtils</h3> 
                    <p className='project-text'>A basic text utility react based application. It was a small application made all by myself using react, html, css, js, bootstrap.</p> 
                </div>
            </div>
            <div className="card">
                <img src={Portfolio_5} alt="Portfolio-1" className='worksImg'/>
                <div className="container">
                    <h3>NewsMonkey</h3> 
                    <p className='project-text'>A news api based react application which shows current news of different genres. The application was made using react, html, css, js, bootstrap, API.</p> 
                </div>
            </div>
            <div className="card">
                <img src={Portfolio_6} alt="Portfolio-1" className='worksImg'/>
                <div className="container">
                    <h3>DocGem</h3> 
                    <p className='project-text'>It is an edi workflow management system was made to handle failed claims. Worked on this during intership on its frontend, db & documentation.</p> 
                </div>
            </div>
        </div> 
    </section>
  )
}

export default Works