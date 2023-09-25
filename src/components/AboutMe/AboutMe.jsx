import React from 'react'
import image from '../../assets/foto-perfil3.png'
import style from './AboutMe.module.css'
import { Link } from 'react-scroll'
import btn from '../../assets/hireme.png'
import cv from '../../assets/Gonzalo-Schmidt-CV-English.pdf'

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
          <span className={style.name_full}>Full Stack Developer</span>
        </div>
            <span className={style.contactDesc}>I'm a developer who has passion for building clean web applications with intuitive functionalities. I enjoy the process of turning ideas into reality using creative solutions. I'm always curious about learning new skills, tools, and concepts. In addition to working on various solo full stack projects, I have worked with creative teams, which involves daily stand-ups and communications, source control, and project management.</span>
        <div className={style.buttons}>
          <Link className={style.btn} to='contact' spy={true} smooth={true} offset={-50} duration={500}>Contact Me</Link>
          <a className={style.btn} href={cv} download>Download CV</a>
        </div>
        <div className={style.redes}>

              <li className={style.icon}>
                <a href="https://github.com/Gonzasch35"><ion-icon name="logo-github"></ion-icon></a>
              </li>

              <li className={style.icon}>
                <a href="https://www.linkedin.com/in/gonzalo-schmidt-/"><ion-icon name="logo-linkedin"></ion-icon></a>
              </li>

        </div>
      </div>

    </section>
  )
}

export default AboutMe