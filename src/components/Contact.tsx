import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

const Contact: React.FC = () => {
    const { toast } = useToast()

    const handleEmailClick = () => {
        navigator.clipboard.writeText('tancao.work@gmail.com')
        toast({
            title: 'Email copied to clipboard!',
            description: 'You can now paste it anywhere you want.'
        })
    }

    return (
        <section id='contact' className='container mx-auto'>
            <div className='relative px-4 sm:px-8 lg:px-12'>
                <div className='mx-auto max-w-2xl lg:max-w-5xl'>
                    <h2 className='section-title'>Get In Touch</h2>
                    <div className='max-w-2xl mx-auto'>
                        <Card className='p-6 text-center'>
                            <p className='text-lg mb-6'>
                                I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just
                                say hello!
                            </p>
                            <div className='flex justify-center mb-8'>
                                <Button className='rounded-full px-6 flex items-center gap-2' onClick={handleEmailClick}>
                                    <Mail className='h-4 w-4' />
                                    tancao.work@gmail.com
                                </Button>
                            </div>
                            <div className='flex justify-center gap-4'>
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
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
