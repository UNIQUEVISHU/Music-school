"use client";

import { cn } from "../../utils/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {

  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {

    if (containerRef.current && scrollerRef.current) {

      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {

        const duplicatedItem = item.cloneNode(true);

        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }

      });

      getDirection();
      getSpeed();

      setStart(true);
    }
  }

  const getDirection = () => {

    if (containerRef.current) {

      if (direction === "left") {

        containerRef.current.style.setProperty(
          "--animation-direction",
          "normal"
        );

      } else {

        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );

      }
    }
  };

  const getSpeed = () => {

    if (containerRef.current) {

      if (speed === "fast") {

        containerRef.current.style.setProperty(
          "--animation-duration",
          "20s"
        );

      } else if (speed === "normal") {

        containerRef.current.style.setProperty(
          "--animation-duration",
          "40s"
        );

      } else {

        containerRef.current.style.setProperty(
          "--animation-duration",
          "80s"
        );

      }
    }
  };

  return (

    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >

      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "[animation:var(--animate-scroll)]",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >

        {items.map((item, idx) => (

          <li
            key={idx}
            className="
              relative
              w-[350px]
              md:w-[450px]
              max-w-full
              shrink-0

              rounded-2xl

              border border-white/10

              bg-[rgba(17,24,39,0.75)]

              backdrop-blur-md

              px-8 py-6

              shadow-[0_8px_32px_rgba(0,0,0,0.45)]

              transition-all
              duration-300

              hover:border-cyan-400/40
              hover:shadow-cyan-500/10
              hover:-translate-y-1
            "
          >

            {/* Glow Effect */}
            <div
              className="
                absolute inset-0 rounded-2xl
                bg-gradient-to-r
                from-blue-500/10
                to-cyan-500/10
                opacity-0
                transition-opacity
                duration-300
                hover:opacity-100
              "
            />

            <blockquote>

              <span
                className="
                  relative z-20
                  text-[18px]
                  leading-[1.9]
                  font-normal
                  text-neutral-200
                "
              >
                {item.quote}
              </span>

              <div className="relative z-20 mt-6 flex flex-row items-center">

                <span className="flex flex-col gap-1">

                  <span className="text-lg font-semibold text-white">
                    {item.name}
                  </span>

                  <span className="text-sm text-slate-300">
                    {item.title}
                  </span>

                </span>

              </div>

            </blockquote>

          </li>

        ))}

      </ul>

    </div>
  );
};