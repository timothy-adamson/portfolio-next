import { useEffect, useState, useRef } from "react";

const useCarousel = (pages, interval) => {
  const [page, setPage] = useState(1);
  const [stopped, setStopped] = useState(false);
  const timeoutRef = useRef();

  const stopCarousel = (selectedPage = page) => {
    clearTimeout(timeoutRef.current);
    setStopped(true);
    setPage(selectedPage);
  };

  useEffect(() => {
    const { current: activeTimeout } = timeoutRef;

    if (!stopped)
      timeoutRef.current = setTimeout(() => {
        setPage((page + 1) % pages.length || pages.length);
      }, interval);

    return activeTimeout ? clearTimeout(activeTimeout) : undefined;
  }, [page, pages, interval, stopped]);

  return { page, stopCarousel };
};

export default useCarousel;
