import React, { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import { Menu } from 'lucide-react'
import { Drawer, DrawerContent, DrawerClose, DrawerTrigger } from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'

const Navigation: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white dark:bg-muted shadow-md py-3' : 'bg-transparent dark:bg-transparent py-5'
            }`}
        >
            <div className='container mx-auto flex justify-between items-center'>
                <a href='#' className='text-xl font-semibold'>
                    <span>{'<TanCaoDev />'}</span>
                </a>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center space-x-6'>
                    <ul className='flex space-x-6'>
                        <li>
                            <a href='#about' className='nav-link'>
                                About
                            </a>
                        </li>
                        <li>
                            <a href='#experience' className='nav-link'>
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href='#projects' className='nav-link'>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href='#tech-stack' className='nav-link'>
                                Tech Stack
                            </a>
                        </li>
                        <li>
                            <a href='#contact' className='nav-link'>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <ThemeToggle />
                </div>

                {/* Mobile Navigation with Drawer */}
                <div className='flex items-center md:hidden space-x-2'>
                    <ThemeToggle />
                    <Drawer>
                        <DrawerTrigger asChild>
                            <Button variant='ghost' size='icon' className='text-foreground'>
                                <Menu className='h-6 w-6' />
                                <span className='sr-only'>Toggle menu</span>
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent className='p-4 bg-background dark:bg-muted'>
                            <div className='mt-6 mb-4 px-2'>
                                <h3 className='text-lg font-semibold mb-4'>Menu</h3>
                                <ul className='space-y-4'>
                                    <li>
                                        <DrawerClose asChild>
                                            <a href='#about' className='block py-2 px-4 hover:bg-accent rounded-md transition-colors'>
                                                About
                                            </a>
                                        </DrawerClose>
                                    </li>
                                    <li>
                                        <DrawerClose asChild>
                                            <a href='#experience' className='block py-2 px-4 hover:bg-accent rounded-md transition-colors'>
                                                Experience
                                            </a>
                                        </DrawerClose>
                                    </li>
                                    <li>
                                        <DrawerClose asChild>
                                            <a href='#projects' className='block py-2 px-4 hover:bg-accent rounded-md transition-colors'>
                                                Projects
                                            </a>
                                        </DrawerClose>
                                    </li>
                                    <li>
                                        <DrawerClose asChild>
                                            <a href='#tech-stack' className='block py-2 px-4 hover:bg-accent rounded-md transition-colors'>
                                                Tech Stack
                                            </a>
                                        </DrawerClose>
                                    </li>
                                    <li>
                                        <DrawerClose asChild>
                                            <a href='#contact' className='block py-2 px-4 hover:bg-accent rounded-md transition-colors'>
                                                Contact
                                            </a>
                                        </DrawerClose>
                                    </li>
                                </ul>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
