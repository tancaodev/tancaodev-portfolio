const Experience: React.FC = () => {
    const experiences = [
        {
            title: 'Junior Frontend Developer',
            company: 'Meowcart Ecommerce',
            period: 'July 2024 - Feb 2025',
            description: [
                'Worked on various Shopify projects, including Crocs, FitFlop, Babeeni, SEESON, Bupbes,LiiLash,...',
                'Developed and maintained responsive web applications for clients across various industries. Collaborated with designers to ensure pixel-perfect implementations.',
                'Enhancing user experience through bug fixing and performance optimization.',
                'Collaborated with the Back-End team for seamless API integration.',
                'Engaged directly with clients to gather requirements, develop new features, and assist in the integration of third-party services and platforms.'
            ],
            skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Firebase', 'Shopify', 'Liquid']
        },
        {
            title: 'Intern/Fresher Software Engineer',
            company: 'Meowcart Ecommerce',
            period: 'April 2024 - July 2024',
            description: [
                'Participated in learning and working with Shopify Theme and Shopify App platforms.',
                "Collaborated with the Intern team to develop Meow-Login app, an application integrated into users' Shopify Theme stores, enabling phone number login and OTP verification via SMS/Zalo."
            ]
        }
    ]

    return (
        <section id='experience' className='container mx-auto'>
            <h2 className='section-title'>Work Experience</h2>
            <div className='max-w-3xl mx-auto'>
                <ol className='relative border-s border-gray-200 dark:border-gray-700'>
                    {experiences.map((exp, index) => (
                        <li key={index} className={`ms-4 ${index !== experiences.length - 1 ? 'mb-10' : ''}`}>
                            <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
                            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>{exp.period}</time>
                            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{exp.title}</h3>
                            <p className='text-base font-normal text-gray-500 dark:text-gray-400'>{exp.company}</p>
                            {Array.isArray(exp.description) ? (
                                <ul className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside space-y-2'>
                                    {exp.description.map((item, descIndex) => (
                                        <li key={descIndex}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>{exp.description}</p>
                            )}
                            <div className='flex flex-wrap gap-2'>
                                {exp?.skills &&
                                    exp.skills.map((skill, skillIndex) => (
                                        <span key={skillIndex} className='bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm'>
                                            {skill}
                                        </span>
                                    ))}
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}

export default Experience
