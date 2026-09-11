import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import heroImg from "../../assets/hero_leadership.jpg";

function useGSAP(callback, options) {
  const deps = options?.dependencies ?? [];
  const scope = options?.scope;
  const ctxRef = useRef(null);
  const cleanupRef = useRef(undefined);

  useLayoutEffect(() => {
    const el =
      scope && typeof scope === "object" && "current" in scope
        ? scope.current
        : scope;
    ctxRef.current = gsap.context(() => {}, el ?? undefined);
    return () => {
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    if (!ctxRef.current) return;
    cleanupRef.current?.();
    const ret = ctxRef.current.add(callback);
    cleanupRef.current = typeof ret === "function" ? ret : undefined;
  }, deps);
}

if (typeof window !== "undefined") {
  try {
    gsap.registerPlugin(SplitText);
  } catch (e) {
    console.warn("GSAP SplitText registration:", e);
  }
}

// Animation timing
const STRIP_COUNT = 10;
const REVEAL_DURATION = 0.5;
const STRIP_STAGGER = 0.04;
const ZOOM_DURATION = 0.9;
const ZOOM_FROM = 1.2;
const AUTOPLAY_INTERVAL = 5000;
const TITLE_CHAR_DURATION = 0.6;
const TITLE_CHAR_STAGGER = 0.04;
const TITLE_CHAR_Y_PERCENT = 100;
const PROGRESS_DURATION = 0.9;

const DEFAULT_SLIDES = [
  {
    src: heroImg,
    title: "Leadership Ecosystem",
    chapter: "CEO Architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    title: "Architecture of Scale",
    chapter: "Enterprise Systems",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    title: "Boardroom Alignment",
    chapter: "Global Governance",
  },
];

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false)
  );
}

export default function ParallaxStripSlider({
  slides = DEFAULT_SLIDES,
  className = "",
  stripCount = STRIP_COUNT,
  revealDuration = REVEAL_DURATION,
  stripStagger = STRIP_STAGGER,
  zoomFrom = ZOOM_FROM,
  zoomDuration = ZOOM_DURATION,
  autoplay = true,
  showProgressBar = true,
  showCounter = true,
  showControls = true,
  showCursor = false,
  accentColor = "#DFC38A",
  backgroundColor = "#06070A",
}) {
  const [current, setCurrent] = useState(0);
  const [incoming, setIncoming] = useState(null);
  const [caption, setCaption] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  const rootRef = useRef(null);
  const captionRef = useRef(null);
  const chapterRef = useRef(null);
  const titleRef = useRef(null);
  const counterRef = useRef(null);
  const counterNumRef = useRef(null);
  const progressRef = useRef(null);
  const stripsRef = useRef([]);
  const zoomRef = useRef([]);
  const isAnimating = useRef(false);
  const isFirstCaption = useRef(true);
  const splitRef = useRef(null);

  // Circular click-to-navigate cursor.
  const cursorRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const isInside = useRef(false);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  const total = slides.length;

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setIsCoarsePointer(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Load the display serif
  useEffect(() => {
    const id = "hpx-instrument-serif";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap";
    document.head.appendChild(link);
  }, []);

  const goTo = useCallback(
    (next, transitionDirection) => {
      if (isAnimating.current || next === current || total < 2) return;
      isAnimating.current = true;
      setDirection(transitionDirection);
      setIncoming(next);
    },
    [current, total]
  );

  const onNext = useCallback(
    () => goTo((current + 1) % total, "next"),
    [current, total, goTo]
  );
  const onPrev = useCallback(
    () => goTo((current - 1 + total) % total, "prev"),
    [current, total, goTo]
  );

  // Auto-advance on a timer
  useEffect(() => {
    if (!autoplay || total < 2) return;
    if (typeof window !== "undefined" && prefersReducedMotion()) return;
    const id = window.setInterval(() => {
      if (!isAnimating.current) onNext();
    }, AUTOPLAY_INTERVAL);
    return () => window.clearInterval(id);
  }, [autoplay, total, onNext]);

  // Wipe + zoom + progress on slide change.
  useGSAP(
    () => {
      if (incoming === null) return;

      const strips = stripsRef.current.slice(0, stripCount).filter(Boolean);
      const zooms = zoomRef.current.slice(0, stripCount).filter(Boolean);
      if (!strips.length) return;
      const isPrevious = direction === "prev";
      const orderedStrips = isPrevious ? [...strips].reverse() : strips;

      if (prefersReducedMotion()) {
        setCaption(incoming);
        setCurrent(incoming);
        setIncoming(null);
        isAnimating.current = false;
        return;
      }

      const settle = () => {
        setCaption(incoming);
        setCurrent(incoming);
        setIncoming(null);
        isAnimating.current = false;
      };

      const tl = gsap.timeline({ onComplete: settle });

      tl.fromTo(
        orderedStrips,
        { clipPath: isPrevious ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)" },
        {
          clipPath: isPrevious ? "inset(0 0 0 0%)" : "inset(0 0% 0 0)",
          duration: revealDuration,
          ease: "power3.out",
          stagger: stripStagger,
        },
        0
      );

      tl.fromTo(
        zooms,
        { scale: zoomFrom },
        {
          scale: 1,
          duration: zoomDuration,
          ease: "power3.out",
        },
        0
      );

      if (progressRef.current) {
        tl.to(
          progressRef.current,
          {
            scaleX: (incoming + 1) / total,
            duration: PROGRESS_DURATION,
            ease: "power3.inOut",
          },
          0
        );
      }

      const outgoing = [
        captionRef.current,
        titleRef.current,
        counterRef.current,
      ].filter(Boolean);
      if (outgoing.length) {
        tl.to(
          outgoing,
          {
            autoAlpha: 0,
            y: -2,
            duration: 0.35,
            ease: "power2.in",
          },
          0.15
        );
        tl.add(() => setCaption(incoming), 0.5);
      }
    },
    {
      dependencies: [
        incoming,
        direction,
        stripCount,
        revealDuration,
        stripStagger,
        zoomFrom,
        zoomDuration,
      ],
      scope: rootRef,
    }
  );

  useLayoutEffect(() => {
    splitRef.current?.revert();
    splitRef.current = null;
  }, [caption]);

  // Incoming caption reveal: title chars, chapter fade, counter number.
  useGSAP(
    () => {
      if (isFirstCaption.current) {
        isFirstCaption.current = false;
        return;
      }
      if (!captionRef.current || !titleRef.current) return;

      gsap.set([captionRef.current, titleRef.current], { autoAlpha: 1, y: 0 });

      if (prefersReducedMotion()) {
        gsap.set(
          [
            chapterRef.current,
            titleRef.current,
            counterRef.current,
            counterNumRef.current,
          ],
          { autoAlpha: 1, y: 0, yPercent: 0 }
        );
        return;
      }

      let split = null;
      try {
        split = new SplitText(titleRef.current, { type: "chars" });
        splitRef.current = split;
      } catch (e) {
        split = null;
      }

      const tl = gsap.timeline({
        onComplete: () => {
          if (split) {
            split.revert();
            if (splitRef.current === split) splitRef.current = null;
          }
        },
      });

      if (split && split.chars && split.chars.length > 0) {
        tl.from(
          split.chars,
          {
            yPercent: TITLE_CHAR_Y_PERCENT,
            duration: TITLE_CHAR_DURATION,
            ease: "power2.out",
            stagger: TITLE_CHAR_STAGGER,
          },
          0
        );
      } else {
        tl.fromTo(
          titleRef.current,
          { autoAlpha: 0, y: 15 },
          { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
          0
        );
      }

      if (chapterRef.current) {
        tl.fromTo(
          chapterRef.current,
          { autoAlpha: 0, y: 0 },
          { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
          0
        );
      }

      if (counterRef.current) {
        tl.fromTo(
          counterRef.current,
          { autoAlpha: 0, y: 0 },
          { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" },
          0
        );
      }
      if (counterNumRef.current) {
        tl.from(
          counterNumRef.current,
          {
            yPercent: 110,
            duration: 0.55,
            ease: "power3.out",
          },
          0
        );
      }
    },
    { dependencies: [caption], scope: rootRef }
  );

  useGSAP(
    () => () => {
      splitRef.current?.revert();
      splitRef.current = null;
    },
    { scope: rootRef }
  );

  // Circular cursor: smooth follow + arrow that flips with the pointer side.
  useEffect(() => {
    if (!showControls || !showCursor || isCoarsePointer) return;
    const cursor = cursorRef.current;
    const l1 = line1Ref.current;
    const l2 = line2Ref.current;
    if (!cursor || !l1 || !l2) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0, scale: 0.6 });
    gsap.set(l1, {
      transformOrigin: "100% 50%",
      xPercent: -50,
      yPercent: -50,
      y: -1.5,
      rotation: 45,
      x: 0,
    });
    gsap.set(l2, {
      transformOrigin: "100% 50%",
      xPercent: -50,
      yPercent: -50,
      y: 1.5,
      rotation: -45,
      x: 0,
    });

    let currentSide = "right";
    let rafId = null;

    const handleMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const target = e.target instanceof Element ? e.target : null;
      const isOverControls = Boolean(
        target?.closest(
          'button, input, textarea, select, a, label, [role="button"], [contenteditable="true"]'
        )
      );

      mouse.current.x = x;
      mouse.current.y = y;

      const rect = rootRef.current?.getBoundingClientRect();
      const isOut =
        !rect ||
        x <= rect.left ||
        y <= rect.top ||
        x >= rect.right ||
        y >= rect.bottom;

      if (isOut || isOverControls) {
        if (isInside.current) {
          isInside.current = false;
          gsap.to(cursor, {
            opacity: 0,
            scale: 0.6,
            duration: 0.25,
            ease: "power3.inOut",
          });
        }
        return;
      }

      if (!isInside.current) {
        pos.current.x = x;
        pos.current.y = y;
        gsap.set(cursor, { x, y });
        gsap.to(cursor, {
          opacity: 1,
          scale: 1,
          duration: 0.25,
          ease: "power3.out",
        });
        isInside.current = true;
      }

      const isLeft = rect ? x < rect.left + rect.width / 2 : false;
      const nextSide = isLeft ? "left" : "right";

      if (nextSide !== currentSide) {
        currentSide = nextSide;
        if (nextSide === "left") {
          gsap.to(l1, {
            rotation: 135,
            x: -4,
            duration: 0.35,
            ease: "power3.inOut",
          });
          gsap.to(l2, {
            rotation: -135,
            x: -4,
            duration: 0.35,
            ease: "power3.inOut",
          });
        } else {
          gsap.to(l1, {
            rotation: 45,
            x: 4,
            duration: 0.35,
            ease: "power3.inOut",
          });
          gsap.to(l2, {
            rotation: -45,
            x: 4,
            duration: 0.35,
            ease: "power3.inOut",
          });
        }
      }
    };

    const render = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12;
      gsap.set(cursor, { x: pos.current.x, y: pos.current.y });
      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMove);
    render();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [showControls, isCoarsePointer]);

  const renderStrips = (slide) => {
    const width = 100 / stripCount;

    return Array.from({ length: stripCount }, (_, i) => (
      <div
        key={i}
        ref={(el) => {
          if (el) stripsRef.current[i] = el;
        }}
        className="absolute inset-y-0 overflow-hidden"
        style={{
          left: `${i * width}%`,
          width: `${width}%`,
          marginLeft: i === 0 ? 0 : "-0.5px",
          paddingLeft: i === 0 ? 0 : "0.5px",
        }}
      >
        <div
          className="absolute inset-y-0"
          style={{
            left: `-${i * 100}%`,
            width: `${stripCount * 100}%`,
          }}
        >
          <div
            ref={(el) => {
              if (el) zoomRef.current[i] = el;
            }}
            className="relative h-full w-full will-change-transform"
          >
            <img
              src={slide.src}
              alt=""
              draggable={false}
              className="absolute inset-0 h-full w-full select-none object-cover"
            />
          </div>
        </div>
      </div>
    ));
  };

  const activeSlide = slides[caption];
  const stacked = isCoarsePointer;

  return (
    <div
      ref={rootRef}
      style={{ backgroundColor }}
      className={`parallax-strip-slider relative h-full w-full overflow-hidden select-none ${className}`}
    >
      {/* Outgoing slide */}
      <div className="absolute inset-0">
        <img
          src={slides[current].src}
          alt={slides[current].title}
          draggable={false}
          className="absolute inset-0 h-full w-full select-none object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Incoming slide */}
      {incoming !== null && (
        <div className="absolute inset-0">
          {renderStrips(slides[incoming])}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>
      )}

      {/* Click-to-navigate overlay */}
      {showControls && total > 1 && (
        <div
          className="absolute inset-0 z-20"
          style={{ cursor: showCursor ? (stacked ? "pointer" : "none") : "pointer" }}
          onClick={(e) => {
            if (isAnimating.current) return;
            const rect = e.currentTarget.getBoundingClientRect();
            const isLeft = e.clientX < rect.left + rect.width / 2;
            if (isLeft) onPrev();
            else onNext();
          }}
        />
      )}

      {/* Top progress bar */}
      {showProgressBar && (
        <div
          className="pointer-events-none absolute inset-x-6 top-5 sm:inset-x-8 sm:top-6 z-10 h-[2px] bg-white/10"
        >
          <div
            ref={progressRef}
            className="h-full w-full origin-left"
            style={{
              transform: `scaleX(${(caption + 1) / total})`,
              backgroundColor: accentColor,
            }}
          />
        </div>
      )}

      {/* Bottom bar: Chapter, Title & Counter with smooth protective vignette */}
      <div 
        ref={captionRef}
        className="absolute inset-x-0 bottom-0 px-6 sm:px-8 pb-6 sm:pb-8 pt-20 z-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end justify-between gap-4 pointer-events-none"
      >
        <div className="flex flex-col gap-1">
          <span
            ref={chapterRef}
            className="block font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase"
            style={{ color: accentColor }}
          >
            {activeSlide.chapter ??
              `Collection ${String(caption + 1).padStart(2, "0")}`}
          </span>
          <h2
            ref={titleRef}
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-white leading-tight tracking-tight drop-shadow-md"
            style={{
              fontFamily: '"Instrument Serif", "Cormorant Garamond", Georgia, serif',
            }}
          >
            {activeSlide.title}
          </h2>
        </div>

        {showCounter && (
          <span
            ref={counterRef}
            className="font-mono text-xs text-stone-300 tracking-widest font-medium pb-1 shrink-0"
          >
            <span className="inline-block w-[2ch] overflow-hidden text-right text-white">
              <span ref={counterNumRef} className="inline-block">
                {String(caption + 1).padStart(2, "0")}
              </span>
            </span>
            <span> / {String(total).padStart(2, "0")}</span>
          </span>
        )}
      </div>

      {/* Circular nav cursor */}
      {showControls && showCursor && total > 1 && !isCoarsePointer && (
        <div
          ref={cursorRef}
          className="pointer-events-none fixed left-0 top-0 z-[100]"
        >
          <div
            className="flex size-12 items-center justify-center rounded-full shadow-2xl backdrop-blur-md"
            style={{ backgroundColor: accentColor }}
          >
            <div className="relative size-6">
              <span
                ref={line1Ref}
                className="absolute left-1/2 top-1/2 h-0.5 w-3.5"
                style={{ backgroundColor: "#06070A" }}
              />
              <span
                ref={line2Ref}
                className="absolute left-1/2 top-1/2 h-0.5 w-3.5"
                style={{ backgroundColor: "#06070A" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { ParallaxStripSlider };
