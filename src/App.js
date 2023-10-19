import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Maps from './Google_Maps/Maps';
import Weather from './Weather';
function App() {
  return (
    <div>
      <Weather/>
      <Maps/>
    </div>
  );
}

export default App;
