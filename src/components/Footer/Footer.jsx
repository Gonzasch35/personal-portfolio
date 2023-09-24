import React from 'react'
import style from './Footer.module.css'
import logo from '../../assets/logo1.png'

const Footer = () => {
  return (
    <footer className={style.footer}>
        
      <div className={style.container}>

        <div className={style.redes}>
              <li className={style.icon}>
                <a href="https://github.com/Gonzasch35" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
              </li>

              <li className={style.icon}>
                <a href="https://www.linkedin.com/in/gonzalo-schmidt-/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
              </li>

              <li className={style.icon}>
                <a href="https://wa.me/3435215675" target="_blank"><ion-icon name="logo-whatsapp" ></ion-icon></a>
              </li>

              <li className={style.icon}>
                <a href="https://wa.me/3435215675" target="_blank"><svg width="15" height="15" class="mail h-p-0-lg h-mb-3-lg" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.8 3.00001C2.12163 2.99621 1.4654 3.24121 0.955496 3.68864C0.445591 4.13608 0.117389 4.7549 0.033 5.42801L14 14L27.967 5.42801C27.8826 4.7549 27.5544 4.13608 27.0445 3.68864C26.5346 3.24121 25.8784 2.99621 25.2 3.00001H2.8ZM0 8.15901V22.25C0 23.77 1.253 25 2.8 25H25.2C26.747 25 28 23.77 28 22.25V8.15901L14.741 16.296C14.5178 16.4323 14.2615 16.5043 14 16.5043C13.7385 16.5043 13.4822 16.4323 13.259 16.296L0 8.16001V8.15901Z" fill="#FFFFFF"></path>
                </svg></a>
              </li>
        </div>

        <p className={style.copyright}>
          &copy; 2023 <a href="#">Gonzalo Schmidt</a>. All rights reserved
        </p>

      </div>
  
    </footer>
  )
}

export default Footer