
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import UrologicalInstruments from "./pages/UrologicalInstruments";
import GastroenterologyEquipment from "./pages/GastroenterologyEquipment";
import InfusionTherapy from "./pages/InfusionTherapy";
import BloodManagementSolutions from "./pages/BloodManagementSolutions";
import AnaesthesiaSystems from "./pages/AnaesthesiaSystems";
import SurgeryWoundDrainage from "./pages/SurgeryWoundDrainage";
import AboutUs from "./pages/AboutUs";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/urological-instruments" element={<UrologicalInstruments />} />
          <Route path="/gastroenterology" element={<GastroenterologyEquipment />} />
          <Route path="/infusion-therapy" element={<InfusionTherapy />} />
          <Route path="/blood-management-solutions" element={<BloodManagementSolutions />} />
          <Route path="/blood-management" element={<Navigate to="/blood-management-solutions" replace />} />
          <Route path="/anaesthesia-systems" element={<AnaesthesiaSystems />} />
          <Route path="/surgery-wound-drainage" element={<SurgeryWoundDrainage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
