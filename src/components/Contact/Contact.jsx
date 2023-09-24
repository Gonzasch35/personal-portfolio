import React, { useRef, useState } from 'react'
import style from './Contact.module.css'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

const Contact = () => {

  const [message, setMessage] = useState({
    your_name: '',
    your_email: '',
    message: ''
  })


  const handleChange = (e) => {
    const property = e.target.name
    const value = e.target.value
    setMessage({...message, [property]: value})
  } 

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(message.name != '' && message.email != '' && message.message != '') {
      Swal.fire({
        title: `Hello ${message.your_name}`,
        text: 'Thanks for your message',
        icon: 'success',
        confirmButtonText: 'Continue'
      })
      emailjs.sendForm('service_frrucal', 'template_aqlm153', form.current, 'wGDMKasbUD-9buRB8')
      .then((result) => {
        console.log(result.text);
      }, error => {
        console.log(error.text);
      })
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
    setMessage({your_name: '', your_email: '', message: ''})
  }


  const form = useRef();

  const sendEmail = (e) => {
    
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
          
          <input type="text" onChange={handleChange} value={message.your_name} className={style.name} placeholder='Your Name' name='your_name' required />
          
          <input type="email" onChange={handleChange} value={message.your_email} className={style.email} placeholder='Your Email' name='your_email' required />
          
          <textarea className={style.msg} onChange={handleChange} value={message.message} name="message" rows="5" placeholder='Your Message' required></textarea>
          
          <button onClick={handleSubmit} type='submit' value='Send' className={style.btn}>Submit</button>
        
        </form>
      </div>
    </section>
  )
}

export default Contact