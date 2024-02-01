import React from 'react';
import usePlayer from '../hooks/usePlayer';
import { Link } from 'react-router-dom';

function PlayerList() {
  const players = usePlayer();

  return (
    <div>
        <Link to="/add" className="btn btn-primary mb-3">Add Player</Link>
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
    </div>
  );
}
export default PlayerList;