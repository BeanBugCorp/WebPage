import { useCallback, useState } from 'react';

export function useReveal(threshold = 0.1) {
  const [visible, setVisible] = useState(false);

  const callbackRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(node);
          }
        },
        { threshold, rootMargin: '0px 0px -50px 0px' }
      );

      observer.observe(node);
    },
    [threshold]
  );

  return [callbackRef, visible] as const;
}
