
/**
 * Utility to help manage product images and make future migration to local images easier
 */

// This function will help transition to local images in the future
export const getProductImage = (imagePath: string): string => {
  // In the future, this could be changed to:
  // return `/images/products/${imagePath}`
  
  // For now, return the placeholder URL
  return imagePath;
};

// Sample local image paths for common categories (use these as a reference later)
export const IMAGE_PATHS = {
  INFUSION: {
    EXTENSION_TUBES: 'extension-tubes/',
    IV_INFUSION_SETS: 'iv-infusion-sets/',
    IV_CANNULAS: 'iv-cannulas/'
  },
  BLOOD_MANAGEMENT: 'blood-management/',
  MEDICAL_GLOVES: 'medical-gloves/',
  ANAESTHESIA: 'anaesthesia/',
  GASTROENTEROLOGY: 'gastroenterology/',
  UROLOGICAL: 'urological/',
  WOUND_CARE: 'wound-care/'
};
