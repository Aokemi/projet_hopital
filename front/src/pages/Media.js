import React from 'react';
import { NavLink } from 'react-router-dom';

const Media = () => {
    return (
        <main>
            <h1>Actualités</h1>
            <section className="news">
                <NavLink to="https://www.aphp.fr/contenu/la-premiere-unite-neurovasculaire-mobile-francaise-quand-lhopital-vient-au-patient-pour" target="_blank"><p>Voici une actualité </p></NavLink>
            </section>
            <section className="news">
                <NavLink to="https://www.aphp.fr/contenu/paris-kids-cancer-nouveau-centre-integre-de-recherche-dexcellence-en-oncologie-pediatrique-0" target="_blank"><p>Encore une autre actualité</p></NavLink>
            </section>
        </main>
    );
};

export default Media;