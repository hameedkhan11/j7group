export interface HeroProps {
  // Content
  title?: string;
  subtitle?: string;
  
  // Background
  backgroundType: 'video' | 'image';
  backgroundSrc: string;
  fallbackImage?: string;
  
  // Layout & Styling
  height?: 'screen' | 'half' | 'three-quarter' | 'custom' | 'auto';
  overlay?: 'light' | 'medium' | 'dark' | 'gradient' | 'none';
  contentAlignment?: 'left' | 'center' | 'right';
  
  // Navigation
  showScrollIndicator?: boolean;
  
  // Animation
  enableAnimations?: boolean;
  
  // Custom content
  children?: React.ReactNode;
  
  // Accessibility
  ariaLabel?: string;
}
