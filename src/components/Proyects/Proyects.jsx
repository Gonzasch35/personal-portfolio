import React from 'react'
import style from './Proyects.module.css'
import pokemon from '../../assets/pokemon.jpg'
import sportiverse from '../../assets/sportiverse.png'
import proyect1 from '../../assets/proyect1.png'
import proyect2 from '../../assets/proyect2.png'

const Proyects = () => {
  return (
    <section id='projects' className={style.works}>

      <h2 className={style.title}>Proyects</h2>
      
      <span className={style.description}></span>

      <div className={style.allProyects}>

          {/* Proyecto 1 */}

          <div className={style.proyect}>
            <div>
              <img className={style.image} src={proyect1} alt="" />
            </div>
            <div className={style.proyectDescription}>
              <h3>Pokemon App</h3>
              <p>Individual project carried out at Henry's bootcamp with the theme of Pokémon in which I applied all the technologies learned throughout the course.</p>
              <div>
                  <img align="left" alt="Node.js" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                  <img align="left" alt="Express.js" width="40px" src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" />
              </div>
              <a href='https://pokemon-app-xi-five.vercel.app/' className={style.btn}>Go to Proyect</a>
            </div>
          </div>

          {/* \\ Proyecto 2 */}

          <div className={style.proyect}>

            <div>
              <img className={style.image} src={proyect2} alt="" />
            </div>

            <div className={style.proyectDescription}>
              <h3>Sportiverse</h3>
              <p>Final project of Henry's bootcamp carried out in a group, in which I was in charge along with part of the app's backend team. I also performed the util testing of the back routes.</p>
              <div>
                  <img align="left" alt="Node.js" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                  <img align="left" alt="Express.js" width="40px" src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" />
              </div>
              <a href='https://sportiverse-client.onrender.com/' className={style.btn}>Go to Proyect</a>
            </div>

          </div>
      </div>
    </section>
  )
}

export default Proyects