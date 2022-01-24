import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';
import MatchesPage from './pages/MatchesPage/MatchesPage';
import Navbar from './components/Navbar/Navbar';
import AdminMatchesPage from './pages/AdminMatchesPage/AdminMatchesPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Navbar/>
            <LoginPage/>
          </Route>
          <Route path="/signUp">
            <Navbar/>
            <SignUpPage/>
          </Route>
          <Route path="/matches">
            <Navbar/>
            <AdminMatchesPage/>
          </Route>
          <Route path="/">
            <Navbar/>
            <HomePage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
