
import { Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import UrologicalInstruments from '@/pages/UrologicalInstruments';
import GastroenterologyEquipment from '@/pages/GastroenterologyEquipment';
import InfusionTherapy from '@/pages/InfusionTherapy';
import WoundCareOrtho from '@/pages/WoundCareOrtho';
import './App.css';

function App() {
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
