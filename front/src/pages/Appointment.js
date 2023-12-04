import React, { useEffect, useState } from 'react';
import axios from "axios"
import { auth } from "../auth/auth"

const Appointment = () => {

    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [date, setDate] = useState()
    const [address, setAddress] = useState()
    const [specialist, setSpecialist] = useState()
    const [specialists, setSpecialists] = useState([])
    const [hour, setHour] = useState()
    const [message, setMessage] = useState()

    useEffect(()=> {
        axios.get(`${process.env.REACT_APP_API}/specialists`)
        .then((res) => {
            setSpecialists(res.data)
        })
    }, []) 

    const handleChange = (e) => {
        if (e.target.name === "fullName") {
            setFullName(e.target.value)
        } else if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "phoneNumber") {
            setPhoneNumber(e.target.value)
        } else if (e.target.name === "date") {
            setDate(e.target.value)
        } else if (e.target.name === "address") {
            setAddress(e.target.value)
        } else if (e.target.name === "specialist") {
            setSpecialist(e.target.value)
        } else if (e.target.name === "hour") {
            setHour(e.target.value)
        } else if (e.target.name === "message") {
            setMessage(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userForm = {
            fullName: fullName,
            email: email,
            phoneNumber: phoneNumber,
            date: date,
            address: address,
            specialist: specialist,
            hour: hour,
            message: message
        }

        axios.post(`${process.env.REACT_APP_API}/new-appointment`, userForm, {headers: auth()})
            .then((res) => {
                console.log(res.data)
            })
    }




    return (
        <main className="appointment-container">
            <h2 className="appointment-title">Besoin d'un rendez-vous ?</h2>
            <form method="post" onSubmit={handleSubmit}>
                <input type="text" placeholder="Nom et prénom du patient" name="fullName" onChange={handleChange} required />
                <input type="email" placeholder="Email" name="email" onChange={handleChange} required />
                <input type="tel" placeholder="Numéro de téléphone" name="phoneNumber" onChange={handleChange} required />
                <input type="date" placeholder="Date" name="date" onChange={handleChange} required />
                <input type="text" placeholder="Adresse complète" name="address" onChange={handleChange} required />
                <select className="select-specialist" name="specialist" onChange={handleChange}>
                    {specialists.map((spe, i)=>(
                        <option key={i} value={spe}>{spe}</option>
                    ))}
                </select>
                <input type="time" name="hour" min="07:30" max="17:30" onChange={handleChange} required />
                <input type="text" placeholder="Un message avant le rendez-vous ?" name="message" onChange={handleChange}/>
                <button className="send-appointment"type="submit">Envoyer</button>
            </form>
        </main>
    );
};

export default Appointment;