import { useState, useEffect } from 'react';

function usePlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/players');
        if (!response.ok) {
          throw new Error('Failed to fetch players');
        }
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayers();

    return () => {
      // Clean up any pending requests if needed
    };
  }, []);

  return players;
}

export default usePlayers;