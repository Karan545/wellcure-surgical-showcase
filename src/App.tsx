
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UrologicalInstruments from "./pages/UrologicalInstruments";
import GastroenterologyEquipment from "./pages/GastroenterologyEquipment";
import InfusionTherapy from "./pages/InfusionTherapy";
import BloodManagementSolutions from "./pages/BloodManagementSolutions";
import AnaesthesiaSystems from "./pages/AnaesthesiaSystems";
import SurgeryWoundDrainage from "./pages/SurgeryWoundDrainage";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/urological-instruments" element={<UrologicalInstruments />} />
          <Route path="/gastroenterology" element={<GastroenterologyEquipment />} />
          <Route path="/infusion-therapy" element={<InfusionTherapy />} />
          <Route path="/blood-management-solutions" element={<BloodManagementSolutions />} />
          <Route path="/anaesthesia-systems" element={<AnaesthesiaSystems />} />
          <Route path="/surgery-wound-drainage" element={<SurgeryWoundDrainage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
