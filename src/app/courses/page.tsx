"use client";

import React from "react";

import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/3d-card";

import courseData from "@/data/music_courses.json";

function Page() {

  return (

    <div
      className="
        min-h-screen

        bg-[#020817]

        px-4
        py-12
        pt-36
      "
    >

      {/* Heading */}
      <h1
        className="
          mb-12

          text-center

          text-4xl
          font-bold
          tracking-tight

          text-white

          md:text-7xl
        "
      >
        All Courses ({courseData.courses.length})
      </h1>

      {/* Cards */}
      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-8
        "
      >

        {courseData.courses.map((course, index) => (

          <CardContainer
            key={index}
            className="inter-var"
          >

            <CardBody
              className="
                relative
                group/card

                w-full
                sm:w-[30rem]

                rounded-3xl

                border
                border-white/10

                bg-[rgba(15,23,42,0.85)]

                p-6

                shadow-[0_8px_32px_rgba(0,0,0,0.45)]

                backdrop-blur-xl

                transition-all
                duration-300

                hover:border-cyan-400/30
                hover:shadow-cyan-500/20
              "
            >

              {/* Title */}
              <CardItem
                translateZ="50"
                className="
                  text-2xl
                  font-bold
                  text-white
                "
              >
                {course.title}
              </CardItem>

              {/* Description */}
              <CardItem
                as="p"
                translateZ="60"
                className="
                  mt-3

                  text-sm
                  leading-7

                  text-slate-300
                "
              >
                {course.description}
              </CardItem>

              {/* Image */}
              <CardItem
                translateZ="100"
                className="mt-6 w-full"
              >

                <img
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="
                    h-60
                    w-full

                    rounded-2xl

                    object-cover

                    transition-all
                    duration-300

                    group-hover/card:shadow-2xl
                  "
                  alt={course.title}
                />

              </CardItem>

              {/* Buttons */}
              <div
                className="
                  mt-8

                  flex
                  items-center
                  justify-between
                "
              >

                <CardItem
                  translateZ={20}
                  as="a"
                  href="#"

                  className="
                    rounded-xl

                    border
                    border-cyan-500/20

                    px-4
                    py-2

                    text-xs
                    font-medium

                    text-cyan-400

                    transition-all
                    duration-300

                    hover:bg-cyan-500/10
                  "
                >
                  Learn More →
                </CardItem>

                <CardItem
                  translateZ={20}
                  as="button"

                  className="
                    rounded-xl

                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500

                    px-5
                    py-2

                    text-xs
                    font-bold

                    text-white

                    transition-all
                    duration-300

                    hover:scale-105
                    hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]
                  "
                >
                  Enroll Now
                </CardItem>

              </div>

            </CardBody>

          </CardContainer>

        ))}

      </div>

    </div>
  );
}

export default Page;