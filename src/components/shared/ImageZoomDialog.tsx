
import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Use a themed placeholder (medical/surgical)
const PLACEHOLDER_IMG = "/lovable-uploads/2f2a6aa0-467b-4ee7-8846-9b432b63c699.png"; // Clean, generic, matches export theme

interface ImageZoomDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  imageUrl: string;
  alt?: string;
}

const MAGNIFIER_SIZE = 140; // px
const ZOOM_LEVEL = 2.4;

const ImageZoomDialog: React.FC<ImageZoomDialogProps> = ({
  open,
  onOpenChange,
  imageUrl,
  alt,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });
  const [imgDims, setImgDims] = useState({
    width: 0,
    height: 0,
    naturalWidth: 0,
    naturalHeight: 0,
  });
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // If original image fails, always fallback to placeholder (and only allow one retry)
  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl);

  React.useEffect(() => {
    setCurrentImageUrl(imageUrl);
    setImgError(false);
    setImgLoaded(false);
  }, [imageUrl, open]); // reset state on new popup or new image

  const handleImgLoad = () => {
    if (imgRef.current) {
      setImgDims({
        width: imgRef.current.width,
        height: imgRef.current.height,
        naturalWidth: imgRef.current.naturalWidth,
        naturalHeight: imgRef.current.naturalHeight,
      });
      setImgLoaded(true);
    }
  };

  const handleImgError = () => {
    // If already placeholder, don't infinite loop
    if (currentImageUrl === PLACEHOLDER_IMG) {
      setImgError(true);
      setImgLoaded(false);
    } else {
      // Swap to placeholder and clear error for next render
      setCurrentImageUrl(PLACEHOLDER_IMG);
      setImgError(false);
      setImgLoaded(false);
    }
  };

  // Track pointer relative to image, and clamp within bounds
  const getPointerCoords = (clientX: number, clientY: number) => {
    if (!imgRef.current) return { x: 0, y: 0, isInside: false };
    const rect = imgRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const isInside =
      x >= 0 &&
      y >= 0 &&
      x <= rect.width &&
      y <= rect.height;
    // Clamp position to stay within image
    const clampedX = Math.max(MAGNIFIER_SIZE / 2, Math.min(x, rect.width - MAGNIFIER_SIZE / 2));
    const clampedY = Math.max(MAGNIFIER_SIZE / 2, Math.min(y, rect.height - MAGNIFIER_SIZE / 2));
    return {
      x: clampedX,
      y: clampedY,
      isInside,
    };
  };

  // Mouse event: update or hide magnifier
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { x, y, isInside } = getPointerCoords(e.clientX, e.clientY);
    setMagnifierPos({ x, y });
    setShowMagnifier(
      isInside &&
        imgLoaded &&
        !imgError &&
        currentImageUrl !== PLACEHOLDER_IMG // No zoom on placeholder
    );
  };

  // Touch event
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const { x, y, isInside } = getPointerCoords(touch.clientX, touch.clientY);
      setMagnifierPos({ x, y });
      setShowMagnifier(
        isInside &&
          imgLoaded &&
          !imgError &&
          currentImageUrl !== PLACEHOLDER_IMG
      );
    }
  };

  const handleLeave = () => setShowMagnifier(false);

  // Calculate magnifier styling
  let visibleMagnifier = false;
  let backgroundSize = "0px 0px";
  let backgroundPosition = "0px 0px";
  let magnifierStyles: React.CSSProperties | undefined = undefined;

  if (
    imgDims.naturalWidth > 0 &&
    imgDims.naturalHeight > 0 &&
    imgDims.width > 0 &&
    imgDims.height > 0 &&
    showMagnifier &&
    imgLoaded &&
    !imgError &&
    currentImageUrl !== PLACEHOLDER_IMG
  ) {
    visibleMagnifier = true;
    // Ratios for scale
    const ratioX = imgDims.naturalWidth / imgDims.width;
    const ratioY = imgDims.naturalHeight / imgDims.height;
    // The pixel on high-res
    const natX = magnifierPos.x * ratioX;
    const natY = magnifierPos.y * ratioY;
    // How large the background img is scaled
    backgroundSize = `${imgDims.naturalWidth * ZOOM_LEVEL}px ${imgDims.naturalHeight * ZOOM_LEVEL}px`;
    // Center "magnified" pixel under mouse
    const bgX = natX * ZOOM_LEVEL - MAGNIFIER_SIZE / 2;
    const bgY = natY * ZOOM_LEVEL - MAGNIFIER_SIZE / 2;
    backgroundPosition = `-${bgX}px -${bgY}px`;

    magnifierStyles = {
      position: "absolute",
      pointerEvents: "none",
      left: magnifierPos.x - MAGNIFIER_SIZE / 2,
      top: magnifierPos.y - MAGNIFIER_SIZE / 2,
      width: MAGNIFIER_SIZE,
      height: MAGNIFIER_SIZE,
      borderRadius: "50%",
      border: "2.5px solid #38bdf8",
      boxShadow: "0 4px 16px 1px rgba(0,49,107,0.18)",
      overflow: "hidden",
      zIndex: 10,
      background: "#fff",
      backgroundImage: `url('${currentImageUrl}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: backgroundSize,
      backgroundPosition: backgroundPosition,
    };
  }

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
              cursor: visibleMagnifier
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
          {visibleMagnifier && magnifierStyles && (
            <div
              style={{
                ...magnifierStyles,
                backgroundColor: "#c2eaffb0", // fallback debug background
                outline: "2px dashed #2dd4bf",
              }}
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

