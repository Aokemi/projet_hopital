import React from 'react';

const Home = () => {
    return (
        <main className="image-container">
            <section className="text-overlay">
                <h1>Bienvenue sur notre page d'accueil !</h1>
                <p>Vestibulum aliquet magna sed ligula malesuada, ac egestas nunc varius. Mauris hendrerit in ligula non fermentum. Aliquam elementum sapien quis nunc gravida, ut sollicitudin nibh commodo. Nam suscipit eget massa in placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec fermentum, erat eu interdum hendrerit, turpis purus dictum massa, in pellentesque magna justo vitae sapien. Vivamus eget bibendum enim, venenatis egestas arcu. Nullam luctus nibh at elit ornare, sed ultrices felis tincidunt.</p>
                <p className="second-paragraph">
                    <img className="hospital-bed" src="./img/la-roseraie.jpg" alt="inside hospital"/>
                    Vestibulum aliquet magna sed ligula malesuada, ac egestas nunc varius. Mauris hendrerit in ligula non fermentum. Aliquam elementum sapien quis nunc gravida, ut sollicitudin nibh commodo. Nam suscipit eget massa in placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec fermentum, erat eu interdum hendrerit, turpis purus dictum massa, in pellentesque magna justo vitae sapien. Vivamus eget bibendum enim, venenatis egestas arcu. Nullam luctus nibh at elit ornare, sed ultrices felis tincidunt.
                </p>
                <p className="third-paragraph">
                    <img className="hospital-front" src="./img/hopital-europeen.jpg" alt="outside hospital"/>
                    Vestibulum aliquet magna sed ligula malesuada, ac egestas nunc varius. Mauris hendrerit in ligula non fermentum. Aliquam elementum sapien quis nunc gravida, ut sollicitudin nibh commodo. Nam suscipit eget massa in placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec fermentum, erat eu interdum hendrerit, turpis purus dictum massa, in pellentesque magna justo vitae sapien. Vivamus eget bibendum enim, venenatis egestas arcu. Nullam luctus nibh at elit ornare, sed ultrices felis tincidunt.
                </p>
            </section>
        </main>
    );
};

export default Home;
