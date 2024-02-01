import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net';
import './App.css';
import PlayerList from './components/PlayerList';
import AddPlayerForm from './components/AddPlayerForm';



function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
    $('#playersTable').DataTable(); // Initialize DataTables
  }, []);

  const fetchPlayers = async () => {
    const response = await fetch('http://localhost:3000/api/v1/players');
    const data = await response.json();
    setPlayers(data);
  };

  return (
    <div className="container">
    <h1>Players List</h1>
    <PlayerList players={players} />
    <h2>Add New Player</h2>
    <AddPlayerForm />
    </div>
  );
}

export default App;