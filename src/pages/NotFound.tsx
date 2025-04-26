import { Link } from 'react-router-dom'

import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

const NotFound: React.FC = () => {
    return (
        <div className='min-h-screen'>
            <Navigation />

            <div className='flex flex-col min-h-[calc(100vh-6rem)]'>
                <div className='flex-1 flex items-center justify-center'>
                    <div className='text-center'>
                        <h1 className='text-9xl font-bold text-slate-900 dark:text-white mb-4'>404</h1>
                        <h2 className='text-2xl font-semibold text-slate-700 dark:text-gray-300 mb-8'>Oops! Page Not Found</h2>
                        <p className='text-slate-600 dark:text-gray-400 mb-8 max-w-md mx-auto'>
                            It looks like the page you are looking for does not exist or has been moved.
                        </p>
                        <Link
                            to='/'
                            className='inline-block bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300'
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default NotFound
