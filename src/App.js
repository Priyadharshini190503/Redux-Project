import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContectPage from './Pages/ContectPage';
import Navigate from './NavigationFun/Navigate';
import Users from './Pages/PersonalInfo';

function App() {
  return (
    <div className="App">
    <div className='heder'>
      <div style={{display:'flex',alignItems:'center',justifyContent:'left',padding:'4500px'}}> 
      <img src="logo192.png" alt="logo"/>
      </div>
      <Navigate/>
    </div>
    <div className='body'>
       <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContectPage/>} />
          <Route path="/users" element={<Users/>} />
       </Routes>
    </div>
    </div>

  );
}

export default App;
