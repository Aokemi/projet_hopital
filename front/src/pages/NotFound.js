import React from 'react';
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    return (
        <main>
            <section className="error-page">
                <h1 className="inexistant-title">Cette page n'existe pas !</h1>
                <button onClick={handleClick} className="back-button">Page précédente</button>
            </section>
        </main>
    );
};

export default NotFound;