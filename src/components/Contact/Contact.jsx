import React, { useRef } from 'react'
import style from './Contact.module.css'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_frrucal', 'template_aqlm153', form.current, 'wGDMKasbUD-9buRB8')
      .then((result) => {
        console.log(result.text);
      }, error => {
        console.log(error.text);
      })
  }

  return (
    <section id='contact' className={style.contactPage}>
      <div className={style.contact}>
        <h2 className={style.contactPageTitle}>Contact Me</h2>
        <span className={style.contactDesc}>Please fill out the form below to discuss any work opportunities</span>
        <form ref={form} onSubmit={sendEmail} className={style.contactForm}>
          <input type="text" className={style.name} placeholder='Your Name' name='your_name' />
          <input type="email" className={style.email} placeholder='Your Email' name='your_email' />
          <textarea className={style.msg} name="message" rows="5" placeholder='Your Message'></textarea>
          <button type='submit' value='Send' className={style.btn}>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact