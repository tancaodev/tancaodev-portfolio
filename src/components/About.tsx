import Typewriter from 'typewriter-effect'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

import Certificates from '@/components/Certificates'

const About: React.FC = () => {
    const { toast } = useToast()

    const handleDownloadCV = () => {
        const link = document.createElement('a')
        link.href = '/assets/TanCao_CV.pdf'
        link.download = 'TanCao_CV.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        toast({
            title: 'CV downloaded successfully!',
            description: 'Thank you for your interest in my profile.'
        })
    }

    return (
        <section id='about' className='container mx-auto'>
            <div className='lg:max-w-7xl flex flex-col md:flex-row justify-between items-start md:space-x-14 w-full mb-10'>
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
                        I am a Developer passionate about building web applications and mobile apps, as well as exploring new technologies. My goal is to become
                        a <span className='text-teal-500 dark:text-teal-400 font-semibold'>Software Engineer</span> in the future.
                    </p>

                    <div className='flex items-center gap-4 mb-4'>
                        <Button className='rounded-full px-6 flex items-center gap-2' onClick={handleDownloadCV}>
                            <Download className='h-4 w-4' />
                            Download CV
                        </Button>
                        <div className='flex space-x-4'>
                            <a
                                href='https://github.com/tancaodev'
                                target='_blank'
                                className='inline-flex items-center justify-center h-8 w-8 transition-transform duration-300 hover:scale-110'
                            >
                                <FaGithub size={32} />
                            </a>
                            <a
                                href='https://www.linkedin.com/in/tancao1803/'
                                target='_blank'
                                className='inline-flex items-center justify-center h-8 w-8 transition-transform duration-300 hover:scale-110'
                            >
                                <FaLinkedin size={34} />
                            </a>
                            <a
                                href='https://www.facebook.com/tan.cao.52056/'
                                target='_blank'
                                className='inline-flex items-center justify-center h-8 w-8 transition-transform duration-300 hover:scale-110'
                            >
                                <FaFacebook size={32} />
                            </a>
                        </div>
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

            <div className='grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 mt-4'>
                <div>
                    <p className='text-lg mb-4'>
                        I'm a software engineer with 1+ years of experience in front-end development, specializing in React.js, Next.js, and TypeScript.
                    </p>
                    <p className='text-lg mb-4'>
                        I'm passionate about building products that make a difference in people's lives or creating unique and innovative applications with
                        interesting features.
                    </p>
                    <p className='text-lg'>When I'm not coding, you can find me playing games, volleyball, or hanging out with friends.</p>
                </div>

                <Certificates />
            </div>
        </section>
    )
}

export default About
