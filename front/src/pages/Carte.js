import React from 'react';

const Carte = () => {
    return (
        <main className="carte-container">
            <section className="map-container">
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20980.18409670513!2d2.3541086791015684!3d48.905426899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66c375e93c1b1%3A0xdf71e95d09e08d98!2sPolyclinique%20d&#39;Aubervilliers!5e0!3m2!1sfr!2sfr!4v1697104524785!5m2!1sfr!2sfr"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </section>
            <section className="hospital-open-timers">
                <p className="open-timers-card">Horaires d'ouvertures:</p>
                <p>Lundi: 7h30-19h30</p>
                <p>Mardi: 7h30-19h30</p>
                <p>Mercredi: 8h30-20h30</p>
                <p>Jeudi: 7h30-19h30</p>
                <p>Vendredi: 7h30-19h30</p>
                <p>Samedi: 9h-17h</p>
                <p>Dimanche et jours fériés: Fermé</p>
            </section>
        </main>
    );
};

export default Carte;
