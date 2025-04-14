import { RiReactjsFill } from 'react-icons/ri'
import { RiNextjsFill } from 'react-icons/ri'
import { SiRedux } from 'react-icons/si'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiShadcnui } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import { DiMongodb } from 'react-icons/di'
import { IoLogoFirebase } from 'react-icons/io5'
import { VscVscode } from 'react-icons/vsc'
import { SiPostman } from 'react-icons/si'
import { FaFigma } from 'react-icons/fa'
import { FaGitAlt } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { MdWaterDrop } from 'react-icons/md'
import { FaShopify } from 'react-icons/fa'

interface TechItem {
    name: string
    icon: React.ReactNode
    category: 'frontend' | 'backend' | 'others'
}

const TechStack: React.FC = () => {
    const technologies: TechItem[] = [
        {
            name: 'React Js',
            icon: <RiReactjsFill className='w-6 h-6 text-[#61DAFB]' />,
            category: 'frontend'
        },
        {
            name: 'Next Js',
            icon: <RiNextjsFill className='w-6 h-6 text-zinc-800 dark:text-zinc-100' />,
            category: 'frontend'
        },
        {
            name: 'Redux',
            icon: <SiRedux className='w-6 h-6 text-[#764ABC]' />,
            category: 'frontend'
        },
        {
            name: 'HTML',
            icon: <FaHtml5 className='w-6 h-6 text-[#E34F26]' />,
            category: 'frontend'
        },
        {
            name: 'CSS',
            icon: <FaCss3Alt className='w-6 h-6 text-[#1572B6]' />,
            category: 'frontend'
        },
        {
            name: 'JavaScript',
            icon: <IoLogoJavascript className='w-6 h-6 text-[#F7DF1E]' />,
            category: 'frontend'
        },
        {
            name: 'Tailwind CSS',
            icon: <RiTailwindCssFill className='w-6 h-6 text-[#06B6D4]' />,
            category: 'frontend'
        },
        {
            name: 'Shadcn UI',
            icon: <SiShadcnui className='w-6 h-6 text-zinc-800 dark:text-zinc-100' />,
            category: 'frontend'
        },
        {
            name: 'Liquid',
            icon: <MdWaterDrop className='w-6 h-6 text-[#62a5e4]' />,
            category: 'frontend'
        },
        {
            name: 'Node Js',
            icon: <FaNodeJs className='w-6 h-6 text-[#339933]' />,
            category: 'backend'
        },
        {
            name: 'Express Js',
            icon: <SiExpress className='w-6 h-6 text-zinc-800 dark:text-zinc-100' />,
            category: 'backend'
        },
        {
            name: 'MongoDB',
            icon: <DiMongodb className='w-6 h-6 text-[#47A248]' />,
            category: 'backend'
        },
        {
            name: 'Firebase',
            icon: <IoLogoFirebase className='w-6 h-6 text-[#FFCA28]' />,
            category: 'backend'
        },
        {
            name: 'VS Code',
            icon: <VscVscode className='w-6 h-6 text-[#007ACC]' />,
            category: 'others'
        },
        {
            name: 'Postman',
            icon: <SiPostman className='w-6 h-6 text-[#FF6C37]' />,
            category: 'others'
        },
        {
            name: 'Figma',
            icon: <FaFigma className='w-6 h-6 text-[#F24E1E]' />,
            category: 'others'
        },
        {
            name: 'Git',
            icon: <FaGitAlt className='w-6 h-6 text-[#F05032]' />,
            category: 'others'
        },
        {
            name: 'GitHub',
            icon: <FaGithub className='w-6 h-6 text-zinc-800 dark:text-zinc-100' />,
            category: 'others'
        },
        {
            name: 'Shopify',
            icon: <FaShopify className='w-6 h-6 text-[#95BF47]' />,
            category: 'others'
        }
    ]

    const categories = {
        frontend: 'Front-end',
        backend: 'Back-end',
        others: 'Others (Tools)'
    }

    return (
        <section id='tech-stack' className='container mx-auto'>
            <div className='relative px-4 sm:px-8 lg:px-12'>
                <div className='mx-auto max-w-2xl lg:max-w-5xl'>
                    <h2 className='section-title'>Tech Stack</h2>
                    <p className='text-zinc-600 dark:text-zinc-400 mb-12'>Here are some of my skills which I have been working on for the past 2 years.</p>
                    <div className='w-full flex flex-wrap gap-6 justify-center'>
                        {Object.entries(categories).map(([key, title]) => (
                            <div
                                key={key}
                                className='group relative flex flex-col items-start rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition h-full w-full max-w-[500px]'
                            >
                                <h3 className='text-2xl text-center font-semibold mb-6 text-zinc-700 dark:text-zinc-300 w-full'>{title}</h3>

                                <div className='flex flex-wrap justify-center gap-3 w-full'>
                                    {technologies
                                        .filter((tech) => tech.category === key)
                                        .map((tech) => (
                                            <div
                                                key={tech.name}
                                                className='flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400'
                                            >
                                                {tech.icon}
                                                <span className='text-sm'>{tech.name}</span>
                                            </div>
                                        ))}
                                </div>
                                <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0' />
                                <span className='absolute inset-y-1 left-0 w-px bg-gradient-to-b from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechStack
