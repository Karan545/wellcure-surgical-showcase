
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
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

const App = () => {
  useEffect(() => {
    // Handle legacy URLs and ensure proper redirects
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    
    // Handle legacy blood-management URL
    if (currentPath === '/blood-management') {
      window.history.replaceState(null, '', '/blood-management-solutions' + currentSearch);
    }
    
    // Remove trailing slashes for consistency
    if (currentPath.length > 1 && currentPath.endsWith('/')) {
      const newPath = currentPath.slice(0, -1);
      window.history.replaceState(null, '', newPath + currentSearch);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default App;
