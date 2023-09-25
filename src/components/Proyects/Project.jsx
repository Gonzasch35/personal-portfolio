import style from './Project.module.css'

const Project = ({name, image, description, functions, skills, key, url, github}) => {
  return (
    <div className={style.card} id={key}>
        <section className={style.first_section}>
            <img className={style.image} src={image} alt="Project One" />
        </section>
        <section className={style.second_section}>
            <h2 className={style.title}>{name}</h2>
            <p className={style.description}>{description}</p>
            {functions && <h4>Main functions of the App</h4>}
            <div className={style.functions_container}>
              {functions?.map(f => {
                return (
                  <li>{f}</li>
                )
              })}
            </div>
            <h4>Skills and Tecnologies</h4>
            <div className={style.skills_container}>
                {skills.map(skill => {
                    return(
                        <img className={style.skill} src={skill} alt="skill" />
                    )
                    })}
            </div>
            <div className={style.buttons}>
                    <a href={github} target="_blank" className={style.btn} >Github</a>
                    <a href={url} target="_blank" className={style.btn}>Go to Proyect</a>
                  </div>
        </section>
    </div>
  )
}

export default Project