import { getUrologicalImagePath, createImagePath } from "@/utils/imageUtils";

const CATEGORY_PATH = "Urological-Instruments";

export const UrineCollectionBags = [
  {
    title: "Pediatric Urine Collection Bag",
    image: `/Product-images/${CATEGORY_PATH}/Urine-Collection-Bags/Pediatric-Urine-Collection-Bag.webp`,
    imageAlt: "Specially designed urine collection bags for pediatric patients",
    description: "Specially designed collection bags for pediatric patients with gentle adhesive and comfortable fit."
  },
  {
    title: "Urine Collection Bag with Measured Volume Meter",
    image: `/Product-images/${CATEGORY_PATH}/Urine-Collection-Bags/Urine-Collection-Bag-with-Measured-Volume-Meter.jpeg`,
    imageAlt: "Urine collection bag with precise volume measurement markings",
    description: "Precise volume measurement markings with clear visibility for accurate monitoring."
  },
  {
    title: "Urine Collection Bag with Top Outlet",
    image: `/Product-images/${CATEGORY_PATH}/Urine-Collection-Bags/Urine-collection-bag-with-top-outlet.jpg`,
    imageAlt: "Urine collection bag with convenient top outlet design",
    description: "Convenient top outlet design for easy drainage and handling."
  },
  {
    title: "Urine Collection Bag with T-type Bottom Outlet & Sampling Port",
    image: `/Product-images/${CATEGORY_PATH}/Urine-Collection-Bags/Urine-Collection-Bag-with-T-type-Bottom-Outlet-&-Sampling-Port.jpg`,
    imageAlt: "Advanced urine collection bag with T-type outlet and sampling port",
    description: "Advanced design with T-type outlet and dedicated sampling port for sterile collection."
  },
  {
    title: "Urine Collection Bag with Bottom Outlet",
    image: `/Product-images/${CATEGORY_PATH}/Urine-Collection-Bags/Urine-Collection-Bag-with-Bottom-Outlet.jpg`,
    imageAlt: "Standard urine collection bag with bottom outlet",
    description: "Standard bottom outlet design for efficient drainage and ease of use."
  },
  {
    title: "Urine Collection Bag with Handle and Top Outlet",
    image: `/Product-images/${CATEGORY_PATH}/Urine-Collection-Bags/urine-collection-bag-with-handle-and-top-outlet.jpg`,
    imageAlt: "Ergonomic urine collection bag with handle for improved mobility",
    description: "Ergonomic handle design with top outlet for improved mobility and handling."
  },
  {
    title: "Urine Collection Bag with NRV",
    image: `/Product-images/${CATEGORY_PATH}/Urine-Collection-Bags/Urine-Collection-Bag-with-NRV.jpg`,
    imageAlt: "Urine collection bag with non-return valve for backflow prevention",
    description: "Built-in Non-Return Valve (NRV) for preventing backflow and maintaining sterility."
  }
];

export const UrineDrainageCatheters = [
  {
    title: "Female Catheter",
    images: [`/Product-images/${CATEGORY_PATH}/Urine-Drainage-Catheters/Female-Catheter.webp`],
    imageAlt: "Specially designed catheter for female patients with gentle insertion tip",
    description: "Specially designed catheter for female patients, featuring gentle insertion tip and optimal drainage capabilities for enhanced comfort and effectiveness."
  },
  {
    title: "Rectal Catheter",
    images: [`/Product-images/${CATEGORY_PATH}/Urine-Drainage-Catheters/Rectal-Catheter.jpg`],
    imageAlt: "High-quality rectal catheter with smooth surface finish and atraumatic tip",
    description: "High-quality rectal catheter with smooth surface finish and atraumatic tip, designed for safe and comfortable bowel management procedures."
  },
  {
    title: "Nelaton Catheter",
    images: [`/Product-images/${CATEGORY_PATH}/Urine-Drainage-Catheters/Nelaton-Catheter.jpg`],
    imageAlt: "Premium straight-tip urinary catheter with multiple eyes for efficient drainage",
    description: "Premium straight-tip urinary catheter with multiple eyes for efficient drainage, made from medical-grade materials for optimal patient safety."
  },
  {
    title: "Thoracic Drainage Kit",
    images: [`/Product-images/${CATEGORY_PATH}/Urine-Drainage-Catheters/Thoracic-Drainage-Kit.webp`],
    imageAlt: "Complete thoracic drainage kit with multiple components",
    description: "Comprehensive thoracic drainage system including all necessary components for chest drainage procedures."
  },
  {
    title: "Central Venous Catheter Kit",
    images: [`/Product-images/${CATEGORY_PATH}/Urine-Drainage-Catheters/Central-Venous-Catheter-Kit.png`],
    imageAlt: "Complete central venous catheter kit with accessories",
    description: "Complete central venous catheter kit including guidewire, dilator, and all necessary accessories for safe vascular access."
  },
  {
    title: "Multi-Lumen Central Catheter",
    images: [`/Product-images/${CATEGORY_PATH}/Urine-Drainage-Catheters/Multi-Lumen-Central-Catheter.avif`],
    imageAlt: "Multi-lumen central venous catheter with color-coded lumens",
    description: "Advanced multi-lumen central venous catheter with color-coded lumens for multiple simultaneous therapies and monitoring."
  },
  {
    title: "Single Lumen Central Catheter",
    images: ["/lovable-uploads/176523b2-eda8-4a72-9c64-f236bcf09dfa.png"],
    imageAlt: "Single lumen central venous catheter for basic access",
    description: "Single lumen central venous catheter designed for basic vascular access and medication administration."
  },
  {
    title: "Hemodialysis Catheter",
    images: [
      "/lovable-uploads/cfbfe299-1ad6-49be-a600-e5b06adac871.png",
      "/lovable-uploads/9c3e46f9-554b-4a3a-a466-61e8e4ac6040.png"
    ],
    imageAlt: "Hemodialysis catheter for renal replacement therapy",
    description: "Specialized hemodialysis catheter designed for efficient blood flow during renal replacement therapy procedures."
  },
  {
    title: "Arterial Pressure Monitoring Line",
    images: ["/lovable-uploads/378b51c2-4049-4188-b7ca-655cfa531c78.png"],
    imageAlt: "Arterial pressure monitoring line with transducer connection",
    description: "Precision arterial pressure monitoring line with secure transducer connections for continuous hemodynamic monitoring."
  },
  {
    title: "Catheter Accessories Kit",
    images: ["/lovable-uploads/afac62a1-117f-4d1a-802a-4b580007da7b.png"],
    imageAlt: "Various catheter accessories and components",
    description: "Comprehensive kit of catheter accessories including connectors, clamps, and specialized components for catheter procedures."
  }
];