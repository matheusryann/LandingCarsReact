import { useEffect, useState } from 'react'

/** Opções que você passa ao chamar useCountUp({ ... }) */
type UseCountUpOptions = {
  end: number
  duration?: number
  decimals?: number
  start?: number
  enabled?: boolean
}

/** Curva de animação: 0→1 suave no final (não linear) */
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export function useCountUp({
  end,
  duration = 1400,
  decimals = 0,
  start = 0,
  enabled = true,
}: UseCountUpOptions) {
  const [value, setValue] = useState(start)

  useEffect(() => {
    if (!enabled) return

    let frameId = 0
    let startTime: number | null = null

    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp

      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)
      const current = start + (end - start) * eased

      const rounded =
        decimals > 0
          ? Number(current.toFixed(decimals))
          : Math.round(current)

      setValue(rounded)

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      } else {
        setValue(end)
      }
    }

    frameId = requestAnimationFrame(tick)
    
    return () => cancelAnimationFrame(frameId)
  }, [end, duration, decimals, start, enabled])

  if (!enabled) return start
  return value
}
