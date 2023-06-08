import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ListadoClientes({ clientes, setClientes }) {
    return (
        <>
            <Container fluid>
                <div>
                    {clientes && setClientes.length ? (
                        <>
                            <h2 style={{marginBottom: '15px'}}>
                                Lista Usuarios
                            </h2>
                            {clientes.map(cliente => (
                                <>
                                    <Row>
                                        <Col>
                                            <p><h5>Nombre </h5>  {cliente.nombre}</p>
                                        </Col>
                                        <Col>
                                            <p><h5>Dni </h5>  {cliente.dni}</p>
                                        </Col>
                                    </Row>
                                </>
                            ))}
                        </>

                    ) : (
                        <>
                            <h2>
                                No hay pacientes
                            </h2>
                            <p>
                                Comienza agregando pacientes {''}
                                <span>y aparecerán en este lugar</span>
                            </p>
                        </>
                    )}

                </div>
            </Container>
        </>

    )
}

export default ListadoClientes