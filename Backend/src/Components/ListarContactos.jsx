import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


function ListaDeContactos(setContactosSelec) {
    const [listaContactos, setListaContactos] = useState([]);
    const [idContactos, setIdContactos] = useState();

    //Capturar y enviar los datos
    useEffect(() => {
        const ConsultarContactos = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/contactos", {});
                setListaContactos(response.data);
            } catch (error) {
                console.error(`Ocurrio un error al consultar los datos ${error}`);
            }
        };
        ConsultarContactos();   
    },[listaContactos]);

    const EliminarContacto = async (id) => {
        console.log(`El id a eliminar en el fornt es ${id}`);
        
        try {
            const dataResp = await axios.delete(`http://localhost:4000/api/contactos/${id}`);
            console.log(`La ruta a ejecutar es : http://localhost:4000/api/contactos/${id} --- 
            y La respuesta despues de eliminar = ${dataResp}`);
            alert("El contacto fue eliminado con exito");
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <>
        <div className="container text-center mb-3">
            <h4 className="bg-light">Lista de usuarios</h4>

            <table className="table table-sm">
                <caption>Lista de mensajes enviados</caption>
                <thead className="table-light">
                    <tr>
                        <th scope="col">Codigo</th>
                        <th scope="col">Nombre y Apellido</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Asunto</th>
                        <th scope="col">Mensaje</th>
                        <th scope="col">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaContactos.map((contacto) => {
                                <tr key={contacto._id}>
                                    <th scope="row">{contacto._id}</th>
                                    <td>{contacto.nombre_apellido}</td>
                                    <td>{contacto.correo}</td>
                                    <td>{contacto.asunto}</td>
                                    <td>{contacto.mensaje}</td>
                                    <td>{contacto.fecha}</td>
                                    <td>
                                        <div className="btn-group" role="group" aria-label="Basic Example">
                                            <button type="button"
                                            className="btn btn-info"
                                            onClick={() => setContactosSelec(contacto)}>Editar</button>

                                            <button type="button"
                                            className="btn btn-danger"
                                            onClick={() => EliminarContacto(contacto._id)}>Eliminar</button>
                                        </div>
                                    </td>

                                </tr>
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
        </>
    );
};

export default ListaDeContactos