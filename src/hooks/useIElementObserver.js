import { useEffect, useCallback, useState } from "react";

// this hook use intersection observer API to observe any element and takes two arguments "ref" and observer "options" object. it return a boolean based on which any thing can be done

const useElementObserver = (elRef, options) => {
  const [isVisible, setIsVisible] = useState(false);

  const observerCallback = useCallback(
    (entries) => {
      const [entry] = entries;
      if (!entry.isIntersecting) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    },
    [setIsVisible]
  );

  useEffect(() => {
    const elObserver = new IntersectionObserver(observerCallback, options);
    const currentElRef = elRef.current;
    if (elRef.current) {
      elObserver.observe(elRef.current);
    }
    return () => {
      if (currentElRef) elObserver.unobserve(currentElRef);
    };
  }, [options, elRef, observerCallback]);

  return {
    isVisible,
  };
};

export default useElementObserver;
