import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import style from './Nav.module.css'
import logo from '../../assets/logo1.png'

const Nav = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const containerClassName = `${style.container} ${scrolled ? style.scrolled : ''}`;


  return (
    <div className={containerClassName}>
        <div>
            <a href="#"><img className={style.logo} src={logo} alt="" /></a>
        </div>
        <div className={style.enlaces}>
            <Link activeClass={style.active} to='about' spy={true} smooth={true} offset={-100} duration={500} className={style.items}>Home</Link>
            <Link activeClass={style.active} to='skills' spy={true} smooth={true} offset={-20} duration={500} className={style.items}>Skills</Link>
            <Link activeClass={style.active} to="projects" spy={true} smooth={true} offset={-20} duration={500} className={style.items}>Projects</Link>
            <Link activeClass={style.active} to='contact' spy={true} smooth={true} offset={-20} duration={500} className={style.items}>Contact Me</Link>
        </div>
    </div>
  )
}

export default Nav