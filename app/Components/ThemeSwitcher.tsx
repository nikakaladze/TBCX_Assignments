"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState < boolean > (false);
    const [isOpen, setIsOpen] = useState < boolean > (false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleThemeChange = (mode: string) => {
        setTheme(mode);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className="flex items-center p-2 bg-gray-200 dark:bg-gray-700 rounded-md shadow-md"
            >
                {currentTheme === 'light' && '🌞 light'}
                {currentTheme === 'dark' && '🌙 dark'}
                {theme === 'system' && '🖥️ system'}
            </button>

            {isOpen && (
                <div className="absolute mt-2 w-28 bg-gray-200 dark:bg-gray-700 rounded-md shadow-lg">
                    <div
                        onClick={() => handleThemeChange('light')}
                        className="flex items-center p-2 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer rounded-t-md"
                    >
                        🌞 light
                    </div>
                    <div
                        onClick={() => handleThemeChange('dark')}
                        className="flex items-center p-2 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"
                    >
                        🌙 dark
                    </div>
                    <div
                        onClick={() => handleThemeChange('system')}
                        className="flex items-center p-2 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer rounded-b-md"
                    >
                        🖥️ system
                    </div>
                </div>
            )}
        </div>
    );
}
