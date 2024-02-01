import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'datatables.net';
import './App.css';
import PlayerList from './components/PlayerList';
import AddPlayerForm from './components/AddPlayerForm';



function App() {

  return (
    <>
      <div>
        <h1>Arsenal FC</h1>
        <h3>Players</h3>
      </div>
      <Router>
        <Routes>
          <Route path="/add" element={<AddPlayerForm />} />
          <Route path="/" element={<PlayerList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;