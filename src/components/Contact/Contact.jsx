import React from 'react'
import style from './Contact.module.css'

const Contact = () => {
  return (
    <section className={style.contactPage}>
      <div className={style.contact}>
        <h2 className={style.contactPageTitle}>Contact Me</h2>
        <span className={style.contactDesc}>Please fill out the form below to discuss any work opportunities</span>
        <form className={style.contactForm}>
          <input type="text" className={style.name} placeholder='Your Name' />
          <input type="email" className={style.email} placeholder='Your Email' />
          <textarea className={style.msg} name="message" rows="5" placeholder='Your Message'></textarea>
          <button type='submit' value='Send' className={style.submitBtn}>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact