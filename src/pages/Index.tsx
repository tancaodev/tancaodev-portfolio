import React, { lazy, Suspense } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import FadeInSection from '@/components/FadeInSection'
import Footer from '@/components/Footer'

// Lazy load các components lớn
const About = lazy(() => import('@/components/About'))
const Experience = lazy(() => import('@/components/Experience'))
const Projects = lazy(() => import('@/components/Projects'))
const TechStack = lazy(() => import('@/components/TechStack'))
const Contact = lazy(() => import('@/components/Contact'))

const Index: React.FC = () => {
    return (
        <div className='min-h-screen'>
            <Navigation />
            {/* <Hero /> */}

            <Suspense fallback={<div className='h-screen flex items-center justify-center'>Loading...</div>}>
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
            </Suspense>
        </div>
    )
}

export default Index
