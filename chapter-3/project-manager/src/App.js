import './App.css';
import Header from './components/Header/Header.jsx';
import Backlog from './pages/Backlog/Backlog';
import Board from './pages/Board/Board.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
      <Backlog />
    </div>
  );
}

export default App;
