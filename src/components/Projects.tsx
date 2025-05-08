import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Button } from './ui/button'

interface ProjectProps {
    title: string
    description: string
    technologies: string[]
    liveUrl?: string
    githubUrl?: string
    isLive?: boolean
    type: string
    image: string
}

const Project: React.FC<ProjectProps> = ({ title, description, technologies, liveUrl, githubUrl, isLive = false, image }) => {
    return (
        <a
            href={liveUrl || githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='group relative flex flex-col items-start rounded-2xl border  border-zinc-300/70 p-6 duration-500
            dark:border-zinc-700/40 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition h-full hover:-translate-y-3'
        >
            {/* TODO: ADD IMAGE FOR EACH PROJECT */}
            {/* <img
                src={image}
                alt={title}
                className='w-full rounded-[10px] object-contain shadow-[0_0_16px_2px_rgba(0,0,0,0.1)]'
            /> */}
            <div className='flex-1 w-full mt-6'>
                <div className='flex items-start justify-between'>
                    <h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>{title}</h2>
                    {isLive && (
                        <span className='ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400'>
                            Live
                        </span>
                    )}
                    {!isLive && (
                        <span className='ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-400'>
                            Discontinued
                        </span>
                    )}
                </div>
                <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>{description}</p>
                <div className='mt-6 flex flex-wrap gap-2'>
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100'
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className='relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200'>
                <svg viewBox='0 0 24 24' aria-hidden='true' className='h-6 w-6 flex-none'>
                    <path
                        d='M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z'
                        fill='currentColor'
                    />
                </svg>
                <span className='ml-2'>View project</span>
            </div>
            <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0' />
            <span className='absolute inset-y-1 left-0 w-px bg-gradient-to-b from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0' />
        </a>
    )
}

const Projects: React.FC = () => {
    const [selectedType, setSelectedType] = useState<string>('All')

    const projects = [
        {
            title: 'TanCaoDev Portfolio',
            description:
                'This is a personal portfolio website introducing myself, utilizing AI tools such as Builder.io to generate components from Figma, Loveable to build the base source code, and further development using Cursor IDE.',
            technologies: ['Next.js', 'ShadcnUI', 'TailwindCSS', 'Builder.io', 'Loveable', 'Cursor'],
            liveUrl: '',
            githubUrl: 'https://github.com/tancaodev/tancaodev-portfolio',
            isLive: true,
            type: 'Personal',
            image: '/images/projects/portfolio.png'
        },
        {
            title: 'Landing Page - Apple Website',
            description:
                'Learnt from JS Mastery YouTube tutorial, this is a landing page for a website that sells Apple products, using GSAP, Three.js, and TailwindCSS.',
            technologies: ['GSAP', 'Three.js', 'TailwindCSS'],
            liveUrl: 'https://apple-website-tancaodev.vercel.app/',
            githubUrl: 'https://github.com/tancaodev/apple-website/',
            isLive: true,
            type: 'Learning',
            image: '/images/projects/apple-website.png'
        },
        {
            title: 'Landing Page',
            description: 'This is a my practicing project, on how to build a landing page using TailwindCSS and React.js.',
            technologies: ['TailwindCSS', 'React.js'],
            liveUrl: 'https://landing-page-tancaodev.vercel.app/',
            githubUrl: 'https://github.com/tancaodev/Landing-page',
            isLive: true,
            type: 'Personal',
            image: '/assets/projects/landing-page.png'
        },
        {
            title: 'Docs Tutorial',
            description: 'This is a project that clone to Google Docs, learning how to use third party extension, libaries and using SasS.',
            technologies: ['Tiptap', 'TailwindCSS', 'Next.js'],
            liveUrl: 'https://docs-tutorial-tancaodev.vercel.app/',
            githubUrl: 'https://github.com/tancaodev/docs-tutorial',
            isLive: true,
            type: 'Learning',
            image: '/images/projects/docs-tutorial.png'
        },
        {
            title: 'E-commerce Admin',
            description:
                'This is the admin interface for my E-commerce project, providing a dashboard for managing products and tracking customer statuses during their shopping experience on the site.',
            technologies: ['Next.js', 'TailwindCSS', 'ShadcnUI', 'Zustand', 'React Hook Form', 'Prisma', 'Stripe'],
            liveUrl: '',
            githubUrl: 'https://github.com/tancaodev/E-Commerce-Admin',
            isLive: false,
            type: 'Personal',
            image: '/images/projects/e-commerce-admin.png'
        },
        {
            title: 'E-commerce Store',
            description:
                'This project provides users access to an e-commerce website, with full functionality of an e-commerce platform, and supports payment via Stripe.',
            technologies: ['Next.js', 'TailwindCSS', 'ShadcnUI', 'Zustand', 'Prisma', 'Stripe'],
            liveUrl: '',
            githubUrl: 'https://github.com/tancaodev/Ecommerce-Store',
            isLive: false,
            type: 'Personal',
            image: '/images/projects/e-commerce-store.png'
        },
        {
            title: 'NASUS',
            description:
                'This is a final project for a university course, a website inspired by "Versus.com" that allows users to compare specifications of various tech products.',
            technologies: ['React.js', 'Material UI', 'TailwindCSS', 'React Router v6', 'JWT', 'C#', '.NET'],
            liveUrl: '',
            githubUrl: 'https://github.com/tancaodev/React-Dot-Net-Final-Project',
            isLive: false,
            type: 'Personal',
            image: '/images/projects/nasus.png'
        }
    ]

    const filteredProjects = selectedType === 'All' ? projects : projects.filter((project) => project.type === selectedType)

    const getTypeDescription = (type: string) => {
        switch (type) {
            case 'Personal':
                return 'These are projects I developed during my university studies, including course assignments, major projects, and small practice projects to enhance my programming skills.'
            case 'Learning':
                return 'These are projects I learned from YouTube, Udemy, and Coursera. They help me understand how large-scale projects are structured and how to organize source code for new frameworks I am learning.'
            case 'Certificated':
                return 'These are certificates I earned from various online courses and training programs.'
            default:
                return ''
        }
    }

    return (
        <section id='projects' className='container mx-auto'>
            <h2 className='section-title'>Featured Projects</h2>
            <div className='flex justify-center mb-6'>
                <div className='flex gap-2 overflow-x-auto'>
                    <Button
                        variant={selectedType === 'All' ? 'default' : 'outline'}
                        className='rounded-full text-base whitespace-nowrap'
                        onClick={() => setSelectedType('All')}
                    >
                        All Projects
                    </Button>
                    <Button
                        variant={selectedType === 'Personal' ? 'default' : 'outline'}
                        className='rounded-full text-base whitespace-nowrap'
                        onClick={() => setSelectedType('Personal')}
                    >
                        Personal Projects
                    </Button>
                    <Button
                        variant={selectedType === 'Learning' ? 'default' : 'outline'}
                        className='rounded-full text-base whitespace-nowrap'
                        onClick={() => setSelectedType('Learning')}
                    >
                        Learning Projects
                    </Button>
                    <Button
                        variant={selectedType === 'Certificated' ? 'default' : 'outline'}
                        className='rounded-full text-base whitespace-nowrap'
                        onClick={() => setSelectedType('Certificated')}
                    >
                        Certificated Projects
                    </Button>
                </div>
            </div>

            {selectedType !== 'All' && (
                <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className='text-center text-zinc-600 dark:text-zinc-400 mb-8'>
                    {getTypeDescription(selectedType)}
                </motion.p>
            )}

            <AnimatePresence mode='wait'>
                <motion.div
                    key={selectedType}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                >
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => <Project key={index} {...project} />)
                    ) : (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='col-span-full text-center text-zinc-600 dark:text-zinc-400 py-8'>
                            There is no {selectedType.toLowerCase()} project at the moment.
                        </motion.p>
                    )}
                </motion.div>
            </AnimatePresence>
        </section>
    )
}

export default Projects
