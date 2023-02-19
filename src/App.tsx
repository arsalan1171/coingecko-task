import './App.css';
import LandingPage from './components/LandingPageComponent/landing_page';
import { Routes, Route } from "react-router-dom";
import CryptoDetailsPage from './components/DetailsPageComponent/details_page';

const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/crypto-details/:id" element={<CryptoDetailsPage />} />
        <Route
        />
      </Routes>
    </div>
  );
}

export default App;
