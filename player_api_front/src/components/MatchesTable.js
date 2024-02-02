import React from 'react';
import useExternalService from '../hooks/useExternalService';

const MatchesTable = () => {
  const { matches, loading, error } = useExternalService();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container">
      <h2>Scheduled Matches</h2>
      <table className="table" id="matchesTable">
        <thead>
          <tr>
            <th>League</th>
            <th>Current Matchday</th>
            <th>Scheduled Match Day</th>
            <th>Home Team</th>
            <th>Away Team</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr key={match.id}>
              <td>{match.competition.name}</td>
              <td>{match.season.currentMatchday}</td>
              <td>{match.matchday}</td>
              <td>{match.homeTeam.name}</td>
              <td>{match.awayTeam.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchesTable;