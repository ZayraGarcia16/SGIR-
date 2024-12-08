import React from 'react';
import './Servicios.css';
import { Link } from 'react-router-dom';
const Servicios = () => {
    return (
        <>

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
                            <Link to="/inicio-con">Formulario de Hotel</Link>
                        </ul>
                        <div className="btn">
                            <li className="fas fa-bars menu-btn"></li>
                        </div>
                    </nav>
                </div>
            </header>

        <section className="servicios">
            <h2>Nuestros Servicios</h2>
            <div className="servicios-lista">
                <div className="servicio-item">
                    <i className="fas fa-hotel"></i>
                    <h3>Hotelería</h3>
                    <p>Descubre hoteles únicos y especiales para tu estancia en Colombia, con vistas espectaculares.</p>
                </div>
                <div className="servicio-item">
                    <i className="fas fa-suitcase-rolling"></i>
                    <h3>Paquetes Turísticos</h3>
                    <p>Ofrecemos paquetes completos con actividades para desconectar, descansar y explorar Colombia.</p>
                </div>
                <div className="servicio-item">
                    <i className="fas fa-hiking"></i>
                    <h3>Excursiones</h3>
                    <p>Vive la aventura con nuestras excursiones guiadas por los hermosos paisajes naturales de Colombia.</p>
                </div>
                <div className="servicio-item">
                    <i className="fas fa-campground"></i>
                    <h3>Campamentos</h3>
                    <p>Disfruta de campamentos en lugares rodeados de naturaleza, donde la diversión está asegurada.</p>
                </div>
                <div className="servicio-item">
                    <i className="fas fa-biking"></i>
                    <h3>Deportes Extremos</h3>
                    <p>Si eres amante de la adrenalina, tenemos actividades de deportes extremos para todos los niveles.</p>
                </div>
                <div className="servicio-item">
                    <i className="fas fa-utensils"></i>
                    <h3>Gastronomía</h3>
                    <p>Prueba la deliciosa comida típica de Colombia, hecha con ingredientes frescos y locales.</p>
                </div>
            </div>
        </section>
        </>
    );
};

export default Servicios;