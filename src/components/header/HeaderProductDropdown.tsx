
import React, { useState, useRef, useEffect } from "react";
import { PRODUCT_CATEGORIES, ProductCategory, Subcategory } from "@/data/product-categories";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const HeaderProductDropdown: React.FC = () => {
  // Responsive
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // For keyboard nav
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Escape closes menu
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
      // Arrow navigation
      if (e.key === "ArrowDown") {
        setActiveIndex((prev) =>
          prev === null ? 0 : Math.min(PRODUCT_CATEGORIES.length - 1, prev + 1)
        );
      }
      if (e.key === "ArrowUp") {
        setActiveIndex((prev) =>
          prev === null ? PRODUCT_CATEGORIES.length - 1 : Math.max(0, prev - 1)
        );
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Close menu when clicking outside
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

  // Reset active index on open
  useEffect(() => {
    if (open) setActiveIndex(0);
    else setActiveIndex(null);
  }, [open]);

  // Handlers
  const triggerProps = isMobile
    ? {
        onClick: () => setOpen((o) => !o),
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            setOpen((o) => !o);
            e.preventDefault();
          }
        },
        tabIndex: 0,
        role: "button" as const,
        "aria-haspopup": true,
        "aria-expanded": open,
      }
    : {
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => setOpen(false),
        onFocus: () => setOpen(true),
        onBlur: () => setOpen(false),
        tabIndex: 0,
        role: "button" as const,
        "aria-haspopup": true,
        "aria-expanded": open,
      };

  // Menu content
  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseLeave={!isMobile ? () => setOpen(false) : undefined}
      onMouseEnter={!isMobile ? () => setOpen(true) : undefined}
    >
      <div
        {...triggerProps}
        className={cn(
          "flex items-center gap-1 cursor-pointer font-medium text-gray-700 hover:text-[#003b5c] py-2 px-1 transition-colors select-none focus:outline-none group relative",
          open && "text-[#003b5c]",
        )}
        aria-label="Products"
      >
        <span className="flex items-center">
          Products
          <ChevronDown
            size={18}
            className={cn(
              "ml-1 transition-transform group-data-[open=true]:rotate-180",
              open && "rotate-180"
            )}
            aria-hidden
          />
        </span>
      </div>

      {/* Desktop Mega Menu */}
      {!isMobile && open && (
        <div
          className="absolute left-1/2 top-full z-50 w-screen max-w-5xl -translate-x-1/2 bg-white border border-gray-200 shadow-2xl rounded-lg mt-3 px-8 py-8 flex flex-col"
          role="menu"
          aria-label="Product categories"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {PRODUCT_CATEGORIES.map((cat, idx) => (
              <div key={cat.slug}>
                <a
                  href={cat.slug}
                  className={cn(
                    "text-lg font-semibold text-gray-900 hover:text-[#1f5f5b] underline-offset-2 hover:underline transition-colors flex items-center mb-2 focus:text-[#003b5c]",
                    activeIndex === idx && "text-[#003b5c] underline"
                  )}
                  tabIndex={0}
                  role="menuitem"
                  aria-haspopup={cat.subcategories ? true : undefined}
                >
                  {cat.name}
                  {cat.subcategories && (
                    <ArrowRight className="w-4 h-4 ml-1 text-gray-400" aria-hidden />
                  )}
                </a>
                {cat.subcategories && (
                  <ul className="ml-2 mt-2 space-y-1">
                    {cat.subcategories.map((subcat) => (
                      <li key={subcat.slug}>
                        <a
                          href={subcat.slug}
                          className="block text-gray-700 hover:text-[#003b5c] text-sm pl-1 py-0.5 transition-colors rounded focus:bg-gray-100 focus:outline-none"
                          tabIndex={0}
                          role="menuitem"
                        >
                          {subcat.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="pt-8 flex justify-center">
            <a
              href="/products"
              className="inline-block bg-[#1f5f5b] text-white px-5 py-2 rounded-full font-medium shadow hover:bg-[#003b5c] transition-colors"
              tabIndex={0}
              role="menuitem"
            >
              View All Products
            </a>
          </div>
        </div>
      )}

      {/* Mobile Accordion Dropdown */}
      {isMobile && open && (
        <div
          className="absolute left-0 top-full z-40 w-screen max-w-[95vw] bg-white border border-gray-200 shadow-xl rounded-lg mt-2 py-4 px-3"
          role="menu"
          aria-label="Product categories"
        >
          <ul>
            {PRODUCT_CATEGORIES.map((cat) => (
              <li key={cat.slug} className="mb-3 last:mb-0">
                <div>
                  <a
                    href={cat.slug}
                    className="flex items-center w-full text-base font-semibold text-gray-900 hover:text-[#003b5c] py-2 px-2 rounded transition-colors focus:outline-none"
                    tabIndex={0}
                    role="menuitem"
                  >
                    {cat.name}
                    {cat.subcategories && (
                      <ChevronDown className="w-4 h-4 ml-2 text-gray-400" aria-hidden />
                    )}
                  </a>
                  {/* Accordion-style subcategories */}
                  {cat.subcategories && (
                    <ul className="pl-4 mt-1 space-y-1">
                      {cat.subcategories.map((subcat) => (
                        <li key={subcat.slug}>
                          <a
                            href={subcat.slug}
                            className="block text-gray-700 hover:text-[#003b5c] py-1 text-sm pl-1 rounded focus:bg-gray-100 focus:outline-none"
                            tabIndex={0}
                            role="menuitem"
                          >
                            {subcat.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="pt-6 flex justify-center">
            <a
              href="/products"
              className="inline-block bg-[#1f5f5b] text-white px-4 py-2 rounded-full font-medium shadow hover:bg-[#003b5c] transition-colors"
              tabIndex={0}
              role="menuitem"
            >
              View All Products
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderProductDropdown;
