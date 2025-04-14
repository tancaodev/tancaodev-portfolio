import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from './ThemeProvider'

const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
    const { theme, setTheme } = useTheme()

    return (
        <Button
            variant='ghost'
            size='icon'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className={`rounded-full w-9 h-9 bg-transparent hover:bg-secondary/80 dark:hover:bg-muted-foreground/10 transition-colors duration-300 ${className}`}
        >
            <Moon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0' />
            <Sun className='absolute h-[1.2rem] w-[1.2rem] text-yellow-300 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100' />
            <span className='sr-only'>Toggle theme</span>
        </Button>
    )
}

export default ThemeToggle
