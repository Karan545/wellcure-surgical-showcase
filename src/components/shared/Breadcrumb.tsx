import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  label: string;
  path: string;
  isActive?: boolean;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = "" }) => {
  const location = useLocation();

  // Auto-generate breadcrumb items if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: "Home", path: "/" }
    ];

    // Map of paths to readable labels
    const pathLabels: Record<string, string> = {
      'urological-instruments': 'Urological Instruments',
      'gastroenterology': 'Gastroenterology Equipment',
      'infusion-therapy': 'Infusion Therapy',
      'blood-management-solutions': 'Blood Management Solutions',
      'blood-management': 'Blood Management Solutions',
      'anaesthesia-systems': 'Anaesthesia Systems',
      'surgery-wound-drainage': 'Surgery & Wound Drainage'
    };

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = pathLabels[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const isActive = index === pathSegments.length - 1;
      
      breadcrumbs.push({
        label,
        path: currentPath,
        isActive
      });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`bg-white/90 backdrop-blur-sm border-b border-gray-200/50 sticky top-14 md:top-16 lg:top-20 z-40 ${className}`}
      aria-label="Breadcrumb navigation"
    >
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex items-center py-3 md:py-4">
          <ol className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base">
            {breadcrumbItems.map((item, index) => (
              <li key={item.path} className="flex items-center">
                {index > 0 && (
                  <ChevronRight 
                    size={16} 
                    className="text-gray-400 mx-1 md:mx-2 flex-shrink-0" 
                    aria-hidden="true"
                  />
                )}
                
                {item.isActive ? (
                  <span 
                    className="text-[#003b5c] font-medium flex items-center gap-1.5 px-2 py-1 rounded-md bg-gradient-to-r from-[#003b5c]/10 to-[#1f5f5b]/10"
                    aria-current="page"
                  >
                    {index === 0 && <Home size={14} className="flex-shrink-0" />}
                    <span className="truncate max-w-[150px] sm:max-w-none">{item.label}</span>
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-[#003b5c] transition-colors duration-200 flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-gray-50 group"
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {index === 0 && (
                      <Home 
                        size={14} 
                        className="flex-shrink-0 group-hover:text-[#003b5c] transition-colors" 
                      />
                    )}
                    <span className="truncate max-w-[150px] sm:max-w-none">{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </motion.nav>
  );
};

export default Breadcrumb;