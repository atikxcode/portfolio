'use client'

import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useMobileDetection } from '@/lib/useMobileDetection'
import { cn } from '@/lib/utils'

export const CustomCursor = () => {
    const { isMobile } = useMobileDetection()
    const [isHovered, setIsHovered] = useState(false)

    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 700 } // Tighter spring
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        if (isMobile) return

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }

        const handleMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            // Expanded compatibility for all clickable elements
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.getAttribute('role') === 'button' ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovered(true)
            } else {
                setIsHovered(false)
            }
        }

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseover', handleMouseEnter)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mouseover', handleMouseEnter)
        }
    }, [isMobile, cursorX, cursorY])

    if (isMobile) return null

    return (
        <div className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block">
            <motion.div
                className={cn(
                    "fixed top-0 left-0 rounded-full bg-white mix-blend-difference pointer-events-none transition-all duration-200 ease-out",
                    isHovered ? "h-8 w-8 -translate-x-4 -translate-y-4" : "h-3 w-3 -translate-x-1.5 -translate-y-1.5"
                )}
                style={{
                    translateX: cursorXSpring, // Use spring for slight smoothness but kept tight
                    translateY: cursorYSpring,
                }}
            />
        </div>
    )
}
