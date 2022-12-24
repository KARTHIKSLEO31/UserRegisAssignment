import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Login } from './login';
import { Register } from './register';
import './App.css';
import { Forgot } from './forgot';
import { Change } from './changePassword';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/forgot' element={<Forgot/>} />
          <Route exact path='/change' element={<Change/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
