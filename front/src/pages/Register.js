import React, { useState } from 'react';
import axios from "axios"
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {

    const [login, setLogin] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()


    const handleChange = (e) => {
        if (e.target.name === "login") {
            setLogin(e.target.value)
        } else if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userForm = {
            login: login,
            email: email,
            password: password
        }

        axios.post(`${process.env.REACT_APP_API}/register`, userForm)
            .then((res) => {
                console.log(res.data)
            })
        navigate("/login")
    }




    return (
        <main className="register-container">
            <h2 className="register-title">S'inscrire</h2>
            <form method="post" onSubmit={handleSubmit}>
                <input type="text" placeholder="Nom" name="login" onChange={handleChange} required />
                <input type="email" placeholder="Email" name="email" onChange={handleChange} required />
                <input type="password" placeholder="Mot de passe" name="password" onChange={handleChange} required />
                <button type="submit" className="register"> S'inscrire</button>
                <NavLink to="/login"><p className="password-forgotten">Avez-vous déjà un compte ? Cliquez-ici</p></NavLink>
            </form>
        </main>
    );
};

export default Register;