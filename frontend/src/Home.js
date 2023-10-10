import React from 'react';
import sunset from './assets/sunset.jpg';

const Home = () => {
    return (
        // <div style={{
        //     backgroundImage: `url(${sunset})`,
        //     height: '90vh',
        //     width: '100vw',
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     backgroundRepeat: 'no-repeat',
        // }}>
            <div style={{
                position: 'absolute',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                textAlign: 'center',
                padding: '10px',
            }}>
                <h1 className="cover-heading">URL Shortener</h1>
                <p className="lead">This is a simple URL shortener application built using MERN stack.</p>
                <p className="lead">
                    <a href="/shortenUrl"
                    style={{
                        backgroundColor: 'transparent',
                        border: '1px solid white',
                        borderRadius: '5px',
                        padding: '10px',
                        textDecoration: 'none',
                    }} className="btn btn-lg btn-secondary">Shorten URL</a>
                </p>
            </div>
        // </div>
    );
}

export default Home;