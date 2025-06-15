
import { useEffect, useRef, useState } from "react";

export const MAGNIFIER_SIZE = 140; // px
export const ZOOM_LEVEL = 2.4;

export interface UseImageZoomParams {
  open: boolean;
  imageUrl: string;
  placeholder: string;
}

export interface UseImageZoomResult {
  imgRef: React.RefObject<HTMLImageElement>;
  containerRef: React.RefObject<HTMLDivElement>;
  showMagnifier: boolean;
  magnifierPos: { x: number; y: number };
  imgDims: {
    width: number;
    height: number;
    naturalWidth: number;
    naturalHeight: number;
  };
  imgLoaded: boolean;
  imgError: boolean;
  currentImageUrl: string;
  setCurrentImageUrl: (url: string) => void;
  setImgError: (e: boolean) => void;
  setImgLoaded: (b: boolean) => void;
  handleImgLoad: () => void;
  handleImgError: () => void;
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleTouchMove: (e: React.TouchEvent<HTMLDivElement>) => void;
  handleLeave: () => void;
  setShowMagnifier: (b: boolean) => void;
  setMagnifierPos: (pos: { x: number; y: number }) => void;
}

export function useImageZoom({
  open,
  imageUrl,
  placeholder,
}: UseImageZoomParams): UseImageZoomResult {
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

  useEffect(() => {
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
    if (currentImageUrl === placeholder) {
      setImgError(true);
      setImgLoaded(false);
    } else {
      setCurrentImageUrl(placeholder);
      setImgError(false);
      setImgLoaded(false);
    }
  };

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
    const clampedX = Math.max(MAGNIFIER_SIZE / 2, Math.min(x, rect.width - MAGNIFIER_SIZE / 2));
    const clampedY = Math.max(MAGNIFIER_SIZE / 2, Math.min(y, rect.height - MAGNIFIER_SIZE / 2));
    return {
      x: clampedX,
      y: clampedY,
      isInside,
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { x, y, isInside } = getPointerCoords(e.clientX, e.clientY);
    setMagnifierPos({ x, y });
    setShowMagnifier(
      isInside &&
        imgLoaded &&
        !imgError &&
        currentImageUrl !== placeholder
    );
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const { x, y, isInside } = getPointerCoords(touch.clientX, touch.clientY);
      setMagnifierPos({ x, y });
      setShowMagnifier(
        isInside &&
          imgLoaded &&
          !imgError &&
          currentImageUrl !== placeholder
      );
    }
  };

  const handleLeave = () => setShowMagnifier(false);

  return {
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
    setShowMagnifier,
    setMagnifierPos,
  };
}
