import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import AdminPage from './components/admin/AdminPage'
import PaquetePage from './components/paquete/PaquetePage'
import './App.css';

function Home() { 
    return (
        <div className="app-container">
                <Header content={'Caminantes por colombia'}></Header>
                <div className='page-content'>
                    <div className='admin-content'>
                        <Link to="/admin">
                            <h1>Seccion Admin</h1>
                        </Link>
                    </div>
                    <div className='paquete-content'>
                        <Link to="/paquetes">
                            <h1>Seccion Paquetes</h1>
                        </Link>
                    </div>
                </div>

            </div>
    )
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/paquetes" element={<PaquetePage />} />
            </Routes>

        </Router>
    );
}

export default App;
