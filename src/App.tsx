
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import UrologicalInstruments from '@/pages/UrologicalInstruments';
import GastroenterologyEquipment from '@/pages/GastroenterologyEquipment';
import InfusionTherapy from '@/pages/InfusionTherapy';
import WoundCareOrtho from '@/pages/WoundCareOrtho';
import './App.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/urological-instruments" element={<UrologicalInstruments />} />
      <Route path="/gastroenterology" element={<GastroenterologyEquipment />} />
      <Route path="/infusion-therapy" element={<InfusionTherapy />} />
      <Route path="/wound-care-ortho" element={<WoundCareOrtho />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
