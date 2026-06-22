import React, { useRef, useState } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import emailjs from '@emailjs/browser'

const contactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "hebatm29@gmail.com",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=hebatm29@gmail.com&su=Subject&body=Your%20Email%20Content",

  }]
const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    if (
      !form.current.name.value ||
      !form.current.email.value ||
      !form.current.message.value
    ) {
      setStatus("Please fill all fields");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC
      )
      .then(() => {
        setStatus("Message sent successfully");
        form.current.reset();
        setTimeout(() => {
          setStatus("");
        }, 3000);
      })
      .catch(() => {
        setStatus("Something went wrong");
        setTimeout(() => {
          setStatus("");
        }, 3000);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <section className='contact' id='contact'>
      <div className="top_section">
        <h2> Contact Me</h2>
      </div>
      <div className="container contact_container">
        {/* <div className="contact_options">
          {contactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className='contact_option' onClick={() => window.open(link, '_blank')}>
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target='_blank' rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}>Send Message</a>
            </article>
          ))}
        </div> */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" placeholder='Full Name' name='name' />
          <input type="email" placeholder='Your Email' name='email' />
          <textarea name="message" id="" placeholder='Enter Your Message'></textarea>
          <button type='submit' className='btn btn-primary' disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status && <p className="status_msg">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact