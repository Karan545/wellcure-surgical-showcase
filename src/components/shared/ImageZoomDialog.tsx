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

// Settings for magnifier
const MAGNIFIER_SIZE = 140; // px
const ZOOM_LEVEL = 2.2; // higher = more zoom

const ImageZoomDialog: React.FC<ImageZoomDialogProps> = ({
  open,
  onOpenChange,
  imageUrl,
  alt,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [showMagnifier, setShowMagnifier] = useState(false);
  // Magnifier center position RELATIVE TO IMAGE box
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });
  const [imgDims, setImgDims] = useState({
    width: 0,
    height: 0,
    naturalWidth: 0,
    naturalHeight: 0,
  });

  // On image load, record display and natural sizes
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

  // Mouse/touch movement: update magnifier position
  const handleMove = (
    clientX: number,
    clientY: number
  ) => {
    if (!imgRef.current || !containerRef.current) return;
    const bounds = imgRef.current.getBoundingClientRect();

    // Position inside image
    const x = clientX - bounds.left;
    const y = clientY - bounds.top;

    // Ensure it is INSIDE the image display area
    if (
      x < 0 ||
      y < 0 ||
      x > bounds.width ||
      y > bounds.height
    ) {
      setShowMagnifier(false);
      return;
    }

    setMagnifierPos({ x, y });
    setShowMagnifier(true);
  };

  // Mouse event: trigger handleMove
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handleMove(e.clientX, e.clientY);
  };

  // Touch event support (for touchscreens)
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      handleMove(touch.clientX, touch.clientY);
    }
  };

  // Hide magnifier on leave
  const handleLeave = () => setShowMagnifier(false);

  // Only show if image is loaded and mouse is over img
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
    // The ratio between display size and natural size
    const ratioX = imgDims.naturalWidth / imgDims.width;
    const ratioY = imgDims.naturalHeight / imgDims.height;

    // Which pixel (on NATURAL image) are we hovering over?
    const natX = magnifierPos.x * ratioX;
    const natY = magnifierPos.y * ratioY;

    // Set zoomed background size
    backgroundSize = `${imgDims.naturalWidth * ZOOM_LEVEL}px ${imgDims.naturalHeight * ZOOM_LEVEL}px`;

    // Compute the offset so the hovered pixel is at the center of the magnifier
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
              cursor: showMagnifier ? "none" : "zoom-in",
              userSelect: "none",
            }}
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
                // visually fit in the medical theme
              }}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageZoomDialog;
