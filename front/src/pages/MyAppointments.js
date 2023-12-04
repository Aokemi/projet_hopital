import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { auth } from '../auth/auth';

const MyAppointments = () => {

    const [appointments, setAppointments] = useState([])
    

    useEffect(()=> {
        axios.get(`${process.env.REACT_APP_API}/appointments-by-user`, {headers: auth()})
        .then((res) => {
            setAppointments(res.data)
        })
    }, []) 


    return (
        <main>
            {appointments.map((oneApp, i) => (
                <article key={i} className="appointment-card">
                    <section>
                        <h1>Spécialiste: {oneApp.specialist}</h1>
                        <h2>Date du rendez-vous: {new Date(oneApp.date).toLocaleDateString()}</h2>
                        <h2>Vous devrez vous présenter à: {new Date(oneApp.startHour).toLocaleTimeString()}</h2>
                    </section>                 
                </article>
            ))}
        </main>
    );
};

export default MyAppointments;