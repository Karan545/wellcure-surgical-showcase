/**
 * Utility to manage product images using local assets
 */

// Function to retrieve local product images
export const getProductImage = (imagePath: string): string => {
  return `/images/${imagePath}`;
};

// Updated local image paths for common categories
export const IMAGE_PATHS = {
  INFUSION: {
    EXTENSION_TUBES: 'infusion/extension-tubes/',
    IV_INFUSION_SETS: 'infusion/iv-infusion-sets/',
    IV_CANNULAS: 'infusion/iv-cannulas/'
  },
  BLOOD_MANAGEMENT: 'blood-management/',
  MEDICAL_GLOVES: 'medical-gloves/',
  ANAESTHESIA: 'anaesthesia/',
  GASTROENTEROLOGY: 'gastroenterology/',
  UROLOGICAL: 'urological/',
  WOUND_CARE: {
    DRESSINGS: 'wound-care/dressings/',
    CLEANSERS: 'wound-care/cleansers/',
  },
  ORTHO: {
    BRACES: 'ortho/braces/',
    SUPPORTS: 'ortho/supports/',
  }
};

// Function to generate local image paths dynamically
export const createImagePath = (category: string, filename: string): string => {
  return `/images/${category}/${filename}`;
};
