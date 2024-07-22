'use client'

import { useMousePosition } from "@/hooks/useMousePosition";
import clsx from "clsx";
import { useEffect, useRef } from "react";

export function HoverCard3D() {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!ref.current) return
        ref.current.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = ref.current!.getBoundingClientRect()
            const x = e.clientX - left
            const y = e.clientY - top
            const centerX = width / 2
            const centerY = height / 2
            const deltaX = x - centerX
            const deltaY = y - centerY
            const percentX = deltaX / (width / 2)
            const percentY = deltaY / (height / 2)
            const degX = percentX * 10
            const degY = percentY * 10
            ref.current!.style.transform = `perspective(1000px) rotateX(${-degY}deg) rotateY(${degX}deg)`
        })
        ref.current.addEventListener('mouseleave', (e) => {
            ref.current!.style.transform = 'perspective(1px) rotateX(0deg) rotateY(0deg)'
        })
    }, [])

    return (
        <div
            ref={ref}
            className={clsx(
                "w-72 h-72 grid place-items-center",
                "bg-[rgba(255,255,255,0.2)] bg-opacity-20 backdrop-blur-[2px]",
                "border border-[1px_solid_rgba(255,255,255,0.3)]",
                "rounded-2xl"
            )} >
            <span className="font-400 text-xl text-gray-100">I&apos;m a card :3</span>
        </div>
    )
}