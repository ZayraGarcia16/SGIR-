import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './principal.css';
import Footer from '../../componentes/Footer';

const Principal = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Slider actual
    const [testimonials, setTestimonials] = useState(0); // Testimonios actuales

    const sliderImages = ["colombia3.jpeg", "colombia5.jpg"];
    const testimonialsData = [
        { img: "persona1.jpg", name: "Rosalbuald", role: "Excursionista", text: "Mi hija llegó muy feliz gracias a estas excursiones", rating: 5 },
        { img: "persona2.jpg", name: "Juanita Pérez", role: "Madre", text: "Mi hijo disfrutó mucho la excursión.", rating: 4 },
        { img: "persona3.jpg", name: "Carlos Mendoza", role: "Excursionista", text: "Una experiencia inolvidable para toda la familia.", rating: 5 }
    ];

    // Slider automático
    useEffect(() => {
        const interval = setInterval(() => {
            handleSliderNavigation('next');
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleSliderNavigation = (direction) => {
        if (direction === 'next') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
        } else {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
        }
    };

    // Función para estrellas en testimonios
    const renderStars = (rating) => {
        return Array(5)
            .fill(0)
            .map((_, index) => (
                <i
                    key={index}
                    className={`testimonial-star ${index < rating ? 'star-filled' : 'star-empty'}`}
                ></i>
            ));
    };

    return (
        <>
            {/* Header */}
            <header className="header">
                <div className="header-container">
                    <nav className="header-navigation">
                        <div className="logo">
                            <img src="../src/assets/logo.png" alt="Logo" />
                        </div>
                        <ul className="header-menu">
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/nosotros">Nosotros</Link></li>
                            <li><Link to="/servicios">Servicios</Link></li>
                            <li><Link to="/inicio-con">Ingresar</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Slider */}
            <main>
                <div className="slide-container">
                    <div
                        className="slider-track"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                            display: 'flex',
                            transition: 'transform 0.5s ease'
                        }}
                    >
                        {sliderImages.map((img, idx) => (
                            <div key={idx} className="slider-item">
                                <img src={`../src/assets/inicio/${img}`} alt={`Slide ${idx + 1}`} />
                                <div className="img-overlay">
                                    <h1>Explora Colombia</h1>
                                    <p>Descubre su magia y belleza con aventuras sin límites</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="slider-controls">
                        <button className="slider-btn prev-btn" onClick={() => handleSliderNavigation('prev')}>
                            &#10094;
                        </button>
                        <button className="slider-btn next-btn" onClick={() => handleSliderNavigation('next')}>
                            &#10095;
                        </button>
                    </div>
                </div>
            </main>

            {/* Sobre Nosotros */}
            <section className="about-content-wrapper">
                <div className="agency-left-side">
                    <p className="heading-normal-txt">SOBRE NOSOTROS</p>
                    <p className="headings">CAMINANTES POR COLOMBIA</p>
                    <p className="lead">
                        Caminantes por Colombia es una agencia de turismo que ofrece experiencias extraordinarias a través de caminatas escolares, excursiones, campamentos y deportes extremos.
                    </p>
                    <a href="/contactenos/sobre_nosotros" className="tw">Leer más</a>
                </div>
                <div className="agency-right-side">
                    <div className="img">
                        <img src="../src/assets/inicio/leon.jpeg" alt="Imagen de un león" />
                    </div>
                </div>
            </section>
            <section class="servicios">
  
                    <h2 class="titulo-servicios">Nuestros Servicios</h2>
                    
                    <div class="servicios-row">
                        
                        <div class="servicio-item">
                        <div class="servicio">
                            <div class="icon-wrapper">
                            <i class="fas fa-hotel"></i> 
                            </div>
                            <h3>Hotel</h3>
                            <p>Disfruta de un alojamiento cómodo y seguro en los mejores hoteles de Colombia.</p>
                        </div>
                        </div>
                        
                       
                        <div class="servicio-item">
                        <div class="servicio">
                            <div class="icon-wrapper">
                            <i class="fas fa-briefcase"></i> 
                            </div>
                            <h3>Paquetes</h3>
                            <p>Te ofrecemos paquetes turísticos personalizados según tus preferencias.</p>
                        </div>
                        </div>
                      
                        <div class="servicio-item">
                        <div class="servicio">
                            <div class="icon-wrapper">
                            <i class="fas fa-tree"></i> 
                            </div>
                            <h3>Excursiones</h3>
                            <p>Vive la aventura con nuestras excursiones a destinos naturales únicos.</p>
                        </div>
                        </div>
                    </div>
                    </section>

            {/* Opiniones */}
            <section className="testimonial-area">
                <div className="container5">
                    <div className="sec-title">
                        <h1>Nuestros clientes opinan</h1>
                    </div>
                    <div className="testimonial-content">
                        {testimonialsData.map((testimonial, idx) => (
                            <div className="single-testimonial" key={idx}>
                                <p>{testimonial.text}</p>
                                <div className="client-info">
                                    <div className="client-pic">
                                        <img src={`../src/assets/inicio/${testimonial.img}`} alt={testimonial.name} />
                                    </div>
                                    <div className="client-details">
                                        <h6>{testimonial.name}</h6>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>
                                <div className="client-rating">{renderStars(testimonial.rating)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Principal;
