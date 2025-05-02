
import { Routes, Route, Navigate } from 'react-router-dom';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import UrologicalInstruments from '@/pages/UrologicalInstruments';
import GastroenterologyEquipment from '@/pages/GastroenterologyEquipment';
import InfusionTherapy from '@/pages/InfusionTherapy';
import WoundCareOrtho from '@/pages/WoundCareOrtho';
import BloodManagementSolutions from '@/pages/BloodManagementSolutions';
import AnaesthesiaSystems from '@/pages/AnaesthesiaSystems';
import MedicalGlovesDivision from '@/pages/MedicalGlovesDivision';
import SurgeryWoundDrainage from '@/pages/SurgeryWoundDrainage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/urological-instruments" element={<UrologicalInstruments />} />
      <Route path="/gastroenterology" element={<GastroenterologyEquipment />} />
      <Route path="/infusion-therapy" element={<InfusionTherapy />} />
      <Route path="/wound-care-ortho" element={<WoundCareOrtho />} />
      <Route path="/blood-management-solutions" element={<BloodManagementSolutions />} />
      <Route path="/blood-management" element={<Navigate to="/blood-management-solutions" replace />} />
      <Route path="/anaesthesia-systems" element={<AnaesthesiaSystems />} />
      <Route path="/medical-gloves-division" element={<MedicalGlovesDivision />} />
      <Route path="/medical-gloves" element={<Navigate to="/medical-gloves-division" replace />} />
      <Route path="/surgery-wound-drainage" element={<SurgeryWoundDrainage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
