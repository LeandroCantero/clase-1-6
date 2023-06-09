import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from './Components/Formulario';
import Container from 'react-bootstrap/Container';
import ListadoClientes from './Components/ListadoClientes'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fragment, useState } from 'react';

function App() {

  //Hook de estado vacio
  const [clientes, setClientes] = useState([]);

  const agregarCliente = (socio) => {
    setClientes([
      ...clientes,
      socio
    ])
  };

  return (
    <Fragment>
      <Container>
        <Row>
          <Col><h3>Usuarios de la Veterinaria</h3></Col>
        </Row>
        <Row>
          <Col>
            <Formulario
              agregarCliente={agregarCliente}
            /></Col>
          <Col>
            <ListadoClientes
              clientes={clientes}
              setClientes={setClientes}
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
