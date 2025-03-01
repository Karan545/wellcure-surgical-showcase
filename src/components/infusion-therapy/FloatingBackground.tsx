
import { Droplets, Syringe, Stethoscope, Thermometer } from "lucide-react";
import FloatingIcon from "./FloatingIcon";

const FloatingBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <FloatingIcon delay={0} duration={15} x={100} y={100}>
        <Droplets size={48} />
      </FloatingIcon>
      <FloatingIcon delay={2} duration={20} x={500} y={200}>
        <Syringe size={64} />
      </FloatingIcon>
      <FloatingIcon delay={4} duration={18} x={200} y={400}>
        <Stethoscope size={56} />
      </FloatingIcon>
      <FloatingIcon delay={6} duration={16} x={700} y={300}>
        <Thermometer size={48} />
      </FloatingIcon>
    </div>
  );
};

export default FloatingBackground;
