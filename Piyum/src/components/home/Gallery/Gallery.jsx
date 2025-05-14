import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery = () => {
    const trackRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            if (mobile) {
                // Reset scroll position when switching to mobile
                setScrollPosition(0);
                if (trackRef.current) {
                    trackRef.current.style.transform = 'none';
                }
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isMobile) {
            // Remove any desktop-specific styles
            if (trackRef.current) {
                trackRef.current.style.transform = 'none';
            }
            return;
        }

        const handleWheel = (e) => {
            e.preventDefault();
            if (!trackRef.current) return;

            const delta = e.deltaY;
            const newPosition = scrollPosition + delta;
            const maxScroll = trackRef.current.scrollWidth - window.innerWidth;
            
            setScrollPosition(Math.max(0, Math.min(newPosition, maxScroll)));
        };

        const handleMouseDown = (e) => {
            setIsDragging(true);
            setStartX(e.pageX - trackRef.current.offsetLeft);
            setScrollLeft(scrollPosition);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        const handleMouseMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            
            const x = e.pageX - trackRef.current.offsetLeft;
            const walk = (x - startX) * 2;
            const newPosition = scrollLeft - walk;
            const maxScroll = trackRef.current.scrollWidth - window.innerWidth;
            
            setScrollPosition(Math.max(0, Math.min(newPosition, maxScroll)));
        };

        const container = trackRef.current;
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false });
            container.addEventListener('mousedown', handleMouseDown);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleWheel);
                container.removeEventListener('mousedown', handleMouseDown);
                window.removeEventListener('mouseup', handleMouseUp);
                window.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, [scrollPosition, isDragging, startX, scrollLeft, isMobile]);

    useEffect(() => {
        if (!isMobile && trackRef.current) {
            trackRef.current.style.transform = `translateX(-${scrollPosition}px)`;
        }
    }, [scrollPosition, isMobile]);

    const menuItems = [
        { name: 'Works', path: '/works' },
        { name: 'Process', path: '/process' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    const artworks = [
        {
            id: 1,
            title: "Rising",
            image: "/images/rising.jpg",
            category: "Limited Edition"
        },
        {
            id: 2,
            title: "Tide",
            image: "/images/tide.jpg",
            category: "Textile Panel"
        },
        {
            id: 3,
            title: "Morning",
            image: "/images/morning.jpg",
            category: "Limited Edition"
        },
        {
            id: 4,
            title: "Cold Light",
            image: "/images/cold-light.jpg",
            category: "Textile Panel"
        },
        {
            id: 5,
            title: "Ray No. 4",
            image: "/images/ray-4.jpg",
            category: "Limited Edition"
        }
    ];

    return (
        <div className={`gallery-container ${isMobile ? 'gallery-container--mobile' : ''}`}>
            <div className={`gallery-scroll ${isMobile ? 'gallery-scroll--mobile' : ''}`} ref={trackRef}>
                <div className={`gallery-track ${isMobile ? 'gallery-track--mobile' : ''}`}>
                    {artworks.map((artwork, index) => (
                        <div
                            key={artwork.id}
                            className={`gallery__item ${isMobile ? 'gallery__item--mobile' : ''}`}
                            style={{
                                opacity: 0,
                                animation: `fadeIn 0.6s ease forwards ${index * 0.1}s`
                            }}
                        >
                            <div className={`gallery__image-wrapper ${isMobile ? 'gallery__image-wrapper--mobile' : ''}`}>
                                <img 
                                    src={artwork.image} 
                                    alt={artwork.title}
                                    className="gallery__image"
                                    loading={isMobile ? "lazy" : "eager"}
                                />
                                <div className={`gallery__overlay ${isMobile ? 'gallery__overlay--mobile' : ''}`}>
                                    <h3 className={`gallery__title ${isMobile ? 'gallery__title--mobile' : ''}`}>
                                        {artwork.title}
                                    </h3>
                                    <p className={`gallery__category ${isMobile ? 'gallery__category--mobile' : ''}`}>
                                        {artwork.category}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className={`gallery__menu-section ${isMobile ? 'gallery__menu-section--mobile' : ''}`}>
                        <div className="menu">
                            <div className={`menu__content ${isMobile ? 'menu__content--mobile' : ''}`}>
                                <nav className="menu__nav">
                                    <ul className="menu__list">
                                        {menuItems.map((item) => (
                                            <li key={item.name} className="menu__item">
                                                <Link to={item.path} className={`menu__link ${isMobile ? 'menu__link--mobile' : ''}`}>
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                <div className="menu__cart">
                                    <button className="menu__cart-button">
                                        Cart (0)
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery; 