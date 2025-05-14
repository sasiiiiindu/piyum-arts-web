import React from 'react';
import { Link } from 'react-router-dom';
import './Process.css';

const Process = () => {
    const menuItems = [
        { name: 'Works', path: '/works' },
        { name: 'Process', path: '/process' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <div className="process-page">
            <div className="process-container">
                <div className="process-content">
                    <nav className="process-nav">
                        <Link to="/" className="process-nav__logo">
                            Piyum Arts
                        </Link>
                        <div className="process-nav__menu">
                            {menuItems.map((item) => (
                                <Link 
                                    key={item.name}
                                    to={item.path}
                                    className={`process-nav__link ${item.path === '/process' ? 'process-nav__link--active' : ''}`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <button className="process-nav__cart">
                            Cart (0)
                        </button>
                    </nav>

                    <div className="process-text">
                        <p className="process-paragraph">
                            Using subtle aesthetics and a warm Nordic touch, the series "Rhythm" depicts transitions in light and hue, 
                            in a hyper stylistic investigation of nature's rhythms: from dusk to dawn, a rising sun, or the falling of rain.
                        </p>
                        
                        <p className="process-paragraph">
                            The pieces are produced sustainably with regard to the smallest detail, using local craftmanship and the finest materials. 
                            With each piece being handmade upon order this is truly a luxury item. Piyum Arts combines virtuous technique and serene 
                            graphic aesthetics in unique textile pieces that strive to emanate balance, craftmanship and essence.
                        </p>
                        
                        <p className="process-paragraph">
                            Piyum Arts tapestries are made with the wool textile Remix 3 from Kvadrat. We chose it for its elegant quality and unique 
                            colour depth created by the dynamic play of hues between its two- and three-coloured yarns.
                        </p>
                        
                        <p className="process-paragraph">
                            Because all our panels and wall mounts are handmade, delivery time may take up to six weeks.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process; 