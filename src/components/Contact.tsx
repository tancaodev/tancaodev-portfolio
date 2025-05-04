import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

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
            <h2 className='section-title'>Get In Touch</h2>
            <div className='max-w-2xl mx-auto'>
                <Card className='p-6 text-center'>
                    <p className='text-lg mb-6'>
                        I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just say hello!
                    </p>
                    <div className='flex justify-center mb-8'>
                        <Button className='rounded-full px-6 flex items-center gap-2' onClick={handleEmailClick}>
                            <Mail className='h-4 w-4' />
                            tancao.work@gmail.com
                        </Button>
                    </div>

                    {/* TODO: SEND EMAIL FUNCTION */}
                    {/* <div className='flex flex-col gap-3 mb-8'>
                        <h2 className='text-2xl font-semibold text-left'>Email Me 🚀</h2>
                        <Input type='email' placeholder='Your email' name='from_email' />
                        <Input type='text' placeholder='Your name' name='from_name' />
                        <Input type='text' placeholder='Subject' name='subject' />
                        <Textarea placeholder='Message' name='message'/>
                        <Button className='rounded-full px-6 flex justify-center items-center gap-2' onClick={handleEmailClick}>
                            <Mail className='h-4 w-4' />
                            tancao.work@gmail.com
                        </Button>
                    </div> */}
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
        </section>
    )
}

export default Contact
