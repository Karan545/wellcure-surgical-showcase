
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

// Mid zoom and slightly smaller magnifier
const MAGNIFIER_SIZE = 140; // px, circular
const ZOOM_LEVEL = 1.7; // mid-range zoom

const ImageZoomDialog: React.FC<ImageZoomDialogProps> = ({
  open,
  onOpenChange,
  imageUrl,
  alt,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });

  const [imgDims, setImgDims] = useState({
    width: 0,
    height: 0,
    naturalWidth: 0,
    naturalHeight: 0,
  });

  const handleImgLoad = () => {
    if (imgRef.current) {
      const { width, height, naturalWidth, naturalHeight } = imgRef.current;
      setImgDims({ width, height, naturalWidth, naturalHeight });
      // Debug
      // console.log("[ZoomDialog] img width,height:", width, height, "natural:", naturalWidth, naturalHeight);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!imgRef.current) return;
    const bounds = imgRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    if (x < 0 || y < 0 || x > bounds.width || y > bounds.height) {
      setShowMagnifier(false);
      return;
    }
    setMagnifierPos({ x, y });
    setShowMagnifier(true);
  };

  const handleMouseLeave = () => setShowMagnifier(false);

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
    const scaleX = imgDims.naturalWidth / imgDims.width;
    const scaleY = imgDims.naturalHeight / imgDims.height;
    backgroundSize = `${imgDims.naturalWidth * ZOOM_LEVEL}px ${imgDims.naturalHeight * ZOOM_LEVEL}px`;

    const natX = magnifierPos.x * scaleX;
    const natY = magnifierPos.y * scaleY;

    // Place the area underneath the cursor at the center of the circle
    const bgX = natX * ZOOM_LEVEL - MAGNIFIER_SIZE / 2;
    const bgY = natY * ZOOM_LEVEL - MAGNIFIER_SIZE / 2;

    backgroundPos = `-${bgX}px -${bgY}px`;
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
            className="w-full h-full object-contain select-none"
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
                boxShadow: "0 4px 16px 1px rgba(0,49,107,0.18)",
                border: "2.5px solid #38bdf8",
                overflow: "hidden",
                zIndex: 10,
                background: "transparent",
                backgroundImage: `url(${imageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: backgroundSize,
                backgroundPosition: backgroundPos,
              }}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageZoomDialog;
