
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getProductImage } from "@/utils/imageUtils";
import ImageZoomDialog from "./ImageZoomDialog";

interface ProductImageSliderProps {
  images: string[];
  title: string;
  imageAlt?: string;
  className?: string;
}

const ProductImageSlider = ({ images, title, imageAlt, className = "" }: ProductImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageClick = () => {
    setIsZoomOpen(true);
  };

  // If only one image, render simple image without slider controls
  if (images.length === 1) {
    return (
      <>
        <div
          className={`relative h-48 overflow-hidden cursor-zoom-in ${className}`}
          onClick={handleImageClick}
          tabIndex={0}
          role="button"
          aria-label={`Zoom ${title} image`}
        >
          <img
            src={getProductImage(images[0])}
            alt={imageAlt || title}
            className="w-full h-full object-cover transition-transform duration-150 hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
            style={{ cursor: "zoom-in" }}
          />
        </div>
        <ImageZoomDialog
          open={isZoomOpen}
          onOpenChange={setIsZoomOpen}
          imageUrl={getProductImage(images[0])}
          alt={imageAlt || title}
        />
      </>
    );
  }

  return (
    <>
      <div
        className={`relative h-48 overflow-hidden cursor-zoom-in group ${className}`}
        onClick={handleImageClick}
        tabIndex={0}
        role="button"
        aria-label={`Zoom ${title} image`}
      >
        <img
          src={getProductImage(images[currentIndex])}
          alt={`${imageAlt || title} - Image ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-150 hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg";
          }}
          style={{ cursor: "zoom-in" }}
        />
        
        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md"
              onClick={prevImage}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md"
              onClick={nextImage}
              disabled={currentIndex === images.length - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
        
        {/* Image Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex 
                    ? "bg-white" 
                    : "bg-white/50 hover:bg-white/75"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      
      <ImageZoomDialog
        open={isZoomOpen}
        onOpenChange={setIsZoomOpen}
        imageUrl={getProductImage(images[currentIndex])}
        alt={`${imageAlt || title} - Image ${currentIndex + 1}`}
      />
    </>
  );
};

export default ProductImageSlider;
