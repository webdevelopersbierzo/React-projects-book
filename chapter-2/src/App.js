import {BrowserRouter, Routes, Route} from 'react-router-dom';
import logo from './assets/logo.svg';
import Profile from './components/Profile/Profile';
import './App.css';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import ProjectDetails from './components/ProjectsDetails/ProjectDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo}/>     
        <Routes>
          <Route path='/' element={ <Profile userName="webdevelopersbierzo" />} />
          <Route path='/projects' element={<Projects userName={'webdevelopersbierzo'}/>}/>
          <Route path='/projects/:name' element={<ProjectDetails userName='webdevelopersbierzo' />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
