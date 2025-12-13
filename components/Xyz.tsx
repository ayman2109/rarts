"use client";

import { useEffect, useRef } from "react";

type InfiniteScrollerProps = {
  items: string[];
  speed?: string;
  direction?: "left" | "right";
};

export default function InfiniteScroller({
  items = [],
  speed = "40s",
  direction = "left",
}: InfiniteScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const scrollerInner = scroller.querySelector(".scroller-inner") as HTMLElement;
    if (!scrollerInner) return;

    const children = Array.from(scrollerInner.children);

    children.forEach((child) => {
      const clone = child.cloneNode(true) as HTMLElement;
      clone.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(clone);
    });
  }, []);

  return (
    <div
      ref={scrollerRef}
      className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,white_20%,white_80%,transparent)]"
      style={
        {
          "--duration": speed,
          "--direction": direction === "right" ? "reverse" : "forwards",
        } as React.CSSProperties
      }
    >
      <ul
        className="scroller-inner flex gap-4 w-max py-4 animate-scroll"
        style={
          {
            animationDuration: `var(--duration)`,
            animationDirection: `var(--direction)`,
          } as React.CSSProperties
        }
      >
        {items.map((item, i) => (
          <li
            key={i}
            className="px-6 py-2 bg-black rounded-lg shadow-md text-white whitespace-nowrap"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
