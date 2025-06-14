
import React from "react";
import { ProductDetailContent } from "@/data/urological-product-details";

interface ProductDetailsContentProps {
  content: ProductDetailContent;
}

const ProductDetailsContent = ({ content }: ProductDetailsContentProps) => {
  return (
    <div className="mt-6 space-y-6">
      {/* Product Name Section */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">🩺</span>
          <h3 className="text-lg font-semibold text-gray-800">Product Name:</h3>
        </div>
        <p className="text-base text-gray-700 ml-6">{content.name}</p>
      </div>

      {/* Application Section */}
      {content.application && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">🔹</span>
            <h3 className="text-lg font-semibold text-gray-800">Application:</h3>
          </div>
          
          <div className="ml-6 space-y-3">
            {content.application.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-sm text-gray-400 mt-1">•</span>
                <p className="text-base text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Characteristics Section */}
      {content.characteristics && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">🔹</span>
            <h3 className="text-lg font-semibold text-gray-800">Characteristics:</h3>
          </div>
          
          <div className="ml-6 space-y-3">
            {content.characteristics.map((characteristic, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-sm text-gray-400 mt-1">•</span>
                <p className="text-base text-gray-700">{characteristic}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Additional Features Section */}
      {content.additionalFeatures && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">🔹</span>
            <h3 className="text-lg font-semibold text-gray-800">Additional Features:</h3>
          </div>
          
          <div className="ml-6 space-y-3">
            {content.additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-sm text-gray-400 mt-1">•</span>
                <p className="text-base text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Key Features Section */}
      {content.features && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">🔹</span>
            <h3 className="text-lg font-semibold text-gray-800">Key Features:</h3>
          </div>
          
          <div className="ml-6 space-y-3">
            {content.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-sm text-gray-400 mt-1">•</span>
                <p className="text-base text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CVC Size Reference Table */}
      {content.showCVCTable && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">📊</span>
            <h3 className="text-lg font-semibold text-gray-800">Size Reference (representative ordering range):</h3>
          </div>
          
          <div className="ml-6 overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Lumens</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Fr Size</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Length (cm)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Guidewire (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">1</td>
                  <td className="border border-gray-300 px-3 py-2">4 – 6 Fr</td>
                  <td className="border border-gray-300 px-3 py-2">13 / 20</td>
                  <td className="border border-gray-300 px-3 py-2">50 / 60</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">2</td>
                  <td className="border border-gray-300 px-3 py-2">4 – 7 Fr</td>
                  <td className="border border-gray-300 px-3 py-2">16 / 20</td>
                  <td className="border border-gray-300 px-3 py-2">50 / 60</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">3</td>
                  <td className="border border-gray-300 px-3 py-2">5.5 – 7 Fr</td>
                  <td className="border border-gray-300 px-3 py-2">16 / 20</td>
                  <td className="border border-gray-300 px-3 py-2">50 / 60</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">4</td>
                  <td className="border border-gray-300 px-3 py-2">8.5 Fr</td>
                  <td className="border border-gray-300 px-3 py-2">10 / 13 / 16 / 20</td>
                  <td className="border border-gray-300 px-3 py-2">50 / 60</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Arterial Catheter Specification Table (without extension) */}
      {content.showArterialTable && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">📊</span>
            <h3 className="text-lg font-semibold text-gray-800">Specification (without extension):</h3>
          </div>
          
          <div className="ml-6 overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Gauge</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Length (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">16 GA</td>
                  <td className="border border-gray-300 px-3 py-2">16, 20</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">18 GA</td>
                  <td className="border border-gray-300 px-3 py-2">10, 20</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">20 GA</td>
                  <td className="border border-gray-300 px-3 py-2">06, 08, 10, 20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Arterial Catheter Specification Table (with extension) */}
      {content.showArterialExtensionTable && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">📊</span>
            <h3 className="text-lg font-semibold text-gray-800">Specification (with extension):</h3>
          </div>
          
          <div className="ml-6 overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Gauge</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Length (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">22 GA</td>
                  <td className="border border-gray-300 px-3 py-2">04, 06, 08, 10, 20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Kit Contents */}
      {content.kitContents && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">📦</span>
            <h3 className="text-lg font-semibold text-gray-800">Kit Contents:</h3>
          </div>
          <p className="text-base text-gray-700 ml-6">{content.kitContents}</p>
        </div>
      )}

      {/* Nelaton Catheter Size Table */}
      {content.showTable && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">📊</span>
            <h3 className="text-lg font-semibold text-gray-800">Available Sizes (Nelaton Catheter):</h3>
          </div>
          
          <div className="ml-6 overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Variant</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Length</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Size (Fr)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Connector</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Material</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Male</td>
                  <td className="border border-gray-300 px-3 py-2">400 mm</td>
                  <td className="border border-gray-300 px-3 py-2">6–24 Fr</td>
                  <td className="border border-gray-300 px-3 py-2">Funnel</td>
                  <td className="border border-gray-300 px-3 py-2">Medical-grade PVC</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Female</td>
                  <td className="border border-gray-300 px-3 py-2">180–200 mm</td>
                  <td className="border border-gray-300 px-3 py-2">6–24 Fr</td>
                  <td className="border border-gray-300 px-3 py-2">Funnel</td>
                  <td className="border border-gray-300 px-3 py-2">Medical-grade PVC</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Pediatric</td>
                  <td className="border border-gray-300 px-3 py-2">400 mm</td>
                  <td className="border border-gray-300 px-3 py-2">6–10 Fr</td>
                  <td className="border border-gray-300 px-3 py-2">Funnel</td>
                  <td className="border border-gray-300 px-3 py-2">Medical-grade PVC</td>
                </tr>
              </tbody>
            </table>
            
            <p className="text-sm text-gray-600 mt-3 italic">
              Export-ready notes: individually sterile packed, CE/ISO certified, radio‑opaque line, color‑coded connector, latex‑free
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsContent;
