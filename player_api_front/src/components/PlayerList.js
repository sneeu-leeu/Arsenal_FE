import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePlayerService from '../hooks/usePlayerService';
import AddPlayerModal from '../modals/AddPlayerModal';
import EditPlayerModal from '../modals/EditPlayerModal';

function PlayerList() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  const toggleAddModal = () => setShowAddModal(!showAddModal);
  const toggleEditModal = (playerId) => {
    setShowEditModal(!showEditModal);
    setSelectedPlayerId(playerId);
  };

  const { players, error, deletePlayer } = usePlayerService();

  const handleDeletePlayer = async (playerId) => {
    try {
      await deletePlayer(playerId);
    } catch (error) {
      console.error('Error deleting player:', error);
    }
  };


  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='container'>
      <button className='btn btn-primary mb-2 center' onClick={toggleAddModal}>Add Player</button>
      <AddPlayerModal show={showAddModal} onHide={toggleAddModal} />

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
                <Link to={`/edit/${player.id}`} className="btn btn-primary">Edit</Link>
                <button onClick={() => handleDeletePlayer(player.id)} className="btn btn-danger">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <EditPlayerModal show={showEditModal} onHide={toggleEditModal} playerId={selectedPlayerId} />
    </div>
  );
}

export default PlayerList;
