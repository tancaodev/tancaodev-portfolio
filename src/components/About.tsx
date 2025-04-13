import Typewriter from 'typewriter-effect'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Github, Linkedin, Twitter, Code2 } from 'lucide-react'
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from './Icons'

const About: React.FC = () => {
    return (
        <section id='about' className='container mx-auto'>
            <div className='relative px-4 sm:px-8 lg:px-12'>
                <div className='mx-auto max-w-2xl lg:max-w-5xl'>
                    <div className='mx-auto lg:max-w-5xl flex flex-col md:flex-row justify-between items-start md:space-x-14 w-full mb-10'>
                        <div className='flex md:w-3/4 flex-col mt-6'>
                            <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white'>Tan Cao</h1>
                            <h2 className='text-2xl md:text-3xl font-bold text-muted-foreground mb-6'>
                                <Typewriter
                                    options={{
                                        strings: ['I am a Front-end Developer', 'I build things for the web'],
                                        autoStart: true,
                                        loop: true
                                    }}
                                />
                            </h2>
                            <p className='text-zinc-600 dark:text-zinc-400 mb-4'>
                                Full Stack Developer passionate about building web applications and exploring new technologies. I love solving complex problems
                                and sharing insights from my journey.
                            </p>

                            <div className='flex space-x-4'>
                                <GithubIcon />
                                <LinkedinIcon />
                                <FacebookIcon />
                                <InstagramIcon />
                                <a
                                    href='https://github.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                                >
                                    <Github className='h-5 w-5' />
                                </a>
                                <a
                                    href='https://linkedin.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                                >
                                    <Linkedin className='h-5 w-5' />
                                </a>
                                <a
                                    href='https://stackoverflow.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                                >
                                    <Code2 className='h-5 w-5' />
                                </a>
                                <a
                                    href='https://twitter.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                                >
                                    <Twitter className='h-5 w-5' />
                                </a>
                            </div>
                        </div>

                        <div className='relative p-4 md:p-4 md:order-last order-first flex-shrink-1'>
                            <div className='block z-[5] overflow-hidden rounded-sm shadow-xl ring-1 ring-slate-900/5 relative bg-white dark:bg-zinc-800 h-40 w-40'>
                                <div className='relative w-full h-full'>
                                    <img
                                        alt='Profile photo'
                                        src='/my_picture.jpg'
                                        className='transition duration-500 blur-0 scale-100 bg-gray-100 object-cover h-full w-full'
                                    />
                                </div>
                            </div>

                            {/* Decorative lines */}
                            <div className='z-0'>
                                <div className='absolute left-0 -right-12 top-0 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]'></div>
                                <div className='absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]'></div>
                                <div className='absolute left-0 -right-12 bottom-14 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]'></div>
                                <div className='absolute right-0 -top-2 -bottom-8 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]'></div>

                                {/* Color gradient */}
                                <div className='absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden'>
                                    <div className='flex -mb-px h-[2px] w-40 -scale-x-100'>
                                        <div className='w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]'></div>
                                        <div className='-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-1 gap-8 mt-4'>
                        <div>
                            <p className='text-lg mb-4'>
                                I'm a software engineer with 5+ years of experience in full-stack development, specializing in React, Node.js, and TypeScript.
                                I'm passionate about building products that make a difference in people's lives.
                            </p>
                            <p className='text-lg mb-4'>
                                My journey in tech began during my university years, where I started building websites for local businesses. Since then, I've
                                worked with startups and established companies to deliver scalable, user-friendly applications.
                            </p>
                            <p className='text-lg'>
                                When I'm not coding, you can find me exploring hiking trails, reading science fiction, or experimenting with new cooking
                                recipes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
