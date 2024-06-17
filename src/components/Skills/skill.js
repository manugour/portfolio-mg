import React from 'react'
import './skill.css'
import WebDesign from '../../assets/web-design.png'
import WebDevelopment from '../../assets/web-dev.png'
import SoftwareDevelopment from '../../assets/software-dev.png'



const Skill = () => {
  return (
    <div>
      <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I'm a passionate and skilled web developer, I excel at crafting visually stunning and user-centric websites. My expertise bridges development, ensuring a keen eye for detail translates into exceptional user experiences. I possess strong proficiency in HTML, CSS, Bootstrap, JavaScript, MySQL & PHP.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={WebDesign} alt="Web-Design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website-Design</h2>
                    <p>I design websites that are both beautiful and easy to use. I bring websites to life! I focus on the visual design and user experience.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDevelopment} alt="Web-Development" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website-Development</h2>
                    <p>I translate designs and functionalities into websites using programming languages, ensuring a smooth user experience and website performance.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={SoftwareDevelopment} alt="Software-Development" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Software-Development</h2>
                    <p>I'm problem-solving Software Developer passionate about creating efficient and scalable software.
</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Skill
