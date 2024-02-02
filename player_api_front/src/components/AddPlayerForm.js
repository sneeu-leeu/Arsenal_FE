import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import usePlayerService from '../hooks/usePlayerService';

const AddPlayerForm = () => {
  const [formData, setFormData] = useState({
    player_name: '',
    position: '',
    jersey_number: '',
    goals_scored: ''
  });
  
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const { addPlayer, players } = usePlayerService(); // Destructure addPlayer function and players array

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if Player Name is empty
    if (!formData.player_name.trim()) {
      setErrorMessage('Player Name cannot be empty');
      return;
    }

    // Check if Jersey Number is a unique integer
    const jerseyNumber = parseInt(formData.jersey_number);
    if (isNaN(jerseyNumber) || players.some(player => player.jersey_number === jerseyNumber)) {
      setErrorMessage('Jersey Number must be a unique integer');
      return;
    }

    try {
      await addPlayer(formData); 
      setFormData({
        player_name: '',
        position: '',
        jersey_number: '',
        goals_scored: ''
      });
      navigate('/manage');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <Form.Group controlId="playerName">
          <Form.Label>Player Name</Form.Label>
          <Form.Control type="text" name="player_name" value={formData.player_name} onChange={handleChange} isInvalid={!formData.player_name.trim()} />
          <Form.Control.Feedback type="invalid">Player Name cannot be empty</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="position">
          <Form.Label>Position</Form.Label>
          <Form.Control type="text" name="position" value={formData.position} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="jerseyNumber">
          <Form.Label>Jersey Number</Form.Label>
          <Form.Control type="number" name="jersey_number" value={formData.jersey_number} onChange={handleChange} isInvalid={!isNaN(parseInt(formData.jersey_number)) && players.some(player => player.jersey_number === parseInt(formData.jersey_number))} />
          <Form.Control.Feedback type="invalid">Jersey Number must be a unique integer</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="goalsScored">
          <Form.Label>Goals Scored</Form.Label>
          <Form.Control type="number" name="goals_scored" value={formData.goals_scored} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">Add Player</Button>
      </Form>
    </>
  );
};

export default AddPlayerForm;