// // Installation command:
// // npm install lenis

// // hooks/useLenisScroll.ts
// "use client";
// import { useEffect, useRef } from 'react';

// interface LenisOptions {
//   duration?: number;
//   easing?: (t: number) => number;
//   orientation?: 'vertical' | 'horizontal';
//   gestureOrientation?: 'vertical' | 'horizontal' | 'both';
//   smoothWheel?: boolean;
//   wheelMultiplier?: number;
//   touchMultiplier?: number;
//   infinite?: boolean;
//   autoResize?: boolean;
//   syncTouch?: boolean;
// }

// const useLenisScroll = (options?: LenisOptions) => {
//   const lenisRef = useRef<LenisOptions | null>(null);

//   useEffect(() => {
//     const initLenis = () => {
//       try {
//         const lenis = new Lenis({
//           duration: 1.2,
//           easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//           orientation: 'vertical',
//           gestureOrientation: 'vertical',
//           smoothWheel: true,
//           wheelMultiplier: 1,
//           touchMultiplier: 2,
//           infinite: false,
//           autoResize: true,
//           syncTouch: false,
//           ...options
//         });

//         lenisRef.current = lenis;

//         const raf = (time: number) => {
//           lenis.raf(time);
//           requestAnimationFrame(raf);
//         };
//         requestAnimationFrame(raf);

//         // Optional: Scroll to top on init
//         lenis.scrollTo(0, { immediate: true });

//       } catch (error) {
//         console.error('Failed to initialize Lenis:', error);
//       }
//     };

//     initLenis();

//     return () => {
//       if (lenisRef.current) {
//         lenisRef.current.destroy();
//         lenisRef.current = null;
//       }
//     };
//   }, []);

//   const scrollTo = (target: string | number | HTMLElement, options?: any) => {
//     if (lenisRef.current) {
//       lenisRef.current.scrollTo(target, options);
//     }
//   };

//   const stop = () => {
//     if (lenisRef.current) {
//       lenisRef.current.stop();
//     }
//   };

//   const start = () => {
//     if (lenisRef.current) {
//       lenisRef.current.start();
//     }
//   };

//   return {
//     lenis: lenisRef.current,
//     scrollTo,
//     stop,
//     start
//   };
// };

// export default useLenisScroll;