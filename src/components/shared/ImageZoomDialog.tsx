
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

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
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[600px] w-full p-0 overflow-hidden bg-white"
        style={{ width: "100%", maxWidth: 600 }}
      >
        <div className="relative w-full h-full group">
          <img
            src={imageUrl}
            alt={alt || "Product"}
            className="w-full h-full object-contain transition-transform duration-300 cursor-zoom-in group-hover:scale-110"
            style={{
              cursor: "zoom-in",
              maxHeight: "80vh",
              display: "block",
              margin: "0 auto",
            }}
            onMouseOver={e => (e.currentTarget.style.cursor = "zoom-in")}
            onMouseOut={e => (e.currentTarget.style.cursor = "zoom-in")}
            onClick={e => (e.currentTarget.style.cursor = "zoom-out")}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageZoomDialog;
