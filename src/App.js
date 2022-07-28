import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Member from './components/Member';

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" exact="true" element={<MainPage />} />
    </Routes>
    <Routes>
      <Route path=":crewId" exact="true" element={<Member />} />
    </Routes>
  </div>
);

export default App;
