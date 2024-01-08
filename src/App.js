import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import {Login} from './ui-components/Login';
import Main from './ui-components/Main.jsx';

import { Typography } from '@mui/material';

function App() {
  return (  
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Main" element={<Main/>}/>
        
      </Routes>
    </>
  );
}

export default App;