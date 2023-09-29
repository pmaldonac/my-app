import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import Panel from "./pages/Panel";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={Login} />
        <Route path="/inicio" exact Component={Panel}/>
      </Routes>
    </Router>
  );
}

export default App;
