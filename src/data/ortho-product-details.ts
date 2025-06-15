
export interface OrthoProductDetail {
  title: string;
  description: string;
  features: string[];
  specifications: {
    headers: string[];
    rows: string[][];
  };
}

export const orthoProductDetails: Record<string, OrthoProductDetail> = {
  "Knee Support Brace": {
    title: "Knee Support Brace",
    description: "Anatomically designed compression brace offering targeted knee stabilization and support for joint recovery and injury prevention.",
    features: [
      "Adjustable straps for customized compression",
      "Open patella design for comfort and mobility",
      "Breathable, lightweight neoprene material",
      "Dual side stabilizers for lateral support"
    ],
    specifications: {
      headers: ["Feature", "Description"],
      rows: [
        ["Material", "Neoprene + Elastic Fabric"],
        ["Sizes Available", "S, M, L, XL, XXL"],
        ["Closure", "Velcro Straps"],
        ["Usage", "Ligament injuries, arthritis, sports recovery"]
      ]
    }
  },
  "Ankle Stabilizer": {
    title: "Ankle Stabilizer",
    description: "Low-profile ankle support with reinforced side splints and figure-eight strapping for injury prevention and rehabilitation.",
    features: [
      "Semi-rigid side supports",
      "Breathable mesh and elastic construction",
      "Adjustable fit for swelling or reduction",
      "Fits easily into footwear"
    ],
    specifications: {
      headers: ["Feature", "Description"],
      rows: [
        ["Design", "Wraparound, open-heel"],
        ["Sizes", "S, M, L, XL"],
        ["Use Case", "Sprains, strain recovery, instability"],
        ["Material", "Nylon blend with stabilizing ribs"]
      ]
    }
  },
  "Wrist Splint": {
    title: "Wrist Splint",
    description: "Supportive wrist brace with metal splint for immobilization and pain relief from repetitive strain or injury.",
    features: [
      "Removable aluminum splint",
      "Three adjustable straps for compression",
      "Lightweight and breathable design",
      "Ambidextrous (fits left or right wrist)"
    ],
    specifications: {
      headers: ["Feature", "Description"],
      rows: [
        ["Sizes", "S, M, L"],
        ["Closure Type", "Hook and Loop (Velcro)"],
        ["Indications", "Carpal tunnel, sprain, tendinitis"]
      ]
    }
  },
  "Cervical Collar": {
    title: "Cervical Collar",
    description: "Soft padded cervical collar for neck support and immobilization post-injury or during recovery.",
    features: [
      "High-density foam core with cotton stockinette cover",
      "Velcro closure for adjustable fit",
      "Anatomically contoured for chin support",
      "Lightweight and breathable for comfort"
    ],
    specifications: {
      headers: ["Feature", "Description"],
      rows: [
        ["Sizes", "S, M, L, XL"],
        ["Thickness", "2\" / 3\" / 4\" options"],
        ["Use Case", "Cervical pain, whiplash, sprain"]
      ]
    }
  },
  "Back Support Belt": {
    title: "Back Support Belt",
    description: "Lumbar support brace designed to provide firm support and reduce lower back stress during movement or lifting.",
    features: [
      "Dual elastic side pulls for compression",
      "Rigid posterior stays for spinal alignment",
      "Breathable mesh panels",
      "Ideal for postural correction or disc problems"
    ],
    specifications: {
      headers: ["Feature", "Description"],
      rows: [
        ["Sizes", "S, M, L, XL, XXL"],
        ["Closure Type", "Velcro Wrap"],
        ["Height", "9\" standard height"],
        ["Application", "Lumbosacral support, disc hernia, posture aid"]
      ]
    }
  }
};
