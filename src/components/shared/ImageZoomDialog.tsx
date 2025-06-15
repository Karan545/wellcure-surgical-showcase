
import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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

  // Ensure the image dims capture latest render & natural size
  const handleImgLoad = () => {
    if (imgRef.current) {
      setImgDims({
        width: imgRef.current.width,
        height: imgRef.current.height,
        naturalWidth: imgRef.current.naturalWidth,
        naturalHeight: imgRef.current.naturalHeight,
      });
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
    setShowMagnifier(isInside);
  };

  // Touch event
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const { x, y, isInside } = getPointerCoords(touch.clientX, touch.clientY);
      setMagnifierPos({ x, y });
      setShowMagnifier(isInside);
    }
  };

  const handleLeave = () => setShowMagnifier(false);

  // Calculate magnifier
  let visibleMagnifier = false;
  let backgroundSize = "0px 0px";
  let backgroundPosition = "0px 0px";
  if (
    imgDims.naturalWidth > 0 &&
    imgDims.naturalHeight > 0 &&
    imgDims.width > 0 &&
    imgDims.height > 0 &&
    showMagnifier
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
            src={imageUrl}
            alt={alt || "Product"}
            onLoad={handleImgLoad}
            draggable={false}
            className="w-full h-full object-contain select-none"
            style={{
              maxHeight: "80vh",
              display: "block",
              margin: "0 auto",
              background: "#f7fafc",
              cursor: visibleMagnifier ? "none" : "zoom-in",
              userSelect: "none",
              // Ensures DOM has width/height
              width: "auto",
              height: "auto",
            }}
            width={imgDims.width}
            height={imgDims.height}
          />
          {visibleMagnifier && (
            <div
              style={{
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
                background: "transparent",
                backgroundImage: `url(${imageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: backgroundSize,
                backgroundPosition: backgroundPosition,
              }}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageZoomDialog;
