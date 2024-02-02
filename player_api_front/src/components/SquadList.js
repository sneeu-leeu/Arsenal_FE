import React from 'react';
import useExternalService from '../hooks/useExternalService';

const SquadList = () => {
  const { squad, loading, error } = useExternalService();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container">
      <table className="table" id="squadlist">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Country of Birth</th>
            <th>Nationality</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {squad.map((player) => (
            <tr key={player.id}>
              <td>{player.name}</td>
              <td>{player.position}</td>
              <td>{player.countryOfBirth}</td>
              <td>{player.nationality}</td>
              <td>{player.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SquadList;