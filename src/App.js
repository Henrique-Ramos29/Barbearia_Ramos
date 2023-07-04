
import './App.css';
import Header from './components/Haeder';

import Footer from './components/Footer';
import Servico from './components/Servico';
import Map from './components/Map';
import Contato from './components/Contato';
import PaginaPadrao from './components/PaginaPadrao';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<PaginaPadrao />} >
          <Route path="/" element={<Servico />} />
          <Route path="/map" element={<Map />} />
          <Route path="/contato" element={<Contato />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter >

  );
}

export default App;
