import React from 'react'
import styles from './Skills.module.css'
import git from '../../assets/git-scm-icon.svg'
import react from '../../assets/react.svg'
import jest from '../../assets/jest.svg'
import redux from '../../assets/redux.svg'
import postgresql from '../../assets/postgresql.svg'
import node from '../../assets/nodejs.svg'
import javascript from '../../assets/javascript.svg'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import trello from '../../assets/trello.png'
import python from '../../assets/python.png'

const Skills = () => {
  return (
    <section id='skills' className={styles.skills}>
      <h2 className={styles.skillTitle}>Skills</h2>
      <span className={styles.skillDesc}></span>
      <div className={styles.skillBars}>

          <div className={styles.image}>
            <img className={styles.bigs} src={html} alt="" />
            <p>HTML5</p>
          </div>

          <div className={styles.image}>
            <img className={styles.bigs} src={css} alt="" />
            <p>CSS3</p>
          </div>

          <div className={styles.image}>
            <img className={styles.bigs} src={javascript} alt="" />
            <p>JavaScript</p>
          </div>

          <div className={styles.image}>
            <img className={styles.bigs} src={node} alt="" />
            <p>Node.js</p>
          </div>

          <div className={styles.image}>
            <img className={styles.react} src={react} alt="" />
            <p>React</p>
          </div>

          <div className={styles.image}>
            <img className={styles.python} src={python} alt="" />
            <p>Python</p>
          </div>

          <div className={styles.image}>
            <img src={redux} alt="" />
            <p>Redux</p>
          </div>

          <div className={styles.image}>
            <img className={styles.bigs} src={postgresql} alt="" />
            <p>PostgreSQL</p>
          </div>

          <div className={styles.image}>
            <img className={styles.jest} src={jest} alt="" />
            <p>Jest</p>
          </div>

          <div className={styles.image}>
            <img className={styles.git} src={git} alt="" />
            <p>Git</p>
          </div>

          <div className={styles.image}>
            <img className={styles.trello} src={trello} alt="" />
            <p>Trello</p>
          </div>

      </div>

    </section>
  )
}

export default Skills