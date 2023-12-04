import React, { useState } from 'react';
import axios from "axios"
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../auth/auth.js';

const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const userForm = {
            email: email,
            password: password
        }

        axios.post(`${process.env.REACT_APP_API}/login`, userForm, {headers: auth()}, {
            withCredentials: true
        })
        .then((res) => {
            
            if(res.data.token){
                localStorage.setItem("User", JSON.stringify(res.data))
            }

            return res.data
            
        })
        navigate("/")
    }



    return (
        <main className="login-container">
            <h2 className="login-title">Se connecter</h2>
            <form method="post" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" name="email" onChange={handleChange} required />
                <input type="password" placeholder="Mot de passe" name="password" onChange={handleChange} required />
                <button type="submit">Se connecter</button>
                <NavLink to="/register"><p className="password-forgotten">Vous n'êtes pas encore inscrit sur le site ? Cliquez-ici pour vous inscrire</p></NavLink>
            </form>
        </main>
    );
};

export default Login;