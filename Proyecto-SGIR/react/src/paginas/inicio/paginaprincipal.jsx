import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './estilos.css';
import './responsive.css';
import Footer from '../../componentes/Footer'; // Asegúrate de que esta ruta es correcta

const Principal = () => {
    const [scroll, setScroll] = useState(0);
    const itemsPerPage = 3; // Número de elementos visibles
    const totalItems = 6;  // Total de testimonios
    const containerWidth = 1000; // Ajusta según el tamaño de tu contenedor
    const itemWidth = containerWidth / itemsPerPage; // Ancho de cada testimonio

    useEffect(() => {
        const interval = setInterval(() => {
            handleScroll('next');
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleScroll = (direction) => {
        setScroll((prevScroll) => {
            const maxScroll = (Math.ceil(totalItems / itemsPerPage) - 1) * containerWidth;

            if (direction === 'next') {
                return prevScroll >= maxScroll ? 0 : prevScroll + containerWidth;
            } else {
                return prevScroll <= 0 ? maxScroll : prevScroll - containerWidth;
            }
        });
    };

    // Función para mostrar estrellas
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i key={i} className={`fas fa-star ${i <= rating ? 'filled' : 'empty'}`}></i>
            );
        }
        return stars;
    };

    // Función para manejar el cambio de página
    const handlePageChange = (newPage) => {
        setPage(newPage); // Cambia la página a la que se pasa como argumento
    };

    return (
        <>
            {/* Encabezado */}
            <header>
                <div className="container1">
                    <nav>
                        <div className="logo">
                            <img src="../src/assets/logo.png" alt="Logo" />
                        </div>
                        <ul>
                            <div className="btn">
                                <li className="fas fa-times close-btn"></li>
                            </div>
                            <Link to="/">Inicio</Link> | 
                            <Link to="/nosotros">Nosotros</Link> | 
                            <Link to="/servicios">Servicios</Link> | 
                            <Link to="/inicio-con">ingresar</Link>
                        </ul>
                        <div className="btn">
                            <li className="fas fa-bars menu-btn"></li>
                        </div>
                    </nav>
                </div>
            </header>
          
            <main>
                <div className="slide-container swiper">
                    <div className="slide-content swiper-wrapper">
                        {["colombia3.jpeg", "colombia5.jpg"].map((img, idx) => (
                            <div className="overlay swiper-slide" key={idx}>
                                <img src={`../src/assets/inicio/${img}`} alt={`Slider ${idx + 1}`} />
                                <div className="img-overlay">
                                    <h1>Explora Colombia como nunca antes</h1>
                                    <p>Descubre su magia, cultura y belleza natural con aventuras sin límites</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Sección Sobre Nosotros */}
            <section>
                <div className="container3">
                    <div className="about-content-wrapper">
                        <div className="agency-left-side">
                            <p className="heading-normal-txt">SOBRE NOSOTROS</p>
                            <p className="headings">CAMINANTES POR COLOMBIA</p>
                            <p className="lead">
                                Caminantes por Colombia es una agencia de turismo que ofrece experiencias
                                extraordinarias a través de caminatas escolares, excursiones, campamentos y deportes extremos.
                                Se especializan en la creación de momentos memorables y emocionantes, diseñando programas que
                                combinan aventura, educación y diversión para personas de todas las edades.
                            </p>
                            <a href="/contactenos/sobre_nosotros" className="tw">Leer más</a>
                        </div>
                        <div className="agency-right-side">
                            <div className="img">
                                <img src="../src/assets/inicio/leon.jpeg" alt="Imagen de un león" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección Servicios */}
            <section className="servicios">
                <div className="row">
                    <h2>NUESTROS SERVICIOS</h2>
                </div>
                <div className="row">
                    {[
                        { icon: "fa-hotel", title: "Hotelería", text: "Descubre un hotel con una vista espectacular o una experiencia única y auténtica" },
                        { icon: "fa-suitcase-rolling", title: "Paquetes Turísticos", text: "Buscar una escapada llena de actividades o un retiro relajante para desconectar." },
                        { icon: "fa-hiking", title: "Excursiones", text: "Explora los rincones más de Colombia." }
                    ].map((service, idx) => (
                        <div className="column" key={idx}>
                            <div className="card" onClick={() => window.location.href = service.link}>
                                <div className="icon-wrapper">
                                    <i className={`fas ${service.icon}`}></i>
                                </div>
                                <div className="titulo">
                                    <h3>{service.title}</h3>
                                    <p>{service.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="testimonial-area">
                <div className="container5">
                    <div className="sec-title">
                        <h1>Nuestros clientes opinan</h1>
                    </div>
                    <div className="testimonial-content" style={{ transform: `translateX(-${scroll}px)` }}>
                        {[
                            { img: "persona1.jpg", name: "Rosalbuald", role: "Excursionista", text: "Mi hija llegó muy feliz y contenta gracias a estas excursiones", rating: 5 },
                            { img: "persona2.jpg", name: "Juanita Pérez", role: "Madre de excursión infantil", text: "Mi hijo disfrutó mucho la excursión, fue muy entretenido y educativo.", rating: 4 },
                            { img: "persona3.jpg", name: "Carlos Mendoza", role: "Excursionista", text: "Fue una experiencia inolvidable para toda la familia, excelente organización.", rating: 4 },
                            { img: "persona4.png", name: "María López", role: "Excursionista", text: "Una experiencia única que nos dejó recuerdos imborrables.", rating: 5 },
                            { img: "persona5.png", name: "Luis Pérez", role: "Madre de excursión", text: "Los guías fueron muy amables, y la excursión muy educativa.", rating: 3 },
                            { img: "persona6.png", name: "Ana Rodríguez", role: "Excursionista", text: "Disfruté mucho y aprendí sobre la biodiversidad local.", rating: 4 }
                        ].map((testimonial, idx) => (
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
                                    <div className="client-rating">
                                        {renderStars(testimonial.rating)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="control-btns">
                        <button className="prev-btn" onClick={() => handleScroll('prev')}>&#10094;</button>
                        <button className="next-btn" onClick={() => handleScroll('next')}>&#10095;</button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Principal;
