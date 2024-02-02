import React from 'react';
import { Modal } from 'react-bootstrap';
import AddPlayerForm from '../components/AddPlayerForm';

function AddPlayerModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Player</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddPlayerForm />
      </Modal.Body>
    </Modal>
  );
}

export default AddPlayerModal;