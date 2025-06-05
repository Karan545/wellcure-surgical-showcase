
import { createImagePath } from "@/utils/imageUtils";

const CATEGORY_PATH = "urological";

// Central Venous Access Devices
export const CentralVenousDevices = [
  {
    title: "CVC Kit (Single Lumen)",
    image: createImagePath(CATEGORY_PATH, "central-venous/cvc-single-lumen.jpg"),
    imageAlt: "Single lumen central venous catheter kit for critical care access",
    description: "Single lumen central venous catheter kit designed for critical care vascular access with sterile insertion components and guidewire."
  },
  {
    title: "CVC Kit (Double Lumen)",
    image: createImagePath(CATEGORY_PATH, "central-venous/cvc-double-lumen.jpg"),
    imageAlt: "Double lumen central venous catheter kit for multiple access needs",
    description: "Double lumen central venous catheter kit providing simultaneous access for medication administration and blood sampling in ICU settings."
  },
  {
    title: "CVC Kit (Triple Lumen)",
    image: createImagePath(CATEGORY_PATH, "central-venous/cvc-triple-lumen.jpg"),
    imageAlt: "Triple lumen central venous catheter kit for complex critical care",
    description: "Triple lumen central venous catheter kit for complex critical care scenarios requiring multiple simultaneous infusions and monitoring."
  },
  {
    title: "CVC Kit (Four Lumen)",
    image: createImagePath(CATEGORY_PATH, "central-venous/cvc-four-lumen.jpg"),
    imageAlt: "Four lumen central venous catheter kit for advanced critical care",
    description: "Four lumen central venous catheter kit designed for advanced critical care requiring maximum vascular access capabilities."
  },
  {
    title: "Arterial Catheter Kit",
    image: createImagePath(CATEGORY_PATH, "central-venous/arterial-catheter-kit.jpg"),
    imageAlt: "Arterial catheter kit for blood pressure monitoring and sampling",
    description: "Arterial catheter kit for continuous blood pressure monitoring and arterial blood gas sampling in critical care environments."
  },
  {
    title: "Arterial Catheter Kit with Extension",
    image: createImagePath(CATEGORY_PATH, "central-venous/arterial-catheter-extension.jpg"),
    imageAlt: "Extended arterial catheter kit for enhanced monitoring flexibility",
    description: "Arterial catheter kit with extension line providing enhanced flexibility for patient positioning and monitoring equipment placement."
  }
];

// Dialysis Catheters
export const DialysisCatheters = [
  {
    title: "Hemodialysis Catheter (Single Lumen)",
    image: createImagePath(CATEGORY_PATH, "dialysis/hemodialysis-single.jpg"),
    imageAlt: "Single lumen hemodialysis catheter for renal replacement therapy",
    description: "Single lumen hemodialysis catheter designed for temporary vascular access in renal replacement therapy and critical care dialysis."
  },
  {
    title: "Hemodialysis Catheter (Double Lumen)",
    image: createImagePath(CATEGORY_PATH, "dialysis/hemodialysis-double.jpg"),
    imageAlt: "Double lumen hemodialysis catheter for efficient dialysis treatment",
    description: "Double lumen hemodialysis catheter providing efficient blood flow for dialysis treatment with separate arterial and venous access."
  },
  {
    title: "Hemodialysis Catheter (Triple Lumen)",
    image: createImagePath(CATEGORY_PATH, "dialysis/hemodialysis-triple.jpg"),
    imageAlt: "Triple lumen hemodialysis catheter for complex dialysis needs",
    description: "Triple lumen hemodialysis catheter for complex dialysis scenarios requiring additional access for medication or monitoring."
  },
  {
    title: "Long Term Hemodialysis Catheter",
    image: createImagePath(CATEGORY_PATH, "dialysis/long-term-hemodialysis.jpg"),
    imageAlt: "Long-term hemodialysis catheter for chronic dialysis patients",
    description: "Long-term hemodialysis catheter designed for chronic dialysis patients requiring extended vascular access with tunneled placement."
  }
];
