import React, { useState } from 'react';
import axios from "axios"

const Contact = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    const handleChange = (e) => {
        if(e.target.name === "name"){
            setName(e.target.value)
        } else if(e.target.name === "email"){
            setEmail(e.target.value)
        } else if (e.target.name === "message"){
            setMessage(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: name,
            email: email,
            message: message
        }

        axios.post(`${process.env.REACT_APP_API}/contact`, formData)
            .then((res) => {
                console.log(res.data)
            })
    }


    return (
        <div className="contact-form-container">
            <h2 className="contact-title">Contactez-nous</h2>
            <form method="post" onSubmit={handleSubmit}>
                <aria-label htmlFor="name">Nom :</aria-label>
                <input type="text" id="name" name="name" onChange={handleChange} required />
                <aria-label htmlFor="email">Email :</aria-label>
                <input type="email" id="email" name="email"onChange={handleChange} required />
                <aria-label htmlFor="message">Message :</aria-label>
                <textarea id="message" name="message" onChange={handleChange} required></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default Contact;