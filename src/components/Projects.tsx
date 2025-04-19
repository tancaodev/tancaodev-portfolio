interface ProjectProps {
    title: string
    description: string
    technologies: string[]
    liveUrl?: string
    githubUrl?: string
    isLive?: boolean
}

const Project: React.FC<ProjectProps> = ({ title, description, technologies, liveUrl, githubUrl, isLive = false }) => {
    return (
        <a
            href={liveUrl || githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='group relative flex flex-col items-start rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition h-full'
        >
            <div className='flex-1 w-full'>
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
    const projects = [
        {
            title: 'E-commerce Admin',
            description:
                'This is the admin interface for my E-commerce project, providing a dashboard for managing products and tracking customer statuses during their shopping experience on the site.',
            technologies: ['Next.js', 'TailwindCSS', 'ShadcnUI', 'Zustand', 'React Hook Form', 'Prisma', 'Stripe'],
            liveUrl: '',
            githubUrl: 'https://github.com/tancaodev/E-Commerce-Admin',
            isLive: false
        },
        {
            title: 'E-commerce Store',
            description:
                'This project provides users access to an e-commerce website, with full functionality of an e-commerce platform, and supports payment via Stripe.',
            technologies: ['Next.js', 'TailwindCSS', 'ShadcnUI', 'Zustand', 'Prisma', 'Stripe'],
            liveUrl: '',
            githubUrl: 'https://github.com/tancaodev/Ecommerce-Store',
            isLive: false
        },
        {
            title: 'NASUS',
            description:
                'This is a final project for a university course, a website inspired by "Versus.com" that allows users to compare specifications of various tech products.',
            technologies: ['React.js', 'Material UI', 'TailwindCSS', 'React Router v6', 'JWT', 'C#', '.NET'],
            liveUrl: '',
            githubUrl: 'https://github.com/tancaodev/React-Dot-Net-Final-Project',
            isLive: false
        },
        {
            title: 'TanCaoDev Portfolio',
            description:
                'This is a personal portfolio website introducing myself, utilizing AI tools such as Builder.io to generate components from Figma, Loveable to build the base source code, and further development using Cursor IDE.',
            technologies: ['Next.js', 'ShadcnUI', 'TailwindCSS', 'Builder.io', 'Loveable', 'Cursor'],
            liveUrl: '',
            githubUrl: 'https://github.com/tancaodev/tancaodev-portfolio',
            isLive: true
        }
    ]

    return (
        <section id='projects' className='container mx-auto'>
            <h2 className='section-title'>Featured Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </section>
    )
}

export default Projects
