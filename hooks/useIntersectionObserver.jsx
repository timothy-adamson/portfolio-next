import { useRef, useEffect, useState } from "react";

const useIntersectionObserver = ({
  root = null,
  rootMargin,
  threshold = 0
} = {}) => {
  const [entry, setEntry] = useState({});
  const [node, setNode] = useState(null);

  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(([entry]) => setEntry(entry), {
      root,
      rootMargin,
      threshold
    });

    const { current: activeObserver } = observer;

    if (node) activeObserver.observe(node);

    return () => activeObserver.disconnect();
  }, [node, root, rootMargin, threshold]);

  return { node, setNode, entry };
};

export default useIntersectionObserver;
