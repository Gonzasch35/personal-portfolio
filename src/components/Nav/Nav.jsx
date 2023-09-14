import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
        <div>
            <Link className={style.items}>Home</Link>
            <Link className={style.items}>Skills</Link>
            <Link className={style.items}>Proyects</Link>
            <Link className={style.items}>Contact Me</Link>
        </div>
    </div>
  )
}

export default Nav