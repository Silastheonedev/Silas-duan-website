'use client'
import { useEffect, useRef } from 'react'

interface Nucleus {
  x: number
  y: number
  r: number
  count: number
}

interface ParticleCloudProps {
  width: number
  height: number
  /** Which cloud shape to render: 'cumulus' | 'wisp' | 'mass' */
  shape?: 'cumulus' | 'wisp' | 'mass'
  style?: React.CSSProperties
}

function gaussPair(): [number, number] {
  // Box-Muller transform — proper Gaussian distribution
  const u1 = Math.max(Math.random(), 1e-10)
  const u2 = Math.random()
  const mag = Math.sqrt(-2 * Math.log(u1))
  return [mag * Math.cos(2 * Math.PI * u2), mag * Math.sin(2 * Math.PI * u2)]
}

function drawNuclei(
  ctx: CanvasRenderingContext2D,
  nuclei: Nucleus[],
  width: number,
  height: number
) {
  nuclei.forEach(({ x, y, r, count }) => {
    for (let i = 0; i < count; i++) {
      const [gx, gy] = gaussPair()
      // Sigma = r * 0.32 so ~95% of dots fall within r
      const sigma = r * 0.32
      const px = x + gx * sigma
      const py = y + gy * sigma * 0.88  // slight vertical squeeze

      // Skip if outside canvas
      if (px < 0 || px > width || py < 0 || py > height) continue

      const dist = Math.sqrt((px - x) ** 2 + (py - y) ** 2)
      const norm = Math.min(dist / r, 1)

      // Opacity: dense at centre, dissolves to zero at edge
      const opacity =
        Math.pow(1 - norm, 2.2) * (0.15 + Math.random() * 0.75)

      // Dot size: 0.2–0.55px — photographic grain scale
      const dotR = 0.2 + Math.random() * 0.35 * (1 - norm * 0.5)

      ctx.beginPath()
      ctx.arc(px, py, dotR, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(12,11,8,${opacity})`
      ctx.fill()
    }
  })
}

export default function ParticleCloud({
  width,
  height,
  shape = 'cumulus',
  style = {},
}: ParticleCloudProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    // Each shape is a cluster of overlapping Gaussian puffs — like real cloud anatomy
    let nuclei: Nucleus[] = []

    if (shape === 'cumulus') {
      // Classic stacked puff cloud — tallest at top centre
      nuclei = [
        // Base layer — wide and flat
        { x: width * 0.50, y: height * 0.72, r: width * 0.30, count: 9000 },
        { x: width * 0.35, y: height * 0.74, r: width * 0.18, count: 5000 },
        { x: width * 0.65, y: height * 0.73, r: width * 0.20, count: 5500 },
        // Mid puffs
        { x: width * 0.48, y: height * 0.55, r: width * 0.22, count: 7000 },
        { x: width * 0.60, y: height * 0.52, r: width * 0.16, count: 4500 },
        { x: width * 0.36, y: height * 0.56, r: width * 0.14, count: 4000 },
        // Crown
        { x: width * 0.50, y: height * 0.38, r: width * 0.16, count: 5000 },
        { x: width * 0.42, y: height * 0.32, r: width * 0.11, count: 3000 },
        { x: width * 0.58, y: height * 0.35, r: width * 0.10, count: 2800 },
        // Top wisps
        { x: width * 0.50, y: height * 0.22, r: width * 0.08, count: 2000 },
      ]
    } else if (shape === 'wisp') {
      // Diagonal wisp / streak — like the left reference image
      nuclei = [
        { x: width * 0.30, y: height * 0.65, r: width * 0.22, count: 7000 },
        { x: width * 0.42, y: height * 0.52, r: width * 0.16, count: 5000 },
        { x: width * 0.55, y: height * 0.40, r: width * 0.13, count: 4000 },
        { x: width * 0.65, y: height * 0.30, r: width * 0.10, count: 2800 },
        { x: width * 0.72, y: height * 0.22, r: width * 0.08, count: 1800 },
        // Side tendrils
        { x: width * 0.22, y: height * 0.72, r: width * 0.12, count: 3000 },
        { x: width * 0.60, y: height * 0.55, r: width * 0.09, count: 2200 },
      ]
    } else if (shape === 'mass') {
      // Large dense cloud mass — like corner fill in right reference
      nuclei = [
        { x: width * 0.20, y: height * 0.20, r: width * 0.35, count: 12000 },
        { x: width * 0.40, y: height * 0.30, r: width * 0.28, count: 9000 },
        { x: width * 0.15, y: height * 0.45, r: width * 0.25, count: 7000 },
        { x: width * 0.55, y: height * 0.20, r: width * 0.20, count: 5500 },
        { x: width * 0.30, y: height * 0.55, r: width * 0.18, count: 4500 },
        { x: width * 0.05, y: height * 0.10, r: width * 0.22, count: 6000 },
        { x: width * 0.60, y: height * 0.40, r: width * 0.14, count: 3500 },
      ]
    }

    drawNuclei(ctx, nuclei, width, height)
  }, [width, height, shape])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: 0,
        mixBlendMode: 'multiply',
        width: `${width}px`,
        height: `${height}px`,
        ...style,
      }}
    />
  )
}
