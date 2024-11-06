// components/ThemeSwitcher.js
"use client"
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
    const { theme, setTheme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Ensures this component only renders on the client to avoid hydration issues
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    // Determine the effective theme to apply for the toggle
    const currentTheme = theme === 'system' ? systemTheme : theme

    // Toggle between light and dark mode
    const toggleTheme = () => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark')
    }

    return (
        <div className="flex items-center space-x-2">
            <span className="text-sm">{currentTheme === 'dark' ? '🌙 Dark Mode' : '🌞 Light Mode'}</span>
            <button
                onClick={toggleTheme}
                className={`w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1`}
            >
                <div
                    className={`bg-white dark:bg-gray-800 w-4 h-4 rounded-full shadow-md transform transition-transform ${currentTheme === 'dark' ? 'translate-x-6' : 'translate-x-0'
                        }`}
                />
            </button>
        </div>
    )
}
