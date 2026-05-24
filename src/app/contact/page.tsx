"use client";

import React, { FormEvent, useState } from "react";
import { Meteors } from "@/components/ui/meteors";

function MusicSchoolContactUs() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    console.log("Submitted:", {
      email,
      message,
    });

    setEmail("");
    setMessage("");
  };

  return (

    <div
      className="
        relative
        flex
        min-h-screen
        items-start
        justify-center
        overflow-hidden

        bg-[#020817]

        px-4
        pt-40
        pb-20
      "
    >

      {/* Meteors Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        <Meteors number={35} />

        <div className="absolute inset-0 opacity-60">
          <Meteors number={25} />
        </div>

      </div>

      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          z-0

          bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_45%)]

          blur-3xl
        "
      />

      {/* Main Wrapper */}
      <div
        className="
          relative
          z-10

          w-full
          max-w-xl
        "
      >

        {/* Outer Glow */}
        <div
          className="
            absolute
            -inset-1

            rounded-3xl

            bg-gradient-to-r
            from-blue-500/20
            via-cyan-500/10
            to-blue-500/20

            blur-2xl
          "
        />

        {/* Contact Card */}
        <div
          className="
            relative

            overflow-hidden

            rounded-3xl

            border
            border-white/10

            bg-[rgba(15,23,42,0.85)]

            p-6
            md:p-8

            shadow-[0_8px_32px_rgba(0,0,0,0.65)]

            backdrop-blur-xl
          "
        >

          {/* Top Glow */}
          <div
            className="
              absolute
              -top-16
              left-1/2

              h-32
              w-32

              -translate-x-1/2

              rounded-full

              bg-cyan-500/20

              blur-3xl
            "
          />

          {/* Heading */}
          <h1
            className="
              relative
              z-10

              text-center

              text-4xl
              font-bold
              tracking-tight

              text-white

              md:text-6xl
            "
          >
            Contact Us
          </h1>

          {/* Description */}
          <p
            className="
              relative
              z-10

              mx-auto
              mt-4
              max-w-md

              text-center
              text-sm
              leading-7

              text-slate-400
            "
          >
            We&apos;re here to help with any questions about our courses,
            programs, or events. Reach out and let us know how we can assist
            you in your musical journey.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="
              relative
              z-10

              mt-8
              space-y-5
            "
          >

            {/* Email Input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"

              className="
                w-full
                rounded-2xl

                border
                border-white/10

                bg-black/30

                px-5
                py-3.5

                text-white

                placeholder:text-slate-500

                outline-none

                transition-all
                duration-300

                focus:border-cyan-400/50
                focus:ring-4
                focus:ring-cyan-500/10
              "

              required
            />

            {/* Message Input */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"

              rows={5}

              className="
                w-full
                rounded-2xl

                border
                border-white/10

                bg-black/30

                px-5
                py-4

                text-white

                placeholder:text-slate-500

                outline-none

                transition-all
                duration-300

                focus:border-cyan-400/50
                focus:ring-4
                focus:ring-cyan-500/10
              "

              required
            />

            {/* Submit Button */}
            <button
              type="submit"

              className="
                w-full

                rounded-2xl

                bg-gradient-to-r
                from-blue-600
                via-cyan-500
                to-blue-600

                px-6
                py-3.5

                text-base
                font-semibold

                text-white

                transition-all
                duration-300

                hover:scale-[1.02]
                hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]

                active:scale-[0.98]
              "
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default MusicSchoolContactUs;