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
import coffee from '../../assets/cofee-rest.png'

const Proyects = () => {

  const projects = [
    {
      id: 1,
      image: pokemon,
      name: 'Pokemon App',
      description: 'Individual project carried out in the Soy Henry bootcamp with the theme of Pokémon in which I applied all the technologies learned throughout the course.',
      functions: ['Filter pokemons with combined filters.', 'Local Storage management and data persistence.', 'Create new pokemons.', 'Chooce your favorites pokemons'],
      skills: [html, css, javascript, node, react, redux, postgresql, git],
      url: 'https://pokemon-app-xi-five.vercel.app/',
      github: 'https://github.com/Gonzasch35/Pokemon-App'
    },
    {
      id: 2,
      image: sportiverse,
      name: 'Sportiverse',
      description: 'Aplicacion destinada a complejos que ofrecen el alquiler de canchas o espacios para realizar actividades deportivas o recreativas con más de una sucursal, ubicados en la Ciudad de Córdoba Argentina.',
      functions: ['Shift management and payments with Mercado Pago', 'Filter activities with combined filters.', 'Login, Sign Up with Google third-party authentication.', 'Local Storage management and data persistence.', 'User and Administrator account differentiation.', 'Create new activities.', 'User banning.'],
      skills: [html, css, javascript, node, react, redux, jest, postgresql, git],
      url: 'https://sportiverse-client.onrender.com/',
      github: 'https://github.com/nadiamartel/PF_BACK'
    },
    {
      id: 3,
      image: coffee,
      name: 'Coffee Rest',
      description: "Project carried out individually for a cafeteria in order to manage reservations and orders in a more agile way.",
      skills: [html, css, javascript, node, react, postgresql],
      url: 'https://rest-food.vercel.app/',
      github: 'https://github.com/Gonzasch35/rest-food'
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

      <h2 className={style.title}>Projects</h2>
      
      <span className={style.description}></span>

      <div className={style.projects_container}>

        {projects?.map(p => {
          return(
            <Project 
              key={p.id}
              image={p.image}
              name={p.name}
              description={p.description}
              functions={p.functions}
              skills={p.skills}
              url={p.url}
              github={p.github}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Proyects
