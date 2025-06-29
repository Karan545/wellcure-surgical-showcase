import { createImagePath } from "@/utils/imageUtils";

const CATEGORY_PATH = "Surgery-&-Wound-Drainage";

// Surgical Drainage & Collection Systems
export const surgicalDrainageProducts = [
  {
    title: "Wound Drainage System",
    image: `/Product-images/${CATEGORY_PATH}/Drainage-&-Collection-Systems/Wound-Drainage-System.jpg`,
    imageAlt: "Advanced closed wound drainage system for efficient fluid evacuation",
    description: "Advanced closed wound drainage system designed for efficient post-surgical fluid evacuation and infection prevention."
  }
];

// Surgical Suction Instruments
export const surgicalSuctionProducts = [
  {
    title: "Surgical Suction Set",
    image: `/Product-images/${CATEGORY_PATH}/Surgical-Suction-Instruments/Surgical-Suction-Set.jpg`,
    imageAlt: "High-quality surgical suction set for operating room procedures",
    description: "High-quality surgical suction set providing reliable vacuum pressure for various operating room procedures."
  },
  {
    title: "Yankauer Suction Set",
    image: `/Product-images/${CATEGORY_PATH}/Surgical-Suction-Instruments/Yankauer-Suction-Set.png`,
    imageAlt: "Yankauer suction set for oropharyngeal suctioning during surgery",
    description: "Yankauer suction set designed for oropharyngeal suctioning during surgery, ensuring clear airways and optimal surgical visibility."
  }
];

// Surgical Retraction & Isolation Tools
export const surgicalRetractionProducts = [
  {
    title: "Vessel Loops",
    image: `/Product-images/${CATEGORY_PATH}/Retraction-&-Isolation-Tools/Vessel-Loops.png`,
    imageAlt: "Soft silicone vessel loops for vascular isolation during surgery",
    description: "Soft silicone vessel loops used in vascular and cardiac surgery to isolate and retract vessels during surgical procedures with precision and safety."
  }
];