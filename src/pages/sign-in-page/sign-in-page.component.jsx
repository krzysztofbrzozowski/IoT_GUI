import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './sign-in-page.styles.scss';

const SignInPage = () => (
  <div className='sign-in'>
    <Container>
      <Row className='login-main-row'>
        <Col md={12}>
          <SignInForm />
        </Col>
      </Row>
    </Container>
  </div>
);

export default SignInPage;
