'use client'
import { useState, useEffect } from 'react'

export function useMobileDetection() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLowPerformance, setIsLowPerformance] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isMobileWidth = width < 768
      
      setIsMobile(isMobileWidth || isTouchDevice)
      
      // Consider low performance if mobile or tablet-sized device
      setIsLowPerformance(width < 1024 || isTouchDevice)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return { isMobile, isLowPerformance }
}
