
import React from "react";
import { MAGNIFIER_SIZE, ZOOM_LEVEL } from "./useImageZoom";

interface MagnifierProps {
  imageUrl: string;
  position: { x: number; y: number };
  naturalWidth: number;
  naturalHeight: number;
  displayWidth: number;
  displayHeight: number;
}

/**
 * Shows a circular magnifier with a zoomed portion of the image, centered at `position`
 */
const Magnifier: React.FC<MagnifierProps> = ({
  imageUrl,
  position,
  naturalWidth,
  naturalHeight,
  displayWidth,
  displayHeight,
}) => {
  if (
    !naturalWidth ||
    !naturalHeight ||
    !displayWidth ||
    !displayHeight
  ) {
    return null;
  }
  // Ratios for scale
  const ratioX = naturalWidth / displayWidth;
  const ratioY = naturalHeight / displayHeight;
  // The pixel on high-res
  const natX = position.x * ratioX;
  const natY = position.y * ratioY;
  // How large the background img is scaled
  const backgroundSize = `${naturalWidth * ZOOM_LEVEL}px ${naturalHeight * ZOOM_LEVEL}px`;
  // Center "magnified" pixel under mouse
  const bgX = natX * ZOOM_LEVEL - MAGNIFIER_SIZE / 2;
  const bgY = natY * ZOOM_LEVEL - MAGNIFIER_SIZE / 2;
  const backgroundPosition = `-${bgX}px -${bgY}px`;

  const style: React.CSSProperties = {
    position: "absolute",
    pointerEvents: "none",
    left: position.x - MAGNIFIER_SIZE / 2,
    top: position.y - MAGNIFIER_SIZE / 2,
    width: MAGNIFIER_SIZE,
    height: MAGNIFIER_SIZE,
    borderRadius: "50%",
    border: "2.5px solid #38bdf8",
    boxShadow: "0 4px 16px 1px rgba(0,49,107,0.18)",
    overflow: "hidden",
    zIndex: 10,
    background: "#fff",
    backgroundImage: `url('${imageUrl}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize,
    backgroundPosition,
    backgroundColor: "#c2eaffb0",
    outline: "2px dashed #2dd4bf",
  };

  return <div style={style} />;
};

export default Magnifier;
