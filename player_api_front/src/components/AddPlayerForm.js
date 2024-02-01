import React from 'react';

function AddPlayerForm() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="playerName">Player Name</label>
        <input type="text" className="form-control" id="playerName" />
      </div>
      <div className="form-group">
        <label htmlFor="position">Position</label>
        <input type="text" className="form-control" id="position" />
      </div>
      <div className="form-group">
        <label htmlFor="jerseyNumber">Jersey Number</label>
        <input type="number" className="form-control" id="jerseyNumber" />
      </div>
      <div className="form-group">
        <label htmlFor="goalsScored">Goals Scored</label>
        <input type="number" className="form-control" id="goalsScored" />
      </div>
      <button type="submit" className="btn btn-primary">Add Player</button>
    </form>
  );
}

export default AddPlayerForm;