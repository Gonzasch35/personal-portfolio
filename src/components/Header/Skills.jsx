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

const Skills = () => {
  return (
    <section id='skills' className={styles.skills}>
      <h2 className={styles.skillTitle}>Skills</h2>
      <span className={styles.skillDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae debitis fugiat porro vitae, quibusdam sit ullam a, alias natus illum? Sed esse ipsa commodi natus dignissimos, ea aut modi?</span>
      <div className={styles.skillBars}>
          <div className={styles.image}><img className={styles.bigs} src={html} alt="" /></div>
          <div className={styles.image}><img className={styles.bigs} src={css} alt="" /></div>
          <div className={styles.image}><img className={styles.bigs} src={javascript} alt="" /></div>
          <div className={styles.image}><img className={styles.bigs} src={node} alt="" /></div>
          <div className={styles.image}><img className={styles.react} src={react} alt="" /></div>
          <div className={styles.image}><img src={redux} alt="" /></div>
          <div className={styles.image}><img className={styles.bigs} src={postgresql} alt="" /></div>
          <div className={styles.image}><img className={styles.jest} src={jest} alt="" /></div>
          <div className={styles.image}><img className={styles.git} src={git} alt="" /></div>
          <div className={styles.image}><img className={styles.trello} src={trello} alt="" /></div>
      </div>

    </section>
  )
}

export default Skills