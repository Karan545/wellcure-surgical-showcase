
import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
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

  // Manage mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!imgRef.current) return;
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();

    // Mouse position relative to image
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Boundaries: only show inside image
    if (
      x < 0 ||
      y < 0 ||
      x > width ||
      y > height
    ) {
      setShowMagnifier(false);
      return;
    }

    setMagnifierPos({ x, y });
    setShowMagnifier(true);
  };

  const handleMouseLeave = () => setShowMagnifier(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[600px] w-full p-0 overflow-hidden bg-white"
        style={{ width: "100%", maxWidth: 600 }}
      >
        <div
          className="relative w-full h-full group"
          style={{ minHeight: 360 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            ref={imgRef}
            src={imageUrl}
            alt={alt || "Product"}
            className="w-full h-full object-contain"
            style={{
              maxHeight: "80vh",
              display: "block",
              margin: "0 auto",
              background: "#f7fafc",
              // Remove old hover scale effect for cleaner magnifier
              cursor: showMagnifier ? "none" : "zoom-in"
            }}
            draggable={false}
          />
          {/* Magnifier circle */}
          {showMagnifier && imgRef.current && (
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
                // Inner image for zoom
                backgroundImage: `url(${imageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `${
                  imgRef.current.width * ZOOM_LEVEL
                }px ${imgRef.current.height * ZOOM_LEVEL}px`,
                backgroundPosition: `
                  -${Math.max(
                    0,
                    magnifierPos.x * ZOOM_LEVEL - MAGNIFIER_SIZE / 2
                  )}px
                  -${Math.max(
                    0,
                    magnifierPos.y * ZOOM_LEVEL - MAGNIFIER_SIZE / 2
                  )}px
                `
              }}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageZoomDialog;

