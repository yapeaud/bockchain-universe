import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
//import './App.css'

import HomePage from "./pages/HomePage"
import ActualiteCryptoPage from './pages/ActualiteCryptoPage';
import NewBlockchainPage from './pages/NewBlockchainPage';
import GuideBitcoin from './pages/GuideBitcoin';
import MoreInfos from './pages/MoreInfos';
import Academy from './pages/Academy';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/actualite-crypto" element={<ActualiteCryptoPage />} />
      <Route path="/nouvelles-blockchain" element={<NewBlockchainPage />} />
      <Route path="/guide-bitcoin" element={<GuideBitcoin />} />
      <Route path="/more-infos" element={<MoreInfos />} />
      <Route path="/academie" element={<Academy />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
