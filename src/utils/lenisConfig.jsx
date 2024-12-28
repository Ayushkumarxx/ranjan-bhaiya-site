import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

gsap.registerPlugin(ScrollTrigger);

function SmoothScrolling({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.5,
      smoothTouch: false,
      smooth: true,
    });

    function animate(time) {
      lenis.raf(time);
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    // ScrollTrigger needs to be manually updated for Lenis
    ScrollTrigger.defaults({ scroller: lenis.scroll });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

export default SmoothScrolling;
