"use client";

import React, { useState } from "react";
import Link from "next/link";

import { cn } from "../../utils/utils";

import { AnimatePresence, motion } from "framer-motion";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (

        <Link
          href={item.link}
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >

          <AnimatePresence>

            {hoveredIndex === idx && (

              <motion.span
                className="
                  absolute
                  inset-0
                  h-full
                  w-full

                  rounded-3xl

                  bg-slate-800/80

                  block
                "

                layoutId="hoverBackground"

                initial={{ opacity: 0 }}

                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.2,
                  },
                }}

                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                  },
                }}
              />

            )}

          </AnimatePresence>

          <Card>

            <CardTitle>
              {item.title}
            </CardTitle>

            <CardDescription>
              {item.description}
            </CardDescription>

          </Card>

        </Link>

      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {

  return (

    <div
      className={cn(
        `
          relative
          z-20

          h-full
          w-full

          overflow-hidden

          rounded-2xl

          border
          border-white/10

          bg-[rgba(15,23,42,0.85)]

          p-4

          backdrop-blur-xl

          transition-all
          duration-300

          group-hover:border-cyan-400/40
          group-hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
        `,
        className
      )}
    >

      <div className="relative z-50">

        <div className="p-4">

          {children}

        </div>

      </div>

    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {

  return (

    <h4
      className={cn(
        `
          mt-4

          text-xl
          font-bold
          tracking-wide

          text-white
        `,
        className
      )}
    >

      {children}

    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {

  return (

    <p
      className={cn(
        `
          mt-6

          text-sm
          leading-relaxed
          tracking-wide

          text-slate-400
        `,
        className
      )}
    >

      {children}

    </p>
  );
};