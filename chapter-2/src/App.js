import logo from './assets/logo.svg';
import Profile from './components/Profile/Profile';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Profile userName="webdevelopersbierzo" />
    </div>
  );
}

export default App;
