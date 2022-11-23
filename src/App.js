import './App.css';
import MainPage from './MainPage/MainPage.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SubmitForm from './SubmitForm/SubmitForm';
import LoginForm from './Login/LoginForm';
import SubmitSuccess from './SubmitSuccess/SubmitSuccess';
import Profile from './Profile/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/submit" element={<SubmitForm />} />
        <Route path="/submit-success" element={<SubmitSuccess />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile/:userid" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
