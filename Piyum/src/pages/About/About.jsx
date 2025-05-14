import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    const menuItems = [
        { name: 'Works', path: '/works' },
        { name: 'Process', path: '/process' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <div className="about-page">
            <div className="about-container">
                <div className="about-content">
                    <nav className="about-nav">
                        <Link to="/" className="about-nav__logo">
                            Piyum Arts
                        </Link>
                        <div className="about-nav__menu">
                            {menuItems.map((item) => (
                                <Link 
                                    key={item.name}
                                    to={item.path}
                                    className={`about-nav__link ${item.path === '/about' ? 'about-nav__link--active' : ''}`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <button className="about-nav__cart">
                            Cart (0)
                        </button>
                    </nav>

                    <div className="about-text">
                        <p className="about-paragraph">
                            Piyum Arts is a passion project by [Your Name], a textile artist and designer. After creating their first series 
                            of textile panels for [Exhibition Name] in [Year], they launched Piyum Arts as a space to further explore the 
                            textile medium and their personal approach to graphic expression in a textile context.
                        </p>
                        
                        <p className="about-paragraph">
                            Aside from the current collection, Piyum Arts also develops bespoke pieces and room dividers for institutions, 
                            offices and private spaces.
                        </p>
                        
                        <p className="about-paragraph">
                            [Your Name] creates unique imagery by interpreting the world around them and distilling what can initially seem 
                            hard to capture. Natural phenomena have fascinated them and informed their work since the beginning of their career. 
                            With Piyum Arts, this interpretation of nature has found new clarity and concentration, in a way that both sums up 
                            their body of work so far, while also setting this project very much apart from their previous characteristic approach.
                        </p>
                        
                        <p className="about-paragraph">
                            Though inspired by natural phenomena, the motifs depart from reality and become symbols of what they depict, 
                            capturing what is transient in lasting form, through a continuous search for essence: How simply can a story be told?
                        </p>
                        
                        <p className="about-paragraph">
                            Both in regard to colour and motifs, the key word is balance – finding serenity between the shapes and tones, 
                            thereby contributing a feeling of zen within a space. Piyum, meaning [meaning in your language], forms a subtle 
                            tie between [your cultural influences] aesthetics.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; 