
import { getUrologicalImagePath, createImagePath } from "@/utils/imageUtils";

const CATEGORY_PATH = "urological";

export const UrineCollectionBags = [
  {
    title: "Pediatric Urine Collection Bag",
    image: "/images/urological/urnine collection bags/Paediatric-Urine-Collection-Bag.jpg",
    imageAlt: "Specially designed urine collection bags for pediatric patients",
    description: "Specially designed collection bags for pediatric patients with gentle adhesive and comfortable fit."
  },
  {
    title: "Urine Collection Bag with Measured Volume Meter",
    image: "/images/urological/urnine collection bags/Urine-collection-Bag-with-Measured-volume-chamber-1_.jpg",
    imageAlt: "Urine collection bag with precise volume measurement markings",
    description: "Precise volume measurement markings with clear visibility for accurate monitoring."
  },
  {
    title: "Urine Collection Bag with Top Outlet",
    image: "/images/urological/urnine collection bags/Urine-collection-bag-with-top-outlet1.jpg",
    imageAlt: "Urine collection bag with convenient top outlet design",
    description: "Convenient top outlet design for easy drainage and handling."
  },
  {
    title: "Urine Collection Bag with T-type Bottom Outlet & Sampling Port",
    image: "/images/urological/urnine collection bags/Urine-Collection-Bag-with-T-type-Bottom-Outlet-and-Sampling-port.jpg",
    imageAlt: "Advanced urine collection bag with T-type outlet and sampling port",
    description: "Advanced design with T-type outlet and dedicated sampling port for sterile collection."
  },
  {
    title: "Urine Collection Bag with Bottom Outlet",
    image: "/images/urological/urnine collection bags/Urine-Collection-Bag-with-Bottom-Outlet.jpg",
    imageAlt: "Standard urine collection bag with bottom outlet",
    description: "Standard bottom outlet design for efficient drainage and ease of use."
  },
  {
    title: "Urine Collection Bag with Handle and Top Outlet",
    image: "/images/urological/urnine collection bags/urine-collection-bag-with-handle-and-top-outlet3.jpg",
    imageAlt: "Ergonomic urine collection bag with handle for improved mobility",
    description: "Ergonomic handle design with top outlet for improved mobility and handling."
  },
  {
    title: "Urine Collection Bag with NRV",
    image: "/images/urological/urnine collection bags/Urine-Collection-Bag-with-NRV1_.jpg",
    imageAlt: "Urine collection bag with non-return valve for backflow prevention",
    description: "Built-in Non-Return Valve (NRV) for preventing backflow and maintaining sterility."
  }
];

export const UrineDrainageCatheters = [
  {
    title: "Female Catheter",
    image: createImagePath(CATEGORY_PATH, "catheters/female-catheter.jpg"),
    imageAlt: "Specially designed catheter for female patients with gentle insertion tip",
    description: "Specially designed catheter for female patients, featuring gentle insertion tip and optimal drainage capabilities for enhanced comfort and effectiveness."
  },
  {
    title: "Rectal Catheter",
    image: createImagePath(CATEGORY_PATH, "catheters/rectal-catheter.jpg"),
    imageAlt: "High-quality rectal catheter with smooth surface finish and atraumatic tip",
    description: "High-quality rectal catheter with smooth surface finish and atraumatic tip, designed for safe and comfortable bowel management procedures."
  },
  {
    title: "Nelaton Catheter",
    image: createImagePath(CATEGORY_PATH, "catheters/nelaton-catheter.jpg"),
    imageAlt: "Premium straight-tip urinary catheter with multiple eyes for efficient drainage",
    description: "Premium straight-tip urinary catheter with multiple eyes for efficient drainage, made from medical-grade materials for optimal patient safety."
  }
];
