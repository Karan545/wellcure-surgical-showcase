import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { createImagePath } from "@/utils/imageUtils";
import ImageZoomDialog from "@/components/shared/ImageZoomDialog";

const CATEGORY_PATH = "medical-gloves";

const products = [
  {
    title: "Latex Sterile Examination Gloves Powdered",
    shortDescription: "Sterile, single-use latex gloves pre-powdered with USP-grade absorbable powder for smooth donning.",
    detailDescription: "Our Latex Sterile Examination Gloves Powdered are manufactured from high-quality natural rubber latex, EO sterilized, and pre-powdered with USP-absorbable powder to ensure effortless donning and removal. These gloves are ambidextrous, smooth in texture for gentle touch, and ideal for wound care, sterile tasks, and various clinical procedures. Each pair is individually packaged for guaranteed sterility. Available in multiple sizes for a secure fit, they offer outstanding performance for healthcare professionals.",
    image: createImagePath(CATEGORY_PATH, "latex-exam-gloves-powdered.jpg"),
    imageAlt: "Sterile powdered latex examination gloves displayed on a gloved hand",
    specifications: [
      ["Material", "Natural Rubber Latex"],
      ["Sterility", "EO Sterilized"],
      ["Powder Content", "Absorbable USP Powder"],
      ["Texture", "Smooth"],
      ["Fit", "Ambidextrous"],
      ["Packaging", "1 pair/pouch, 50/100 pouches/box"],
      ["Sizes Available", "S, M, L, XL"],
    ],
  },
  {
    title: "Latex Sterile Examination Gloves Powder Free",
    shortDescription: "Sterile examination gloves without powder to minimize allergen risk while retaining excellent tactile sensitivity.",
    detailDescription: "Latex Sterile Examination Gloves Powder Free are designed for professionals with sensitive skin or in powder-sensitive environments. Manufactured from premium natural rubber latex and EO sterilized, these gloves have a micro-roughened texture for enhanced grip and tactile sensitivity. Ambidextrous fit and individually packaged for excellent sterility and hygiene. Powder-free design reduces allergen risk, making them perfect for diagnostic use and sterile environments.",
    image: createImagePath(CATEGORY_PATH, "latex-exam-gloves-powder-free.jpg"),
    imageAlt: "Powder-free sterile latex examination gloves on blue background",
    specifications: [
      ["Material", "Natural Rubber Latex"],
      ["Sterility", "EO Sterilized"],
      ["Powder", "Powder-Free"],
      ["Texture", "Micro-Roughened for grip"],
      ["Fit", "Ambidextrous"],
      ["Packaging", "1 pair/pouch, 50/100 pouches/box"],
      ["Sizes Available", "S, M, L, XL"],
    ],
  },
  {
    title: "Latex Sterile Powdered Surgical Gloves",
    shortDescription: "Anatomically shaped sterile surgical gloves with pre-powdered lining for ease of use during extended procedures.",
    detailDescription: "These Latex Sterile Powdered Surgical Gloves are anatomically designed for left and right hands, offering superior comfort during lengthy procedures. Crafted from natural rubber latex, EO sterilized, and lightly pre-powdered with USP-grade material to assist rapid donning and removal. Features a beaded cuff for added strength and a micro-roughened surface for surgical precision. Available from size 6.0 to 9.0 (half sizes included), they are the trusted choice for surgical teams.",
    image: createImagePath(CATEGORY_PATH, "latex-surgical-gloves-powdered.jpg"),
    imageAlt: "Latex powdered surgical gloves on sterile tray",
    specifications: [
      ["Material", "Natural Rubber Latex"],
      ["Sterility", "EO Sterilized"],
      ["Powder", "Absorbable USP Powder"],
      ["Design", "Left & Right hand-specific"],
      ["Texture", "Micro-Roughened"],
      ["Cuff", "Beaded"],
      ["Sizes Available", "6.0 – 9.0 (Half sizes included)"],
    ],
  },
  {
    title: "Latex Sterile Surgical Gloves Powder Free",
    shortDescription: "Powder-free variant with superior tactile control and anatomical fit. Reduced risk of skin irritation or allergic reactions.",
    detailDescription: "Our Latex Sterile Surgical Gloves Powder Free combine expert anatomical design with a powder-free finish to lower the chances of skin irritation and allergies. Manufactured from selected natural rubber latex, EO sterilized, and featuring a micro-roughened surface for enhanced grip in critical conditions. The beaded cuff ensures durability, while half size increments from 6.0 to 9.0 allow for a near-custom fit. Perfect for prolonged procedures and sensitive users.",
    image: createImagePath(CATEGORY_PATH, "latex-surgical-gloves-powder-free.jpg"),
    imageAlt: "Powder-free latex surgical gloves laid out for operating room use",
    specifications: [
      ["Material", "Natural Rubber Latex"],
      ["Sterility", "EO Sterilized"],
      ["Powder", "Powder-Free"],
      ["Design", "Left & Right hand-specific"],
      ["Texture", "Micro-Roughened"],
      ["Cuff", "Beaded"],
      ["Sizes Available", "6.0 – 9.0 (Half sizes included)"],
    ],
  },
];

const ProductDisplay: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [zoomImageIdx, setZoomImageIdx] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedProduct(index);
  const closeModal = () => setSelectedProduct(null);

  const activeProduct = selectedProduct !== null ? products[selectedProduct] : null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, i) => (
          <div
            key={product.title}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
          >
            <div
              className="aspect-w-16 aspect-h-12 cursor-zoom-in"
              onClick={() => setZoomImageIdx(i)}
              tabIndex={0}
              role="button"
              aria-label={`Zoom ${product.title} image`}
            >
              <img
                src={product.image}
                alt={product.imageAlt}
                className="w-full h-48 object-cover transition-transform duration-150 hover:scale-105"
                loading="lazy"
                style={{ cursor: "zoom-in" }}
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{product.shortDescription}</p>
              <Button
                className="w-full font-semibold bg-[#6c63ff] text-white hover:bg-[#5147b2] transition-all"
                aria-label={`Get details about ${product.title}`}
                onClick={() => openModal(i)}
              >
                Get Details
              </Button>
            </div>
          </div>
        ))}
      </div>
      <ImageZoomDialog
        open={zoomImageIdx !== null}
        onOpenChange={() => setZoomImageIdx(null)}
        imageUrl={zoomImageIdx === null ? "" : products[zoomImageIdx].image}
        alt={zoomImageIdx === null ? "" : products[zoomImageIdx].imageAlt}
      />
      <Dialog open={selectedProduct !== null} onOpenChange={closeModal}>
        <DialogContent
          aria-describedby="modal-product-desc"
          className="max-w-[700px] w-full max-h-[85vh] overflow-y-auto p-0 bg-white rounded-xl"
        >
          {activeProduct && (
            <>
              <DialogHeader className="sticky top-0 z-10 bg-white p-6 border-b">
                <DialogTitle className="text-2xl font-bold text-gray-800">
                  {activeProduct.title}
                </DialogTitle>
                <DialogDescription asChild>
                  <span id="modal-product-desc" className="sr-only">
                    {activeProduct.shortDescription}
                  </span>
                </DialogDescription>
              </DialogHeader>
              <div className="p-6 space-y-6">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.imageAlt}
                  className="w-full object-contain max-h-60 mb-4 rounded-md border"
                />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#003b5c]">Description</h3>
                  <p className="text-base text-gray-700">{activeProduct.detailDescription}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#003b5c]">Specifications</h3>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Specification</TableHead>
                          <TableHead>Details</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {activeProduct.specifications.map(([key, val], idx) => (
                          <TableRow key={idx}>
                            <TableCell>{key}</TableCell>
                            <TableCell>{val}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductDisplay;
