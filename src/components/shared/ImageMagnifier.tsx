import React, { useState, useRef, useCallback } from 'react';

interface ImageMagnifierProps {
  src: string;
  alt: string;
  className?: string;
  magnifierSize?: number;
  zoomLevel?: number;
}

const ImageMagnifier: React.FC<ImageMagnifierProps> = ({
  src,
  alt,
  className = "",
  magnifierSize = 150,
  zoomLevel = 2.5
}) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (imgRef.current) {
      const { width, height } = imgRef.current.getBoundingClientRect();
      setImgDimensions({ width, height });
      setShowMagnifier(true);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowMagnifier(false);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    if (!imgRef.current) return;

    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Add 2% invisible boundary for better edge coverage
    const boundaryPercent = 0.02;
    const xBoundary = width * boundaryPercent;
    const yBoundary = height * boundaryPercent;

    // Extended boundaries for zoom area (2% beyond image edges)
    const extendedLeft = -xBoundary;
    const extendedRight = width + xBoundary;
    const extendedTop = -yBoundary;
    const extendedBottom = height + yBoundary;

    // Calculate magnifier position with extended boundaries
    const magnifierX = Math.max(magnifierSize / 2, Math.min(x, width - magnifierSize / 2));
    const magnifierY = Math.max(magnifierSize / 2, Math.min(y, height - magnifierSize / 2));

    // Calculate background position for zoomed content
    // This allows zooming beyond the visible image edges
    const bgX = Math.max(extendedLeft, Math.min(x, extendedRight));
    const bgY = Math.max(extendedTop, Math.min(y, extendedBottom));

    setMagnifierPosition({ 
      x: magnifierX, 
      y: magnifierY,
      bgX: bgX,
      bgY: bgY
    });
  }, [magnifierSize]);

  const magnifierStyle: React.CSSProperties = {
    position: 'absolute',
    left: `${magnifierPosition.x - magnifierSize / 2}px`,
    top: `${magnifierPosition.y - magnifierSize / 2}px`,
    width: `${magnifierSize}px`,
    height: `${magnifierSize}px`,
    border: '3px solid #ffffff',
    borderRadius: '50%',
    cursor: 'none',
    pointerEvents: 'none',
    backgroundImage: `url(${src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${imgDimensions.width * zoomLevel}px ${imgDimensions.height * zoomLevel}px`,
    backgroundPosition: `-${(magnifierPosition.bgX || magnifierPosition.x - magnifierSize / 2) * zoomLevel}px -${(magnifierPosition.bgY || magnifierPosition.y - magnifierSize / 2) * zoomLevel}px`,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 0 0 2px rgba(255, 255, 255, 0.8)',
    zIndex: 1000,
    opacity: showMagnifier ? 1 : 0,
    transition: 'opacity 0.2s ease-in-out',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-auto object-contain rounded-lg border shadow-sm bg-gray-50 cursor-crosshair"
        style={{ maxHeight: '300px' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onError={(e) => {
          e.currentTarget.src = "/placeholder.svg";
          e.currentTarget.className = "w-full h-auto object-contain rounded-lg border shadow-sm bg-gray-100 flex items-center justify-center text-gray-400";
        }}
      />
      {showMagnifier && (
        <div
          style={magnifierStyle}
          className="magnifier-glass-white"
        />
      )}
    </div>
  );
};

export default ImageMagnifier;