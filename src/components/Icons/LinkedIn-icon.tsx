import { useState } from 'react'

interface LinkedInIconProps {
    className?: string
    size?: number
}

const LinkedInIcon = ({ className = '', size = 32 }: LinkedInIconProps) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={`relative inline-block ${className} cursor-pointer`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ width: size, height: size }}
        >
            {/* Default white version */}
            <svg
                width={size}
                height={size}
                viewBox='0 0 32 33'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='transition-opacity duration-300'
                style={{ opacity: isHovered ? 0 : 1 }}
            >
                <path
                    opacity='0.1'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0 16.6718C0 7.8352 7.16344 0.671753 16 0.671753C24.8366 0.671753 32 7.8352 32 16.6718C32 25.5083 24.8366 32.6718 16 32.6718C7.16344 32.6718 0 25.5083 0 16.6718Z'
                    fill='white'
                />
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M11.5562 24.6718H8.2474V13.5837H11.5562V24.6718ZM9.90125 12.1799C8.85275 12.1799 8 11.3124 8 10.2639C8 9.21541 8.85275 8.34792 9.90125 8.34792C10.9497 8.34792 11.8025 9.21541 11.8025 10.2639C11.8025 11.3124 10.9497 12.1799 9.90125 12.1799ZM24 24.6718H20.6987V19.3524C20.6987 18.1299 20.6762 16.5837 18.9975 16.5837C17.2962 16.5837 17.0275 17.9012 17.0275 19.2637V24.6718H13.7225V13.5837H16.905V15.0087H16.9537C17.3875 14.1974 18.4312 13.3374 20.0262 13.3374C23.3825 13.3374 24.0013 15.4974 24.0013 18.3187V24.6718H24Z'
                    fill='white'
                />
            </svg>

            {/* Colored version (shown on hover) */}
            <svg
                width={size}
                height={size}
                viewBox='0 0 32 33'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute top-0 left-0 transition-opacity duration-300'
                style={{ opacity: isHovered ? 1 : 0 }}
            >
                <path
                    opacity='0.1'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0 16.6718C0 7.8352 7.16344 0.671753 16 0.671753C24.8366 0.671753 32 7.8352 32 16.6718C32 25.5083 24.8366 32.6718 16 32.6718C7.16344 32.6718 0 25.5083 0 16.6718Z'
                    fill='#0A66C2'
                />
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M11.5562 24.6718H8.2474V13.5837H11.5562V24.6718ZM9.90125 12.1799C8.85275 12.1799 8 11.3124 8 10.2639C8 9.21541 8.85275 8.34792 9.90125 8.34792C10.9497 8.34792 11.8025 9.21541 11.8025 10.2639C11.8025 11.3124 10.9497 12.1799 9.90125 12.1799ZM24 24.6718H20.6987V19.3524C20.6987 18.1299 20.6762 16.5837 18.9975 16.5837C17.2962 16.5837 17.0275 17.9012 17.0275 19.2637V24.6718H13.7225V13.5837H16.905V15.0087H16.9537C17.3875 14.1974 18.4312 13.3374 20.0262 13.3374C23.3825 13.3374 24.0013 15.4974 24.0013 18.3187V24.6718H24Z'
                    fill='#0A66C2'
                />
            </svg>
        </div>
    )
}

export default LinkedInIcon
