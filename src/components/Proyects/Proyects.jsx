import React, { useState } from 'react'
import style from './Proyects.module.css'
import pokemon from '../../assets/pokemon5.jpg'
import sportiverse from '../../assets/sportiverse5.jpg'
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
import Project from './Project'
import portfolio from '../../assets/foto-perfil3.png'

const Proyects = () => {

  const projects = [
    {
      id: 1,
      image: pokemon,
      name: 'Pokemon App',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos optio deleniti, suscipit ipsa ducimus ipsum maxime cum quos temporibus quasi beatae quibusdam eaque delectus iste, deserunt vitae possimus, sunt accusamus!',
      skills: [react, redux, javascript, html, css],
      url: 'https://pokemon-app-xi-five.vercel.app/',
    },
    {
      id: 2,
      image: sportiverse,
      name: 'Sportiverse',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos optio deleniti, suscipit ipsa ducimus ipsum maxime cum quos temporibus quasi beatae quibusdam eaque delectus iste, deserunt vitae possimus, sunt accusamus!',
      skills: [react, redux, javascript, html, css],
      url: 'https://pokemon-app-xi-five.vercel.app/',
    },
    {
      id: 3,
      image: portfolio,
      name: 'Portfolio Personal',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos optio deleniti, suscipit ipsa ducimus ipsum maxime cum quos temporibus quasi beatae quibusdam eaque delectus iste, deserunt vitae possimus, sunt accusamus!',
      skills: [react, redux, javascript, html, css],
      url: 'https://pokemon-app-xi-five.vercel.app/',
    },
    /* {
      id: 4,
      image: pokemon,
      name: 'Pokemon App',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos optio deleniti, suscipit ipsa ducimus ipsum maxime cum quos temporibus quasi beatae quibusdam eaque delectus iste, deserunt vitae possimus, sunt accusamus!',
      skills: [react, redux, javascript, html, css],
      url: 'https://vet-meet-mingle.netlify.app/'
    }, */
  ]
  

  return (
    <section id='projects' className={style.works}>

      <h2 className={style.title}>Proyects</h2>
      
      <span className={style.description}></span>

      <div className={style.projects_container}>

        {projects?.map(p => {
          return(
            <Project 
              key={p.id}
              image={p.image}
              name={p.name}
              description={p.description}
              skills={p.skills}  
            />
          )
        })}
      </div>
    </section>
  )
}

export default Proyects