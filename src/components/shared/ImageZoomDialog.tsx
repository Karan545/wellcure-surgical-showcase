
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

const MAGNIFIER_SIZE = 180; // px, mid-size circle
const ZOOM_LEVEL = 2.4; // deep zoom

const ImageZoomDialog: React.FC<ImageZoomDialogProps> = ({
  open,
  onOpenChange,
  imageUrl,
  alt,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });

  // Get image size and natural size for zoom calculation
  const [imgDims, setImgDims] = useState({
    width: 0,
    height: 0,
    naturalWidth: 0,
    naturalHeight: 0,
  });

  // When image loads, update image dimensions
  const handleImgLoad = () => {
    if (imgRef.current) {
      const { width, height, naturalWidth, naturalHeight } = imgRef.current;
      // Log image size for debugging
      console.log("[ZoomDialog] img width,height:", width, height, "natural:", naturalWidth, naturalHeight);
      setImgDims({ width, height, naturalWidth, naturalHeight });
    }
  };

  // Mouse movement logic for magnifier
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!imgRef.current) return;
    const bounds = imgRef.current.getBoundingClientRect();
    // Mouse position relative to image
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    // Only show inside image area
    if (x < 0 || y < 0 || x > bounds.width || y > bounds.height) {
      setShowMagnifier(false);
      return;
    }
    // Log position for debugging
    // console.log("[ZoomDialog] Mouse in image - x:", x, "y:", y);
    setMagnifierPos({ x, y });
    setShowMagnifier(true);
  };

  const handleMouseLeave = () => setShowMagnifier(false);

  // Magnifier calculations
  let backgroundSize = "0px 0px";
  let backgroundPos = "0px 0px";
  let visibleMagnifier = false;

  if (
    imgDims.naturalWidth &&
    imgDims.naturalHeight &&
    imgDims.width &&
    imgDims.height &&
    showMagnifier
  ) {
    visibleMagnifier = true;
    // Calculate scale for X and Y
    const scaleX = imgDims.naturalWidth / imgDims.width;
    const scaleY = imgDims.naturalHeight / imgDims.height;
    backgroundSize = `${imgDims.naturalWidth * ZOOM_LEVEL}px ${imgDims.naturalHeight * ZOOM_LEVEL}px`;

    // Calculate where the mouse is on the NATURAL image
    const natX = magnifierPos.x * scaleX;
    const natY = magnifierPos.y * scaleY;

    // The background should shift so the cursor shows the pixel under it in the CENTER of the magnifier
    // So, move the background image, scaled up, so that the magnifierPos on the dialog aligns at its center

    // The shifted point on the scaled image
    const bgX = natX * ZOOM_LEVEL - MAGNIFIER_SIZE / 2;
    const bgY = natY * ZOOM_LEVEL - MAGNIFIER_SIZE / 2;

    backgroundPos = `-${bgX}px -${bgY}px`;

    // Debug logs
    // Remove this in production
    // eslint-disable-next-line
    console.log({
      scaleX,
      scaleY,
      backgroundSize,
      natX,
      natY,
      bgX,
      bgY,
      "magnifierPos.x": magnifierPos.x,
      "magnifierPos.y": magnifierPos.y,
      MAGNIFIER_SIZE,
      ZOOM_LEVEL,
    });
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
          className="relative w-full h-full group flex justify-center items-center"
          style={{ minHeight: 360 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            ref={imgRef}
            src={imageUrl}
            alt={alt || "Product"}
            onLoad={handleImgLoad}
            className="w-full h-full object-contain"
            style={{
              maxHeight: "80vh",
              display: "block",
              margin: "0 auto",
              background: "#f7fafc",
              cursor: showMagnifier ? "none" : "zoom-in",
              userSelect: "none",
            }}
            draggable={false}
          />
          {visibleMagnifier && imgDims.naturalWidth > 0 && (
            <div
              style={{
                pointerEvents: "none",
                position: "absolute",
                left: magnifierPos.x - MAGNIFIER_SIZE / 2,
                top: magnifierPos.y - MAGNIFIER_SIZE / 2,
                width: MAGNIFIER_SIZE,
                height: MAGNIFIER_SIZE,
                borderRadius: "50%",
                boxShadow: "0 0 9px 2px rgba(0,0,0,0.19)",
                border: "2.5px solid #d1fae5",
                overflow: "hidden",
                zIndex: 10,
                background: "#fff", // fallback color if image fails
                backgroundImage: `url(${imageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: backgroundSize,
                backgroundPosition: backgroundPos,
                // For debugging, outline the magnifier
                // outline: "1px solid red"
              }}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageZoomDialog;
