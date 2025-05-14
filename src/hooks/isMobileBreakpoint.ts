import { useEffect, useState } from "react";

export function useIsMobileBreakpoint(breakpoint = 768) {
  const query = `(max-width: ${breakpoint}px)`;
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const media = window.matchMedia(query);

    const handleChange = () => setIsMobile(media.matches);

    // listening changing size
    media.addEventListener("change", handleChange);

    // initial value
    setIsMobile(media.matches);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, [query]);

  return isMobile;
}
