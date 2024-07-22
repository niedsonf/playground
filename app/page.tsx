'use client'

import { cn } from "@/utils/cn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  useGSAP(() => {
    gsap.timeline()
      .fromTo('#home-main-title', {
        height: 0,
      }, {
        height: 'auto',
        duration: 0.5,
        ease: 'back.out(1.7)',
      })
      .fromTo('#home-main-title span',
        {
          opacity: 0,
        }, {
        opacity: 1,
        duration: 0.5,
        ease: 'back.out(1.7)',
      })
      .fromTo('#home-legends', {
        height: 0,
      }, {
        height: 'auto',
        duration: 0.5,
        ease: 'back.out(1.7)',
      })
      .fromTo('#home-legends h2:first-child', {
        opacity: 0,
        y: -100,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'back.out(1.7)'
      })
      .fromTo('#home-legends h2:nth-child(2)', {
        opacity: 0,
        y: -100,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'back.out(1.7)'
      })
      .fromTo('#home-legends h2:last-child', {
        opacity: 0,
        y: -100,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'back.out(1.7)'
      })
  })

  return (
    <div className={cn(
      "flex flex-col items-center justify-center gap-52 h-full",
      "text-gray-100 [&_span]:text-green-400"
    )}>
      <h1 className="text-4xl overflow-hidden pb-3" id="home-main-title">
        Welcome to my
        <br />
        <span className="text-6xl pl-4">Playground.</span>
      </h1>
      <div className="flex items-center gap-32" id="home-legends">
        <h2 className="text-xl">
          There&apos;s
          <br />
          <span className="text-2xl">no purpose </span>
          <br />
          to this site.
        </h2>
        <h2 className="text-xl text-center">
          It&apos;s just a place
          <br />
          for me to test
          <br />
          <span className="text-2xl">random stuff.</span>
        </h2>
        <h2 className="text-xl text-right">
          U may find some
          <br />
          <span className="text-2xl">non sense</span>
          <br />
          things.
        </h2>
      </div>
    </div>
  )
}
