import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import CardsContainer from './containers/CardsContainer';
import LoginForm from './containers/LoginForm';
import SignupForm from './containers/SignupForm';
import NavBar from './components/NavBar';
import Home from './components/Home';


function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path="/cards/*" element={<CardsContainer/>}></Route>
          <Route path="/login" element={<LoginForm/>}></Route>
          <Route path="/signup" element={<SignupForm/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
