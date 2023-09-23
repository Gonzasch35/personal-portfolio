import style from './Project.module.css'

const Project = ({name, image, description, skills, key}) => {
  return (
    <div className={style.card} id={key}>
        <section className={style.first_section}>
            <img className={style.image} src={image} alt="Project One" />
        </section>
        <section className={style.second_section}>
            <h2 className={style.title}>{name}</h2>
            <p className={style.description}>{description}</p>
            <div className={style.skills_container}>
                {skills.map(skill => {
                    return(
                        <img className={style.skill} src={skill} alt="skill" />
                    )
                    })}
            </div>
            <div className={style.buttons}>
                    <a href='https://github.com/Gonzasch35' className={style.btn} >Github</a>
                    <a href='https://pokemon-app-xi-five.vercel.app/' className={style.btn}>Go to Proyect</a>
                  </div>
        </section>
    </div>
  )
}

export default Project