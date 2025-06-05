
import { createImagePath } from "@/utils/imageUtils";

const CATEGORY_PATH = "surgery-wound-drainage";

// Surgical Drainage & Collection Systems
export const surgicalDrainageProducts = [
  {
    title: "Wound Drainage System",
    image: createImagePath(CATEGORY_PATH, "wound-drainage-system.jpg"),
    imageAlt: "Advanced closed wound drainage system for efficient fluid evacuation",
    description: "Advanced closed wound drainage system designed for efficient post-surgical fluid evacuation and infection prevention."
  },
  {
    title: "Thoracic Drainage Catheter (Angled)",
    image: createImagePath(CATEGORY_PATH, "thoracic-catheter-angled.jpg"),
    imageAlt: "Angled thoracic drainage catheter for pleural cavity management",
    description: "Angled thoracic drainage catheter designed for optimal positioning in pleural cavity drainage and pneumothorax management."
  },
  {
    title: "Thoracic Drainage Catheter (Straight)",
    image: createImagePath(CATEGORY_PATH, "thoracic-catheter-straight.jpg"),
    imageAlt: "Straight thoracic drainage catheter for direct pleural access",
    description: "Straight thoracic drainage catheter providing direct access for pleural fluid evacuation and chest tube drainage procedures."
  },
  {
    title: "Thoracic Drainage System",
    image: createImagePath(CATEGORY_PATH, "thoracic-drainage-system.jpg"),
    imageAlt: "Specialized thoracic drainage system with three-chamber design",
    description: "Specialized three-chamber thoracic drainage system for managing air leaks and fluid collection from the pleural cavity."
  },
  {
    title: "Surgical Drain",
    image: createImagePath(CATEGORY_PATH, "surgical-drain.jpg"),
    imageAlt: "Flexible surgical drain with multiple perforations",
    description: "Flexible surgical drain with multiple perforations for effective fluid evacuation from surgical sites."
  }
];

// Surgical Suction Instruments
export const surgicalSuctionProducts = [
  {
    title: "Surgical Suction Set",
    image: createImagePath(CATEGORY_PATH, "surgical-suction-set.jpg"),
    imageAlt: "High-quality surgical suction set for operating room procedures",
    description: "High-quality surgical suction set providing reliable vacuum pressure for various operating room procedures."
  },
  {
    title: "Yankauer Suction Set",
    image: createImagePath(CATEGORY_PATH, "yankauer-suction-set.jpg"),
    imageAlt: "Yankauer suction set for oropharyngeal suctioning during surgery",
    description: "Yankauer suction set designed for oropharyngeal suctioning during surgery, ensuring clear airways and optimal surgical visibility."
  }
];

// Surgical Retraction & Isolation Tools
export const surgicalRetractionProducts = [
  {
    title: "Vessel Loops",
    image: createImagePath(CATEGORY_PATH, "vessel-loops.jpg"),
    imageAlt: "Soft silicone vessel loops for vascular isolation during surgery",
    description: "Soft silicone vessel loops used in vascular and cardiac surgery to isolate and retract vessels during surgical procedures with precision and safety."
  }
];
