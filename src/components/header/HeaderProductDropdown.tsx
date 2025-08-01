import React, { useState, useRef, useEffect } from "react";
import { PRODUCT_CATEGORIES } from "@/data/product-categories";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const HeaderProductDropdown: React.FC = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    function handleClick(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // ESC key closes
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Handler for trigger
  const triggerProps = isMobile
    ? {
        onClick: () => setOpen((o) => !o),
        tabIndex: 0,
        role: "button" as const,
        "aria-haspopup": true,
        "aria-expanded": open,
      }
    : {
        onClick: () => setOpen((o) => !o),
        tabIndex: 0,
        role: "button" as const,
        "aria-haspopup": true,
        "aria-expanded": open,
      };

  // Category click closes for desktop; keeps behavior expected for navigation
  const onCategoryClick = () => setOpen(false);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        {...triggerProps}
        className={cn(
          "flex items-center gap-1 cursor-pointer font-medium text-gray-700 hover:text-[#003b5c] py-2 px-1 transition-colors select-none focus:outline-none group relative",
          open && "text-[#003b5c]"
        )}
        aria-label="Products"
      >
        <span className="flex items-center">
          Products
          <ChevronDown
            size={18}
            className={cn(
              "ml-1 transition-transform",
              open && "rotate-180"
            )}
            aria-hidden
          />
        </span>
      </div>
      {/* Dropdown menu */}
      {open && (
        <div
          className={cn(
            "absolute left-0 mt-2 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 min-w-[210px] max-w-[220px] py-2",
            isMobile
              ? "top-full w-[90vw] left-1/2 -translate-x-1/2"
              : "top-full"
          )}
          role="menu"
          aria-label="Product categories"
        >
          <ul className="max-h-80 overflow-y-auto">
            {PRODUCT_CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <a
                  href={cat.slug}
                  onClick={onCategoryClick}
                  className="block w-full text-left px-4 py-2 text-gray-800 text-base font-medium rounded hover:bg-[#f0f7fa] hover:text-[#1f5f5b] focus:bg-[#e3eef2] transition-colors"
                  tabIndex={0}
                  role="menuitem"
                  aria-label={cat.name}
                >
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderProductDropdown;
