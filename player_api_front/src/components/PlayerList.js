import React from 'react';

function PlayerList({ players }) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Player Name</th>
          <th>Position</th>
          <th>Jersey Number</th>
          <th>Goals Scored</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.id}>
            <td>{player.player_name}</td>
            <td>{player.position}</td>
            <td>{player.jersey_number}</td>
            <td>{player.goals_scored}</td>
            <td>
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-danger">Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PlayerList;