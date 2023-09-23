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
    <div id='home' className={style.containerAll}>
        <Nav />
        <AboutMe />
        <Skills />
        <Proyects />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home