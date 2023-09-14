import React, { useEffect, useState } from 'react'
import Nav from '../../components/Nav/Nav'
import AboutMe from '../../components/AboutMe/AboutMe'
import Proyects from '../../components/Proyects/Proyects'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import style from './Home.module.css'
import Skills from '../../components/Header/Skills'

const Home = () => {

  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const menuClassName = menu ? style.menuActive : style.menuInactive


  return (
    <div className={style.containerAll}>
        <Nav />
        <AboutMe />
        <Skills />
        <Proyects />
        <Contact />
        <Footer />
        <div className={`${style.menu} ${menuClassName}`}>
          <div className={style.toggle} onClick={toggleMenu}>
            <ion-icon name='share-social'></ion-icon>
          </div>
          <li className={style.icon1}>
            <a href="https://github.com/Gonzasch35"><ion-icon name="logo-github"></ion-icon></a>
          </li>
          <li className={style.icon2}>
            <a href="https://www.linkedin.com/in/gonzalo-schmidt-/"><ion-icon name="logo-linkedin"></ion-icon></a>
          </li>
          <li className={style.icon3}>
            <a href="#"><ion-icon name="mail-open-outline"></ion-icon></a>
          </li>
          <li className={style.icon4}>
            <a href="#"><ion-icon name="logo-whatsapp"></ion-icon></a>
          </li>
        </div>
    </div>
  )
}

export default Home