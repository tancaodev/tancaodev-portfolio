import React from 'react'
import { BookOpen } from 'lucide-react'

interface Certificate {
    title: string
    issuer: string
    date: string
    link: string
    logo: string
}

const certificates: Certificate[] = [
    {
        title: 'AWS Educate Introduction to Generative AI',
        issuer: 'Amazon Web Services Training and Certification',
        date: '2025',
        link: 'https://www.credly.com/badges/f4f66ace-65d2-4b79-9933-47136418e22a/public_url',
        logo: '/assets/certificates/aws-educate-introduction-to-generative-ai.png'
    },
    {
        title: 'CCNA: Introduction to Networks',
        issuer: 'Cisco',
        date: '2020',
        link: 'https://www.credly.com/badges/7c2ea7ef-6b2b-4974-bcde-99d4a2220a2f/public_url',
        logo: '/assets/certificates/ccna-introduction-to-networks.png'
    }
]

const Certificates: React.FC = () => {
    return (
        <div className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'>
            <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
                <BookOpen className='h-6 w-6 flex-none' />
                <span className='ml-3'>Certificates</span>
            </h2>
            <div className='mt-6 max-h-[180px] md:max-h-[120px] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700 scrollbar-track-transparent md:scrollbar-thumb-zinc-300 md:dark:scrollbar-thumb-zinc-600 md:scrollbar-w-1'>
                {certificates.map((cert, index) => (
                    <li key={index} className='list-none'>
                        <a href={cert.link} target='_blank' rel='noopener noreferrer' className='flex gap-4 group'>
                            <div className='relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
                                <img src={cert.logo} alt={cert.title} className='h-7 w-7' />
                            </div>
                            <dl className='flex flex-auto flex-wrap gap-x-2'>
                                <dt className='sr-only'>Certificate</dt>
                                <dd className='w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-teal-500 dark:group-hover:text-teal-400'>
                                    {cert.title}
                                </dd>
                                <dt className='sr-only'>Issuer</dt>
                                <dd className='text-xs text-zinc-500 dark:text-zinc-400'>{cert.issuer}</dd>
                                <dt className='sr-only'>Date</dt>
                                <dd className='ml-auto text-xs text-zinc-400 dark:text-zinc-500'>
                                    <time dateTime={cert.date}>{cert.date}</time>
                                </dd>
                            </dl>
                        </a>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default Certificates
