import React from 'react'
import style from './Proyects.module.css'
import pokemon from '../../assets/pokemon.jpg'
import sportiverse from '../../assets/sportiverse.png'
import proyect1 from '../../assets/proyect1.png'
import proyect2 from '../../assets/proyect2.png'

const Proyects = () => {
  return (
    <section className={style.works}>
      <h2 className={style.title}>Proyects</h2>
      <span className={style.description}></span>
      <div className={style.proyect}>
        <div>
          <img className={style.image} src={proyect1} alt="" />
        </div>
        <div className={style.proyectDescription}>
          <h3>Pokemon App</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium distinctio perspiciatis assumenda ratione, sapiente fugit dicta dolores, mollitia commodi aspernatur, dolor hic praesentium veniam ipsam deserunt voluptas. Unde, quaerat.</p>
          <div>
              <img align="left" alt="Node.js" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              <img align="left" alt="Express.js" width="40px" src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" />
          </div>
          <a href='https://pokemon-app-xi-five.vercel.app/' className={style.btn}>Go to Proyect</a>
        </div>
      </div>
      <div className={style.proyect}>

        <div>
          <img src={proyect2} alt="" />
        </div>

        <div className={style.proyectDescription}>
          <h3>Pokemon App</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium distinctio perspiciatis assumenda ratione, sapiente fugit dicta dolores, mollitia commodi aspernatur, dolor hic praesentium veniam ipsam deserunt voluptas. Unde, quaerat.</p>
          <div>
              <img align="left" alt="Node.js" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              <img align="left" alt="Express.js" width="40px" src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" />
          </div>
          <a href='https://pokemon-app-xi-five.vercel.app/' className={style.btn}>Go to Proyect</a>
        </div>

      </div>
    </section>
  )
}

export default Proyects