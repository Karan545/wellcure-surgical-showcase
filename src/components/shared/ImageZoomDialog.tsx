
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
      setImgDims({
        width: imgRef.current.width,
        height: imgRef.current.height,
        naturalWidth: imgRef.current.naturalWidth,
        naturalHeight: imgRef.current.naturalHeight,
      });
    }
  };

  // Mouse movement logic for magnifier
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!imgRef.current) return;
    const bounds = imgRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    // Only show inside image area
    if (x < 0 || y < 0 || x > bounds.width || y > bounds.height) {
      setShowMagnifier(false);
      return;
    }

    setMagnifierPos({ x, y });
    setShowMagnifier(true);
  };

  const handleMouseLeave = () => setShowMagnifier(false);

  // Zoom calculations
  // We want magnifier to show zoomed pixel under mouse
  let backgroundSize = "0px 0px";
  let backgroundPos = "0px 0px";
  if (
    imgDims.naturalWidth &&
    imgDims.naturalHeight &&
    imgDims.width &&
    imgDims.height &&
    showMagnifier
  ) {
    const scaleX = imgDims.naturalWidth / imgDims.width;
    const scaleY = imgDims.naturalHeight / imgDims.height;

    backgroundSize = `${imgDims.naturalWidth * ZOOM_LEVEL}px ${imgDims.naturalHeight * ZOOM_LEVEL}px`;

    // The cursor's position on scaled image:
    const bgX =
      magnifierPos.x * scaleX * ZOOM_LEVEL - MAGNIFIER_SIZE / 2;
    const bgY =
      magnifierPos.y * scaleY * ZOOM_LEVEL - MAGNIFIER_SIZE / 2;

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
            className="w-full h-full object-contain"
            style={{
              maxHeight: "80vh",
              display: "block",
              margin: "0 auto",
              background: "#f7fafc",
              cursor: showMagnifier ? "none" : "zoom-in",
            }}
            draggable={false}
          />
          {showMagnifier && imgDims.naturalWidth > 0 && (
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
                background: "#fff",
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
