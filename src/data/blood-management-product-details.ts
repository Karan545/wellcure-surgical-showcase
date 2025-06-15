
export const bloodManagementProductDetails: Record<
  string,
  {
    title: string;
    description: string;
    features?: string[];
    usage?: string;
    specifications?: {
      headers: string[];
      rows: string[][];
    };
    sterilization?: string;
    image?: string;
    imageAlt?: string;
  }
> = {
  "Blood Administration Set without Air Vent": {
    title: "Blood Administration Set without Air Vent",
    description:
      "A sterile, single-use blood transfusion set for safe and efficient delivery of blood and blood components.",
    features: [
      "Transparent drip chamber with 200 micron filter",
      "21G vein needle",
      "Standard tubing length: 150 cm",
      "Roller clamp for precise flow control",
      "Latex-free, DEHP-free options available"
    ],
    usage:
      "Ideal for hospitals, blood transfusion centers, and emergency kits.",
    specifications: {
      headers: [
        "Component",
        "Specification"
      ],
      rows: [
        ["Filter Size", "200 Micron"],
        ["Tubing Length", "150 cm"],
        ["Drip Chamber Volume", "20 ml"],
        ["Vein Needle", "21G"],
        ["Sterilization", "EO Gas"],
        ["Latex-Free", "Yes"],
        ["DEHP-Free Option", "Available"]
      ]
    },
    sterilization: "EO Gas"
  },
  "Blood Administration Set with Air Vent": {
    title: "Blood Administration Set with Air Vent",
    description:
      "A sterile blood transfusion set with an air vent for safe and efficient delivery from rigid bottles.",
    features: [
      "Vented spike for rigid container compatibility",
      "200 micron blood filter",
      "21G vein needle",
      "Flexible, transparent PVC tubing",
      "Closed system to minimize contamination risk"
    ],
    usage:
      "Ideal for transfusions requiring air venting from rigid bottles.",
    specifications: {
      headers: [
        "Component",
        "Specification"
      ],
      rows: [
        ["Filter Size", "200 Micron"],
        ["Tubing Length", "150 cm"],
        ["Air Vent", "Integrated with spike"],
        ["Drip Chamber Volume", "20 ml"],
        ["Sterilization", "EO Gas"],
        ["Latex-Free", "Yes"],
        ["DEHP-Free Option", "Available"]
      ]
    },
    sterilization: "EO Gas"
  }
};
