import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cadastro from './Pages/Cadastro';
import Login from './Pages/Login';
import Principal from './Pages/Principal';

function App() {
  return (
   <div style={{width: "100%",display: "flex", justifyContent:"center"}}>
    <Routes>
      <Route path="/" element={<Cadastro></Cadastro>} />
      <Route path="/Login" element={<Login></Login>} />
      <Route path="/Principal" element={<Principal></Principal>} />
      <Route path="*" element={""} />
    </Routes>
   </div>
  );
}

export default App;
