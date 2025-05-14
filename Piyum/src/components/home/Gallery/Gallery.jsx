import React, { useEffect, useRef, useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const trackRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
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
    }, [scrollPosition, isDragging, startX, scrollLeft]);

    useEffect(() => {
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(-${scrollPosition}px)`;
        }
    }, [scrollPosition]);

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
        <div className="gallery-container">
            <div className="gallery-scroll" ref={trackRef}>
                <div className="gallery-track">
                    {artworks.map((artwork, index) => (
                        <div
                            key={artwork.id}
                            className="gallery__item"
                            style={{
                                opacity: 0,
                                animation: `fadeIn 0.6s ease forwards ${index * 0.1}s`
                            }}
                        >
                            <div className="gallery__image-wrapper">
                                <img 
                                    src={artwork.image} 
                                    alt={artwork.title}
                                    className="gallery__image"
                                />
                                <div className="gallery__overlay">
                                    <h3 className="gallery__title">{artwork.title}</h3>
                                    <p className="gallery__category">{artwork.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Full Page Menu Section */}
                    <div className="gallery__menu-section">
                        <div className="menu">
                            <div className="menu__content">
                                <nav className="menu__nav">
                                    <ul className="menu__list">
                                        {menuItems.map((item) => (
                                            <li key={item.name} className="menu__item">
                                                <a href={item.path} className="menu__link">
                                                    {item.name}
                                                </a>
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