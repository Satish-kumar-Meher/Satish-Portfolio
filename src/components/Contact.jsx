
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../App.css";
import { toast } from 'react-toastify';
function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_x0atyqm', 'template_yp9du5w', form.current, {
            publicKey: 'k2LfZzrsDEUwMsaHa',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              toast.success("Message sent successfully",{
                position : "top-right",
                autoClose:4000,
                className: "custom-toast",
              })
              form.current.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
              toast.error("Message not sent, try again !",{
                position : "top-right",
                autoClose:4000,
                className: "custom-toast2",
              })
            },
          );
      };

  return (
    <>
    <section className="section contact active">
        <h2 className="title">Contact</h2>
        <div className="contact-wrapper">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <h3>Let's Work Together!</h3>
                <div className="field-box">
                    <input type="text" placeholder="Full Name" name="user_name" required/>
                    <input type="email" placeholder="Email Address" name="user_email" required/>
                    <input type="text" placeholder="Phone Number" name="user_phone_number" required/>
                    <input type="text" placeholder="Email Subject" name="user_email_subject" required/>
                    <textarea name="message" id="" placeholder="Your Message"  required></textarea>
                </div>
                <div className="contact-btn">
                    <button type="submit" className="btn">Send Message</button>
                </div>
            </form>
        </div>
     </section>
    </>
  )
}

export default Contact
