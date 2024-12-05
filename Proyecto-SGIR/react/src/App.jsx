import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from './paginas/inicio/paginaprincipal'; // Componente para "Inicio"
import Nosotros from './paginas/nosotros/nosotros'; // Componente para la sección de Nosotros
import Servicios from './paginas/servicios/Servicios'; // Componente para Servicios
import InicioCon from './paginas/inicio/inicioCon';  // Componente para la sección de InicioCon
import DashboardAdmin from './paginas/dashboard/Dashboard';
import AdminPage from './paginas/dashboard/dashboardadmin'; 
import AdminCrud from './paginas/admin/AdminPage';
// import HotelForm from './paginas/hoteles/FormularioHotel';  // Componente para el formulario de Hotel
import PaquetePage from './paginas/paquete/PaquetePage';
import ClientesCRUD from './componentes/clientesCRUD';
//import Contacto from './paginas/contacto/InicioContactos';
import FormExcursion from './paginas/excursiones/Excursiones';
import ComentariosCRUD from './componentes/comentarioCRUD';
import ListaDeContactos from './paginas/contacto/ListarContactos';
// import ReservaCrud from './paginas/reservas/resevar';
import PoliticaDePrivacidad from './paginas/politicas/politica';
import Ayuda from './paginas/politicas/Ayuda';
import TerminosDeUso from './paginas/politicas/Terminos';
import FormHotel from './paginas/hoteles/FormHotel';
// import ClientePage from './paginas/dashboard/dashboardcliente';
// import Excursiones from './paginas/dashboard/InicioExcursiones';




const App = () => {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<Principal />} />

                 Otras páginas
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/inicio-con" element={<InicioCon />} />
                <Route path="/dashboard" element={<DashboardAdmin/>} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/terminos" element={<TerminosDeUso />} />
                <Route path="/ayuda" element={<Ayuda />} />
                <Route path="/politica" element={<PoliticaDePrivacidad />} />
                <Route path="/crudadmin" element={< AdminCrud />} />
                <Route path="/clientes" element={<ClientesCRUD />} />
                <Route path="/paquete" element={<PaquetePage />} />
                <Route path="/excursiones" element={<FormExcursion />} />
                <Route path="/comentario" element={<ComentariosCRUD/>} />
                <Route path="/crudcontacto" element={<ListaDeContactos/>} />
                <Route path="/hotel" element={<FormHotel/>} />
                {/*<Route path="/hotel-form" element={<HotelForm />} />
                
                
                <Route path="/dashboard-admin" element={<DashboardAdmin />} />
                
                <Route path="/contacto" element={<Contacto />} />
                
                <Route path="/comentario" element={<ComentariosCRUD/>} />
                <Route path="/crudcontacto" element={<ListaDeContactos/>} />
                <Route path="/reserva" element={<ReservaCrud/>} />
                <Route path="/terminos" element={<TerminosDeUso/>} />
                <Route path="/politica" element={<PoliticaDePrivacidad/>} />
                <Route path="/ayuda" element={<Ayuda/>} />
                <Route path="/cliente" element={<ClientePage/>} />
                <Route path="/clientevista" element={<Excursiones/>} /> */}

                

                {/* Ruta para manejar páginas no encontradas */}
                <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
            </Routes>
        </Router>
    );
};

export default App;
