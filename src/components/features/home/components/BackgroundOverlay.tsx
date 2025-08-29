// components/BackgroundOverlay.tsx
import React from 'react';

interface BackgroundOverlayProps {
  isVisible: boolean;
}

const BackgroundOverlay: React.FC<BackgroundOverlayProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30" />
  );
};

export default BackgroundOverlay;