import React, { useState } from 'react';

function AddPlayerForm() {
  const [formData, setFormData] = useState({
    player_name: '',
    position: '',
    jersey_number: '',
    goals_scored: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/v1/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ player: formData })
      });
      if (!response.ok) {
        throw new Error('Failed to add player');
      }
      // Reset form data after successful submission
      setFormData({
        player_name: '',
        position: '',
        jersey_number: '',
        goals_scored: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
      <button type="submit" className="btn btn-primary">Add Player</button>
    </form>
  );
}

export default AddPlayerForm;