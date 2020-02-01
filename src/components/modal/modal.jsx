import React from 'react';

import { Button, Modal } from 'react-bootstrap';
import { Route } from 'react-router-dom';

export const CustomModal = ({ errorMessage }) => (
  <Route
    render={({ history }) => (
      <Modal show={true} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
        <Modal.Body>
          <h4>Error</h4>
          <p>{errorMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='outline-dark'
            onClick={() => {
              history.push('/');
            }}
          >
            go back
          </Button>
          <Button
            variant='outline-dark'
            onClick={() => {
              history.push('/signin');
            }}
          >
            sign in
          </Button>
        </Modal.Footer>
      </Modal>
    )}
  />
);

export default CustomModal;
