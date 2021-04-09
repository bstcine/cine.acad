import { useEffect } from 'react';

export default function useClass(selector: string, className: string | any[]) {
  if (typeof document === 'undefined') return;
  const addBodyClass = (className: string) => document.querySelector(selector)!.classList.add(className);
  const removeBodyClass = (className: string) => document.querySelector(selector)!.classList.remove(className);

  useEffect(() => {
    // Set up
    className instanceof Array ? className.map(addBodyClass) : addBodyClass(className);

    // Clean up
    return () => {
      className instanceof Array ? className.map(removeBodyClass) : removeBodyClass(className);
    };
  }, [className]);
}
