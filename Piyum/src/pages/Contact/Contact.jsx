import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import logoImage from '../../assets/logo.png';

const Contact = () => {
    const menuItems = [
        { name: 'Works', path: '/works' },
        { name: 'Process', path: '/process' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-content">
                    <nav className="contact-nav">
                        <Link to="/" className="contact-nav__logo">
                            <img src={logoImage} alt="Piyum Arts" className="header__logo-image" />
                        </Link>
                        <div className="contact-nav__menu">
                            {menuItems.map((item) => (
                                <Link 
                                    key={item.name}
                                    to={item.path}
                                    className={`contact-nav__link ${item.path === '/contact' ? 'contact-nav__link--active' : ''}`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <button className="contact-nav__cart">
                            Cart (0)
                        </button>
                    </nav>

                    <div className="contact-info">
                        <div className="contact-details">
                            <p className="contact-name">Piyum Arts</p>
                            <p className="contact-address">
                                66C, Sirisanda<br />
                                Pollawwa, Batapola<br />
                                Galle, Sri Lanka
                            </p>
                            <p className="contact-phone">
                                +94 70 417 2884
                            </p>
                            <div className="contact-email">
                                <a href="mailto:piyumarts.insta@gmail.com" className="contact-email__link">
                                    piyumarts.insta@gmail.com
                                </a>
                            </div>
                            <div className="contact-social">
                                <a href="https://instagram.com/piyumarts" className="contact-social__link" target="_blank" rel="noopener noreferrer">
                                    @piyumarts
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 