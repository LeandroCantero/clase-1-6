import React, { useState } from 'react'
import { Fragment } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {v4 as uuid} from 'uuid';

const Formulario = ({agregarCliente}) => {

    const [socio, setSocio] = useState({
        nombre: "",
        dni: ""
    })

    const { nombre, dni } = socio;

    const [error, setError] = useState(false);



    const handleChange = (e) => {
        setSocio({
            ...socio,
            [e.target.name] : e.target.value
        })
    };

    const submitForm = (e) => {
        e.preventDefault();

        if(nombre.trim === '' || dni.trim() === ''){
            setError(true);
            return;
        }

        setError(false);

        socio.id = uuid();

        agregarCliente(socio)

        setSocio({
            nombre:"",
            dni:""
        })


    }

    return (
        <Fragment>
            <Form onSubmit={submitForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h2 >
                        Registrar Usuario
                    </h2>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name='nombre'
                        placeholder="Nombre completo"
                        onChange={handleChange}
                        value={nombre}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>DNI</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Sin puntos ni espacios."
                        name='dni'
                        onChange={handleChange}
                        value={dni}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Ingresar Socio
                </Button>
            </Form>

            {
                error 
                && <h4>Completá todos los campos</h4>
            }

        </Fragment>
    )
}

export default Formulario