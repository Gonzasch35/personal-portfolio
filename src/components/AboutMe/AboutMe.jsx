import React from 'react'
import image from '../../assets/foto-perfil3.png'
import style from './AboutMe.module.css'
import { Link } from 'react-router-dom'
import btn from '../../assets/hireme.png'

const AboutMe = () => {
  return (
    <section id='about' className={style.container}>

      <div className={style.boxBg}>
        <img src={image} alt="profile" className={style.bg} />
      </div>

      <div className={style.aboutContainer}>

        <span className={style.hello}>Hello,</span>

        <div className={style.me}>
          <span className={style.name}>I'm </span>
          <img src="https://readme-typing-svg.herokuapp.com?font=Exo&weight=500&size=50&duration=3000&pause=1000&color=22609F&vCenter=true&width=600&height=100&lines=GONZALO+SCHMIDT;FULL+STACK+DEVELOPER" alt="Typing SVG" />
          
        </div>
        <span className={style.contactDesc}>I'm a developer who has passion for building clean web applications with intuitive functionalities. I enjoy the process of turning ideas into reality using creative solutions. I'm always curious about learning new skills, tools, and concepts. In addition to working on various solo full stack projects, I have worked with creative teams, which involves daily stand-ups and communications, source control, and project management.</span>
        <a className={style.btn} href="">Contact Me</a>
      </div>

    </section>
  )
}

export default AboutMe