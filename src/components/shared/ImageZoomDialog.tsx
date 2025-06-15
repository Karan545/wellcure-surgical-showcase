
// Refactored: dialog is now a clean shell with custom logic and extract hooks/components for the zoom/magnifier
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Magnifier from "./Magnifier";
import { useImageZoom } from "./useImageZoom";

// Use a themed placeholder (medical/surgical)
const PLACEHOLDER_IMG = "/lovable-uploads/2f2a6aa0-467b-4ee7-8846-9b432b63c699.png"; // Clean, generic, matches export theme

interface ImageZoomDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  imageUrl: string;
  alt?: string;
}

const ImageZoomDialog: React.FC<ImageZoomDialogProps> = ({
  open,
  onOpenChange,
  imageUrl,
  alt,
}) => {
  const {
    imgRef,
    containerRef,
    showMagnifier,
    magnifierPos,
    imgDims,
    imgLoaded,
    imgError,
    currentImageUrl,
    setCurrentImageUrl,
    setImgError,
    setImgLoaded,
    handleImgLoad,
    handleImgError,
    handleMouseMove,
    handleTouchMove,
    handleLeave,
  } = useImageZoom({
    open,
    imageUrl,
    placeholder: PLACEHOLDER_IMG,
  });

  // Only show magnifier if fully valid and on real image
  const isMagnifierVisible =
    showMagnifier &&
    imgDims.naturalWidth > 0 &&
    imgDims.naturalHeight > 0 &&
    imgDims.width > 0 &&
    imgDims.height > 0 &&
    imgLoaded &&
    !imgError &&
    currentImageUrl !== PLACEHOLDER_IMG;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[600px] w-full p-0 overflow-hidden bg-white"
        style={{ width: "100%", maxWidth: 600 }}
      >
        <DialogTitle className="sr-only">{alt || "Zoomed Image"}</DialogTitle>
        <DialogDescription className="sr-only">
          Zoomed view of product for detail inspection.
        </DialogDescription>
        <div
          ref={containerRef}
          className="relative w-full h-full group flex justify-center items-center"
          style={{ minHeight: 360 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleLeave}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleLeave}
        >
          <img
            ref={imgRef}
            src={currentImageUrl}
            alt={alt || "Product"}
            onLoad={handleImgLoad}
            onError={handleImgError}
            draggable={false}
            className={`w-full h-full object-contain select-none ${currentImageUrl === PLACEHOLDER_IMG ? "bg-gray-50 grayscale" : "bg-gray-50"}`}
            style={{
              maxHeight: "80vh",
              display: "block",
              margin: "0 auto",
              cursor: isMagnifierVisible
                ? "none"
                : currentImageUrl === PLACEHOLDER_IMG
                ? "not-allowed"
                : "zoom-in",
              userSelect: "none",
              width: "auto",
              height: "auto",
              opacity: imgError && currentImageUrl !== PLACEHOLDER_IMG ? 0.6 : 1,
            }}
            width={imgDims.width}
            height={imgDims.height}
          />
          {/* Subtle error info if both primary and fallback fail */}
          {imgError && currentImageUrl === PLACEHOLDER_IMG && (
            <div
              className="absolute top-1/2 left-1/2 text-red-600 text-center p-6 bg-white/90 border border-red-300 rounded shadow"
              style={{ transform: "translate(-50%, -50%)", zIndex: 20 }}
            >
              <strong>Image failed to load. Please try again later.</strong>
              <div className="text-xs mt-1">{imageUrl}</div>
            </div>
          )}
          {isMagnifierVisible && (
            <Magnifier
              imageUrl={currentImageUrl}
              position={magnifierPos}
              naturalWidth={imgDims.naturalWidth}
              naturalHeight={imgDims.naturalHeight}
              displayWidth={imgDims.width}
              displayHeight={imgDims.height}
            />
          )}
          {/* Show label when placeholder is displayed */}
          {currentImageUrl === PLACEHOLDER_IMG && (
            <div className="absolute bottom-4 left-1/2 px-5 py-1 bg-blue-50 border border-blue-200 text-blue-900 rounded shadow-md text-xs" style={{ transform: "translateX(-50%)", zIndex: 22 }}>
              Image unavailable – showing sample
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageZoomDialog;
