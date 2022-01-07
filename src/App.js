//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Menu from './pages/Menu'
import Dodge from './pages/dodge'
import SOS from './pages/SOS'
import NHIE from './pages/NHIE'
import {Route, Routes, Switch, Link} from 'react-router-dom';



function App() {
  return (
    
    <div className="mainbg">
      {/* <Home /> */}
    
        {/* <h1>Hi</h1> */}
        
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/menu' element={<Menu/>} />
          <Route  path='/neverhaveiever' element={<NHIE/>} />
          <Route  path='/dodge' element={<Dodge/>} />
          <Route  path='/spitorswallow' element={<SOS/>} />

        </Routes>
          
          {/* <Route path="/Menu" component={Menu} /> */}
        
     
      
      
    </div>
  );
}

export default App;
