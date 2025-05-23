import React, { useState, useEffect, useRef } from 'react'
import ThemeToggle from './ThemeToggle'
import { Menu } from 'lucide-react'
import { Drawer, DrawerContent, DrawerClose, DrawerTrigger, DrawerTitle, DrawerHeader } from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'

const Navigation: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('about')
    const sections = useRef<{ [key: string]: IntersectionObserverEntry }>({})
    const observerRef = useRef<IntersectionObserver | null>(null)

    // Theo dõi scroll để thay đổi background của navigation
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Thiết lập Observer để theo dõi sections
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.id
                    sections.current[id] = entry
                })

                // Tìm section đang hiển thị nhiều nhất
                let maxVisible = 0
                let currentSection = 'about'

                Object.entries(sections.current).forEach(([id, entry]) => {
                    if (entry.isIntersecting && entry.intersectionRatio > maxVisible) {
                        maxVisible = entry.intersectionRatio
                        currentSection = id
                    }
                })

                setActiveSection(currentSection)
            },
            { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5] }
        )

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect()
            }
        }
    }, [])

    // MutationObserver để theo dõi khi DOM thay đổi (khi Suspense load xong)
    useEffect(() => {
        // Tạo mutation observer để phát hiện khi các section được render
        const mutationObserver = new MutationObserver((mutations) => {
            // Khi DOM thay đổi, kiểm tra xem có section mới được thêm vào không
            const sectionsToObserve = document.querySelectorAll('section[id]')
            if (sectionsToObserve.length > 0 && observerRef.current) {
                // Nếu đã có sections, kết nối IntersectionObserver với chúng
                sectionsToObserve.forEach((section) => {
                    observerRef.current?.observe(section)
                })
            }
        })

        // Bắt đầu theo dõi thay đổi trong body
        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true
        })

        // Cleanup khi unmount
        return () => {
            mutationObserver.disconnect()
        }
    }, [])

    // Thử quan sát các section hiện có (trường hợp đã render xong)
    useEffect(() => {
        // Đảm bảo observer đã được tạo
        if (!observerRef.current) return

        // Tìm các section đã render
        const sectionsToObserve = document.querySelectorAll('section[id]')

        // Quan sát các section đã có
        sectionsToObserve.forEach((section) => {
            observerRef.current?.observe(section)
        })
    }, []) // Chạy một lần khi component mount

    const isActive = (section: string) => activeSection === section

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white dark:bg-muted shadow-md py-3' : 'bg-transparent dark:bg-transparent py-5'
            }`}
        >
            <div className='container mx-auto flex justify-between items-center'>
                <a href='/' className='text-xl font-semibold'>
                    <span>{'<TanCaoDev />'}</span>
                </a>

                {/* Desktop Navigation */}
                <div
                    className='hidden md:flex items-center space-x-6 rounded-full
               bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10'
                >
                    <ul className='flex space-x-6'>
                        <a
                            className={`relative rounded-lg px-3 inline-block py-2 text-sm transition-all duration-150 cursor-pointer ${
                                isActive('about') ? 'text-teal-500 dark:text-teal-400' : 'text-zinc-600 dark:text-zinc-400'
                            }`}
                            href='#about'
                        >
                            <span className='relative z-10'>About</span>
                            {isActive('about') && (
                                <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0'></span>
                            )}
                        </a>
                        <a
                            className={`relative rounded-lg px-3 inline-block py-2 text-sm transition-all duration-150 cursor-pointer ${
                                isActive('experience') ? 'text-teal-500 dark:text-teal-400' : 'text-zinc-600 dark:text-zinc-400'
                            }`}
                            href='#experience'
                        >
                            <span className='relative z-10'>Experience</span>
                            {isActive('experience') && (
                                <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0'></span>
                            )}
                        </a>
                        <a
                            className={`relative rounded-lg px-3 inline-block py-2 text-sm transition-all duration-150 cursor-pointer ${
                                isActive('projects') ? 'text-teal-500 dark:text-teal-400' : 'text-zinc-600 dark:text-zinc-400'
                            }`}
                            href='#projects'
                        >
                            <span className='relative z-10'>Projects</span>
                            {isActive('projects') && (
                                <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0'></span>
                            )}
                        </a>
                        <a
                            className={`relative rounded-lg px-3 inline-block py-2 text-sm transition-all duration-150 cursor-pointer ${
                                isActive('tech-stack') ? 'text-teal-500 dark:text-teal-400' : 'text-zinc-600 dark:text-zinc-400'
                            }`}
                            href='#tech-stack'
                        >
                            <span className='relative z-10'>Tech Stack</span>
                            {isActive('tech-stack') && (
                                <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0'></span>
                            )}
                        </a>
                        <a
                            className={`relative rounded-lg px-3 inline-block py-2 text-sm transition-all duration-150 cursor-pointer ${
                                isActive('contact') ? 'text-teal-500 dark:text-teal-400' : 'text-zinc-600 dark:text-zinc-400'
                            }`}
                            href='#contact'
                        >
                            <span className='relative z-10'>Contact</span>
                            {isActive('contact') && (
                                <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0'></span>
                            )}
                        </a>
                    </ul>
                </div>
                <ThemeToggle className='hidden md:flex' />

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
                                <DrawerHeader className='p-0'>
                                    <DrawerTitle className='text-lg font-semibold mb-4 text-start'>Menu</DrawerTitle>
                                </DrawerHeader>
                                <ul className='space-y-4'>
                                    <li>
                                        <DrawerClose asChild>
                                            <a
                                                href='#about'
                                                className={`block py-2 px-4 hover:bg-accent rounded-md transition-colors ${
                                                    isActive('about') ? 'text-teal-500 dark:text-teal-400' : ''
                                                }`}
                                            >
                                                About
                                            </a>
                                        </DrawerClose>
                                    </li>
                                    <li>
                                        <DrawerClose asChild>
                                            <a
                                                href='#experience'
                                                className={`block py-2 px-4 hover:bg-accent rounded-md transition-colors ${
                                                    isActive('experience') ? 'text-teal-500 dark:text-teal-400' : ''
                                                }`}
                                            >
                                                Experience
                                            </a>
                                        </DrawerClose>
                                    </li>
                                    <li>
                                        <DrawerClose asChild>
                                            <a
                                                href='#projects'
                                                className={`block py-2 px-4 hover:bg-accent rounded-md transition-colors ${
                                                    isActive('projects') ? 'text-teal-500 dark:text-teal-400' : ''
                                                }`}
                                            >
                                                Projects
                                            </a>
                                        </DrawerClose>
                                    </li>
                                    <li>
                                        <DrawerClose asChild>
                                            <a
                                                href='#tech-stack'
                                                className={`block py-2 px-4 hover:bg-accent rounded-md transition-colors ${
                                                    isActive('tech-stack') ? 'text-teal-500 dark:text-teal-400' : ''
                                                }`}
                                            >
                                                Tech Stack
                                            </a>
                                        </DrawerClose>
                                    </li>
                                    <li>
                                        <DrawerClose asChild>
                                            <a
                                                href='#contact'
                                                className={`block py-2 px-4 hover:bg-accent rounded-md transition-colors ${
                                                    isActive('contact') ? 'text-teal-500 dark:text-teal-400' : ''
                                                }`}
                                            >
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
