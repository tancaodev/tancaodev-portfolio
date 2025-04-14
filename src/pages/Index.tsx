import React, { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FadeInSection from '@/components/FadeInSection'

const Index: React.FC = () => {
    useEffect(() => {
        document.title = 'TanCaoDev - Portfolio'
    }, [])

    return (
        <div className='min-h-screen'>
            <Navigation />
            {/* <Hero /> */}

            <FadeInSection>
                <About />
            </FadeInSection>

            <FadeInSection>
                <Experience />
            </FadeInSection>

            <FadeInSection>
                <Projects />
            </FadeInSection>

            <FadeInSection>
                <TechStack />
            </FadeInSection>

            <FadeInSection>
                <Contact />
            </FadeInSection>

            <Footer />
        </div>
    )
}

export default Index
