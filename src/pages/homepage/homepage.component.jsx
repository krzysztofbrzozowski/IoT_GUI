import React from 'react';

import { Route } from 'react-router-dom';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ReactComponent as SvgInside } from '../../assets/sensor_API_GUI_inside.svg';
import { ReactComponent as SvgOutside } from '../../assets/sensor_API_GUI_outside.svg';

import './homepage.styles.scss';

const HomePage = () => (
  <Route
    render={({ history }) => (
      <Container>
        <Row className='main-row'>
          <Col sm={6}>
            <Row className='justify-content-center'>
              <Card style={{ width: '18rem', height: '25rem', margin: '0.5rem' }} className='text-center'>
                <SvgOutside style={{ width: '12rem', height: 'auto', margin: 'auto', marginTop: '2rem' }} />
                <Card.Body>
                  <Card.Title>outside sensor</Card.Title>
                  <Card.Text>You can see temperatures outside your house.</Card.Text>
                  <Button
                    variant='outline-dark'
                    onClick={() => {
                      history.push('/outdoor-readings');
                    }}
                  >
                    See readings
                  </Button>
                </Card.Body>
              </Card>
            </Row>
          </Col>
          <Col sm={6}>
            <Row className='justify-content-center'>
              <Card style={{ width: '18rem', height: '25rem', margin: '0.5rem' }} className='text-center'>
                <SvgInside style={{ width: '12rem', height: 'auto', margin: 'auto', marginTop: '2rem' }} />
                <Card.Body>
                  <Card.Title>inside sensor</Card.Title>
                  <Card.Text>You can see temperatures inside your house.</Card.Text>
                  <Button
                    variant='outline-dark'
                    onClick={() => {
                      history.push('/indoor-readings');
                    }}
                  >
                    See readings
                  </Button>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    )}
  />
);

export default HomePage;
