import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import 'datatables.net';
import './App.css';
import PlayerList from './components/PlayerList';
import AddPlayerForm from './components/AddPlayerForm';
import EditPlayerForm from './components/EditPlayerForm';
import Top from './components/Top';
import Home from './components/Home'
import SquadList from './components/SquadList';
import MatchesTable from './components/MatchesTable';



function App() {

  return (
    <>
      <Top />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/manage" element={<PlayerList />} />
          <Route path="/squad" element={< SquadList/>} />
          <Route path="/fixtures" element={< MatchesTable/>} />
          <Route path="/add" element={<AddPlayerForm />} />
          <Route path="/edit/:id" element={<EditPlayerForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;