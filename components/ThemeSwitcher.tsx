import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Sun, MoonStar } from 'lucide-react'

export function ThemeSwitcher() {
  let [mounted, setMounted] = useState(false)
  let { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])
  let isDark = theme === 'dark' || resolvedTheme === 'dark'

  function onClickToggleDark(event) {
    toggleDark(event, isDark)
  }

  /**
   * Credit to [@hooray](https://github.com/hooray)
   * @see https://github.com/vuejs/vitepress/pull/2347
   */
  function toggleDark(event, isDark) {
    const isSupported =
      // @ts-ignore-next-line
      document.startViewTransition && !window.matchMedia(`(prefers-reduced-motion: reduce)`).matches
    console.log('%c Line:70 🍒 isSupported', 'color:#6ec1c2', isSupported)

    if (!isSupported || !event) {
      console.log('%c Line:70 🍒 isSupported', 'color:#6ec1c2', isSupported)
      isDark = !isDark
      return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

    // @ts-ignore-next-line
    const transition = document.startViewTransition(() => {
      setTheme(isDark ? 'light' : 'dark')
    })

    transition.ready.then(() => {
      const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]

      document.documentElement.animate(
        {
          clipPath: !isDark ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 200,
          easing: 'ease-in',
          pseudoElement: !isDark ? '::view-transition-old(root)' : '::view-transition-new(root)',
        }
      )
    })
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="rounded p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700"
      onClick={onClickToggleDark}
      data-umami-event="nav-theme-switcher"
    >
      {mounted && isDark ? (
        <MoonStar strokeWidth={1.5} size={20} />
      ) : (
        <Sun strokeWidth={1.5} size={20} />
      )}
    </button>
  )
}
