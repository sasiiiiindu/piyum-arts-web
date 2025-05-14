import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Works', path: '/works' },
        { name: 'Process', path: '/process' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="header__container">
                <div className="header__left">
                    <a href="/" className="header__logo">
                        Piyum Arts
                    </a>
                </div>

                <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
                    <ul className="header__menu">
                        {menuItems.map((item) => (
                            <li key={item.name} className="header__menu-item">
                                <a 
                                    href={item.path}
                                    className="header__menu-link"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header__right">
                    <button 
                        className="header__cart"
                        aria-label="Shopping cart"
                    >
                        Cart (0)
                    </button>
                    
                    <button 
                        className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--open' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header; 