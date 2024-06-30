import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login.tsx';
import AddApp from './pages/AddApp.tsx';
import StepperForm from './pages/StepperForm.tsx';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add_app" element={<AddApp />} />
        <Route path="form" element={<StepperForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
