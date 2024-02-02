import { useState, useEffect } from 'react';

const BASE_URL = 'http://localhost:3000/api/v1/football_data';

const useExternalService = () => {
  const [squad, setSquad] = useState([]);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSquad();
    fetchMatches();
  }, []);

  const fetchSquad = async () => {
    try {
      const response = await fetch(BASE_URL + "/arsenal");
      if (!response.ok) {
        throw new Error('Failed to fetch squad data');
      }
      const jsonData = await response.json();
      setSquad(jsonData.results);
    } catch (error) {
      setError(error);
    }
  };

  const fetchMatches = async () => {
    try {
      const response = await fetch(BASE_URL + "/matches");
      if (!response.ok) {
        throw new Error('Failed to fetch matches data');
      }
      const jsonData = await response.json();
      setMatches(jsonData.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { squad, matches, loading, error };
};

export default useExternalService;