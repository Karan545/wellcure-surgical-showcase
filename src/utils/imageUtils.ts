/**
 * Utility to manage product images using local assets
 */

// Function to retrieve local product images
export const getProductImage = (imagePath: string): string => {
  // If the path already includes 'images/', we assume it's a full path
  if (imagePath.startsWith('images/')) {
    return `/${imagePath}`;
  }
  
  // If path starts with public/, remove it as it's not needed in the URL
  if (imagePath.startsWith('public/')) {
    return `/${imagePath.substring(7)}`;
  }
  
  // Otherwise, just prepend with slash for root-relative path
  return `/${imagePath}`;
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
  UROLOGICAL: {
    URINE_BAGS: 'urological/urnine collection bags/',
    CATHETERS: 'urological/catheters/'
  },
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
  return `images/${category}/${filename}`;
};

// Function to get the path for urological product images
export const getUrologicalImagePath = (productType: 'urine-bags' | 'catheters', filename: string): string => {
  const basePath = productType === 'urine-bags' 
    ? 'images/urological/urnine collection bags/' 
    : 'images/urological/catheters/';
  
  return basePath + filename;
};
