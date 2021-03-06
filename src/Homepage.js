import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

import './bootstrap.min.css';

function Homepage() {
  const nameLength = 4;
  const history = useHistory();
  const [roomCode, setRoomCode] = useState('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let generatedRoomCode = '';
  for (let i = 0; i < nameLength; ++i) {
    let generatedChar;
    while (true) {
      const alphabetLength = 26;
      const charCode = Math.floor(Math.random() * alphabetLength);
      generatedChar = String.fromCharCode('a'.charCodeAt(0) + charCode);
      if (!vowels.includes(generatedChar)) { break; }
    }
    generatedRoomCode += generatedChar;
  }

  const onRoomCodeChange = (e) => setRoomCode(e.target.value);

  const joinRoom = () => history.push(`/rooms/${roomCode}`);

  return (
    <Container>
      <Row>
        <Col lg={{ offset: 1, span: 10 }} xl={{ offset: 2, span: 8 }}>
          <Jumbotron className='jumbotron'>
            <h1>Love Communique</h1>
            <p>Love. Power. Deceit. You'll find it all in Love Communique!</p>
            <p><em>Get your communique to the Princess!</em></p>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col md={6} lg={{ offset: 1, span: 5 }} xl={{ offset: 2, span: 4 }}>
          <Card>
            <Card.Body>
              <h5>Create a new room</h5>
              <Form.Group>
              <Link className='btn btn-primary' to={`/rooms/${generatedRoomCode}`}>
                Create a room
              </Link>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={5} xl={4}>
          <Card>
            <Card.Body>
              <h5>Join a room</h5>
              <Form onSubmit={joinRoom}>
                <Form.Group controlId='roomCode'>
                  <ButtonToolbar>
                    <InputGroup>
                      <Form.Control
                        placeholder='Room code'
                        value={roomCode}
                        onChange={onRoomCodeChange}
                      />
                    </InputGroup>
                    <ButtonGroup>
                      <Button variant='primary' type='submit'>
                        Join room
                      </Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
