import { useEffect, useRef } from 'react'

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    let mouseX = width / 2
    let mouseY = height / 2

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    
    const handleMouseLeave = () => {
      mouseX = width / 2
      mouseY = height / 2
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    const particles: {
      phi: number
      theta: number
      baseR: number
      length: number
      thickness: number
      opacity: number
    }[] = []
    
    const particleCount = 600

    // To form a clean distinct circle, we define a strict radius
    // Responsive to screen size so it looks great on mobile too
    for (let i = 0; i < particleCount; i++) {
      // Golden ratio spiral for a perfectly uniform 3D sphere distribution
      const phi = Math.acos(1 - (2 * i) / particleCount)
      const theta = Math.PI * (1 + Math.sqrt(5)) * i

      particles.push({
        phi,
        theta,
        baseR: 0, // Will be computed in render to be responsive
        length: 2 + Math.random() * 3, // Smaller length
        thickness: 0.8 + Math.random() * 1.2, // Smaller thickness
        opacity: 0.3 + Math.random() * 0.5
      })
    }

    let animationFrameId: number
    let autoRot = 0
    let rotX = 0
    let rotY = 0

    const render = () => {
      // Clean up previous frame
      ctx.clearRect(0, 0, width, height)

      const centerX = width / 2
      const centerY = height / 2

      // Sphere radius: 45% of the shortest screen dimension to maintain a pristine circle
      const R = Math.min(width, height) * 0.45 

      // Interactive 3D Rotation dragging based on mouse distance from center
      const targetRotX = (mouseY - height / 2) * 0.001
      const targetRotY = (mouseX - width / 2) * 0.001

      rotX += (targetRotX - rotX) * 0.05
      rotY += (targetRotY - rotY) * 0.05
      autoRot += 0.0015 // Constant slow globe spin

      particles.forEach((p) => {
        // Compute base 3D coordinates based on golden ratio angles
        p.baseR = R

        let x = p.baseR * Math.sin(p.phi) * Math.cos(p.theta)
        let y = p.baseR * Math.cos(p.phi)
        let z = p.baseR * Math.sin(p.phi) * Math.sin(p.theta)

        // Apply Y-axis rotation (Auto spin + Mouse X)
        const totalRotY = autoRot + rotY
        const x1 = x * Math.cos(totalRotY) - z * Math.sin(totalRotY)
        const z1 = x * Math.sin(totalRotY) + z * Math.cos(totalRotY)
        x = x1
        z = z1

        // Apply X-axis rotation (Mouse Y)
        const y1 = y * Math.cos(rotX) - z * Math.sin(rotX)
        const z2 = y * Math.sin(rotX) + z * Math.cos(rotX)
        y = y1
        z = z2

        // 3D Perspective Projection
        // Distance determines scale and fading
        const perspective = 1000 / (1000 + z)
        const projX = centerX + x * perspective
        const projY = centerY + y * perspective

        // The dash points exactly outwards radiating from the sphere's origin. 
        // Calculate the end point in 3D:
        const endX = x + (x / p.baseR) * p.length
        const endY = y + (y / p.baseR) * p.length
        const endZ = z + (z / p.baseR) * p.length

        const endPerspective = 1000 / (1000 + endZ)
        const endProjX = centerX + endX * endPerspective
        const endProjY = centerY + endY * endPerspective

        // Depth perception: farther particles are smaller and less opaque
        const depthAlpha = Math.max(0.05, Math.min(1, (z + p.baseR) / (2 * p.baseR)))
        const finalOpacity = p.opacity * depthAlpha

        // Darker orange color: Hue 20-35, high saturation
        const hue = 20 + (p.theta % 1) * 15
        const saturation = 95
        const lightness = 35 + (depthAlpha * 15) // closer lines appear slightly brighter (35% to 50%)

        ctx.beginPath()
        ctx.moveTo(projX, projY)
        ctx.lineTo(endProjX, endProjY)
        ctx.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${finalOpacity})`
        ctx.lineWidth = p.thickness * perspective
        ctx.lineCap = 'round'
        ctx.stroke()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ width: '100%', height: '100%' }}
    />
  )
}

