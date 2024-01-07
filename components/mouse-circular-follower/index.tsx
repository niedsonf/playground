'use client'

import { useMousePosition } from "@/hooks/useMousePosition"
import { useEffect, useRef, useState } from "react";

const Colors = ['#FCA119', '#FCD819', '#FCBC19', '#FC7A19', '#FCF319', '#18193B', '#18243A', '#22183B']

function getRandomColor() {
    return Colors[Math.floor(Math.random() * Colors.length)]
}

interface XY {
    x: number
    y: number
}

interface Particle {
    x: number
    y: number
    lastMouse: XY
    currentMouse: XY
    velocity: number
    radians: number
    distanceFromCenter: number
    radius: number
    color: string
    draw: (c: CanvasRenderingContext2D, lastPoint: XY) => void
    update: (c: CanvasRenderingContext2D) => void
}

export function MouseCircularFollower() {
    const ref = useRef<HTMLCanvasElement | null>(null)
    const context = useRef<CanvasRenderingContext2D | null>(null)
    const { mouseX, mouseY } = useMousePosition()

    const [particles, setParticles] = useState<Particle[]>(() => {
        let particles: Particle[] = []
        for (let i = 0; i < 40; i++) {
            particles.push({
                x: 0,
                y: 0,
                currentMouse: { x: 0, y: 0 },
                lastMouse: { x: 0, y: 0 },
                distanceFromCenter: (Math.random() * 80) + 20,
                velocity: Math.random() * 0.05 + 0.01,
                radians: Math.random() * Math.PI * 2,
                radius: Math.random() * 4 + 0.5,
                color: getRandomColor(),
                draw: function (c, lastPoint) {
                    c.beginPath()
                    c.strokeStyle = this.color
                    c.lineWidth = this.radius
                    c.lineCap = 'round'
                    c.moveTo(lastPoint.x, lastPoint.y)
                    c.lineTo(this.x, this.y)
                    c.stroke()
                    c.closePath()
                },
                update: function (c) {
                    const lastPoint: XY = {
                        x: this.x,
                        y: this.y
                    }
                    this.radians += this.velocity
                    this.lastMouse.x += (this.currentMouse.x - this.lastMouse.x) * 0.05
                    this.lastMouse.y += (this.currentMouse.y - this.lastMouse.y) * 0.05
                    this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter
                    this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter
                    this.draw(c, lastPoint)
                }
            })
        }
        return particles
    })

    function animate() {
        requestAnimationFrame(animate)
        let c = context.current!
        c.fillStyle = 'rgba(0, 0, 0, 0.05)'
        c.fillRect(0, 0, innerWidth, innerHeight)
        c.save()
        particles.forEach(particle => particle.update(context.current!))
        c.restore()
    }

    useEffect(() => {
        if (ref.current) {
            ref.current.width = innerWidth
            ref.current.height = innerHeight
            context.current = ref.current.getContext('2d')
            animate()
        }
    }, [])

    useEffect(() => {
        setParticles(() => {
            let newParticles = particles
            newParticles.forEach(particle => {
                particle.currentMouse.x = mouseX
                particle.currentMouse.y = mouseY
            })
            return newParticles
        })
    }, [mouseX, mouseY])

    return <canvas ref={ref} className="fixed" />
}