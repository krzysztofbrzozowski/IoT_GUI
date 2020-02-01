import React from 'react';
import { connect } from 'react-redux';
import { authLogin } from '../../redux/user/user.actions.js';
import { Redirect } from 'react-router-dom';
import { Row, Col, Form, Button } from 'react-bootstrap';

class SignInForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
  };

  render() {
    const { error, token } = this.props;
    const { username, password } = this.state;
    if (token) {
      return <Redirect to='/' />;
    }
    return (
      <Row className='justify-content-center'>
        <Col md={6}>
          {error && <p>{this.props.error.message}</p>}
          <Form onSubmit={this.handleSubmit} style={{ height: '10rem' }}>
            <Form.Group controlId='formBasicUsername'>
              <Form.Control name='username' type='username' placeholder='username' onChange={this.handleChange} value={username} />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Control name='password' type='password' placeholder='password' onChange={this.handleChange} value={password} />
            </Form.Group>

            <Button variant='outline-dark' type='submit'>
              Sign in
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.user.loading,
    error: state.user.error,
    token: state.user.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(authLogin(username, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
