import { useState, useEffect } from 'react';

const BASE_URL = 'http://localhost:3000/api/v1/players';

const usePlayerService = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch players');
      }
      const data = await response.json();
      setPlayers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addPlayer = async (playerData) => {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(playerData),
      });
      if (!response.ok) {
        throw new Error('Failed to add player');
      }
      const data = await response.json();
      setPlayers([...players, data]);
    } catch (error) {
      setError(error.message);
    }
  };

  const updatePlayer = async (playerId, playerData) => {
    try {
      const response = await fetch(`${BASE_URL}/${playerId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(playerData),
      });
      if (!response.ok) {
        throw new Error('Failed to update player');
      }
      const data = await response.json();
      setPlayers(players.map(player => (player.id === playerId ? data : player)));
    } catch (error) {
      setError(error.message);
    }
  };

  const deletePlayer = async (playerId) => {
    try {
      const response = await fetch(`${BASE_URL}/${playerId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete player');
      }
      setPlayers(players.filter(player => player.id !== playerId));
    } catch (error) {
      setError(error.message);
    }
  };

  return { players, loading, error, addPlayer, updatePlayer, deletePlayer };
};

export default usePlayerService;