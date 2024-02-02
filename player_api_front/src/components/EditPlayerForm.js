import React, { useState, useEffect } from 'react';
import { Modal, Button, container } from 'react-bootstrap';

function EditPlayerForm({ playerId }) {
  const [formData, setFormData] = useState({
    player_name: '',
    position: '',
    jersey_number: '',
    goals_scored: ''
  });

  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/players/${playerId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch player data');
        }
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayerData();
  }, [playerId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/v1/players/${playerId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch player data');
      }
      const data = await response.json();
      setFormData(data);
    } catch (error) {
      console.error('Error fetching player data:', error);
    }
  };

  return (
    <div className={'container'}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="playerName">Player Name</label>
          <input type="text" className="form-control" id="playerName" name="player_name" value={formData.player_name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input type="text" className="form-control" id="position" name="position" value={formData.position} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="jerseyNumber">Jersey Number</label>
          <input type="number" className="form-control" id="jerseyNumber" name="jersey_number" value={formData.jersey_number} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="goalsScored">Goals Scored</label>
          <input type="number" className="form-control" id="goalsScored" name="goals_scored" value={formData.goals_scored} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
}

export default EditPlayerForm;