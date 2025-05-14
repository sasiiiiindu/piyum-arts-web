import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

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
                            Piyum Arts
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
                                [Your Address Line 1]<br />
                                [Your Address Line 2]<br />
                                [Your City, Country]
                            </p>
                            <p className="contact-phone">
                                [Your Phone Number]
                            </p>
                            <div className="contact-email">
                                <a href="mailto:your.email@piyumarts.com" className="contact-email__link">
                                    your.email@piyumarts.com
                                </a>
                            </div>
                            <div className="contact-social">
                                <a href="https://instagram.com/yourhandle" className="contact-social__link" target="_blank" rel="noopener noreferrer">
                                    @yourhandle
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