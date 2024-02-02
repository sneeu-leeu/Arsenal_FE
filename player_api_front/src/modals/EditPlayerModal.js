import React from 'react';
import { Modal } from 'react-bootstrap';
import EditPlayerForm from '../components/EditPlayerForm';

function EditPlayerModal({ show, onHide, playerId }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Player</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditPlayerForm playerId={playerId} />
      </Modal.Body>
    </Modal>
  );
}

export default EditPlayerModal;