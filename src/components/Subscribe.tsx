'use client'

import { useState } from 'react'

const Subscribe = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Xử lý logic subscribe ở đây
        console.log('Email submitted:', email)
    }

    return (
        <div className='h-full w-full bg-background-wave-gradient bg-no-repeat'>
            <div className='h-full bg-gray-900 flex items-center justify-center'>
                <div className='w-2/3 md:w-3/4 lg:w-2/3 mx-auto z-[100] relative py-20'>
                    <div className='max-w-2xl mx-auto text-center'>
                        <div>
                            <h1 className='text-4xl sm:text-5xl xl:text-6xl bg-gradient-yellow-white text-transparent bg-clip-text'>
                                Get Access to Real Estate Diagram
                            </h1>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xl mt-10'>
                                Subscribe to get instant access to the complete diagrams of the Real Estate Application.
                            </p>
                        </div>
                        <div className='flex justify-center'>
                            <form
                                onSubmit={handleSubmit}
                                className='mt-10 py-3 sm:w-[30rem] flex items-center rounded-[2.5rem] shadow-custom bg-gray-800
                                            border-2 border-transparent 
                                            active:border-gray-800 active:bg-gray-800
                                            focus:border-gray-750 focus:bg-gray-750 focus:ring-2
                                            focus-within:border-2 focus-within:border-gray-600 
                                            focus-within:bg-gray-750 focus-within:ring-primary
                                            transition duration-500 ease-in-out
                                            mx-auto lg:mx-0'
                            >
                                <input
                                    type='email'
                                    placeholder='Enter your email'
                                    className='flex-grow bg-transparent px-8 py-2 text-gray-400 focus:outline-none text-lg'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button
                                    type='submit'
                                    className='relative sm:flex gap-3 items-center justify-between text-white text-lg py-3 px-6 rounded-3xl mr-3 
                                        bg-gradient-to-r from-purple-500 via-purple-700 to-purple-700 shadow-subscribe overflow-hidden border-2 border-transparent hover:border-gray-300 transition-all duration-500 ease-in-out'
                                >
                                    <div className='opacity-0 hover:opacity-15 transition-all duration-500 ease-in-out absolute inset-0 h-full w-full bg-gradient-yellow-white' />
                                    <svg
                                        stroke='currentColor'
                                        fill='currentColor'
                                        strokeWidth='0'
                                        viewBox='0 0 24 24'
                                        className='w-7 h-6 text-gray-100'
                                        height='1em'
                                        width='1em'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path fill='none' d='M0 0h24v24H0z' />
                                        <path d='M22 8.98V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10.1c-.06.32-.1.66-.1 1 0 1.48.65 2.79 1.67 3.71L12 11 4 6v2l8 5 5.3-3.32c.54.2 1.1.32 1.7.32 1.13 0 2.16-.39 3-1.02zM16 5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z' />
                                    </svg>
                                    Get Access
                                </button>
                            </form>
                        </div>
                        <p className='text-gray-400 text-md mt-6'>Do make sure to check your spam folder if you don't see the email in your inbox.</p>
                    </div>
                </div>
            </div>
            <div className='w-full absolute inset-0 h-full z-[0]'>
                <div className='opacity-0 w-full h-full' style={{ opacity: 1 }}>
                    <div id='tsparticlesfullpage' className='h-full w-full'>
                        <canvas data-generated='true' style={{ width: '100%', height: '100%' }} aria-hidden='true' width='2007' height='1627'></canvas>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
