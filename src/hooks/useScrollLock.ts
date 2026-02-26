import { useCallback } from 'react';

/**
 * Hook de Lógica de UI: useScrollLock
 * Objetivo: Travar o scroll do body durante interações de overlay.
 */
export const useScrollLock = () => {
  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = 'var(--removed-body-scroll-bar-size)'; // Evita o "pulo" do layout
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }, []);

  return { lockScroll, unlockScroll };
};