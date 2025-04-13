import { useState } from 'react'

interface FacebookIconProps {
    className?: string
    size?: number
}

const FacebookIcon = ({ className = '', size = 32 }: FacebookIconProps) => {
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
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-opacity duration-300"
                style={{ opacity: isHovered ? 0 : 1 }}
            >
                <path
                    opacity="0.1"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 16.6718C0 7.8352 7.16344 0.671753 16 0.671753C24.8366 0.671753 32 7.8352 32 16.6718C32 25.5083 24.8366 32.6718 16 32.6718C7.16344 32.6718 0 25.5083 0 16.6718Z"
                    fill="white"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.6676 26.6718V17.5521H20.0706L20.389 14.7115H17.6676L17.6717 13.2892C17.6717 12.4594 17.7461 12.0157 18.9305 12.0157H20.372V9.17175H17.9689C15.0832 9.17175 14.0661 10.6369 14.0661 12.9517V14.7118H12.2666V17.5524H14.0661V26.6718H17.6676Z"
                    fill="white"
                />
            </svg>

            {/* Colored version (shown on hover) */}
            <svg
                width={size}
                height={size}
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0 transition-opacity duration-300"
                style={{ opacity: isHovered ? 1 : 0 }}
            >
                <path
                    opacity="0.1"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 16.6718C0 7.8352 7.16344 0.671753 16 0.671753C24.8366 0.671753 32 7.8352 32 16.6718C32 25.5083 24.8366 32.6718 16 32.6718C7.16344 32.6718 0 25.5083 0 16.6718Z"
                    fill="#1877F2"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.6676 26.6718V17.5521H20.0706L20.389 14.7115H17.6676L17.6717 13.2892C17.6717 12.4594 17.7461 12.0157 18.9305 12.0157H20.372V9.17175H17.9689C15.0832 9.17175 14.0661 10.6369 14.0661 12.9517V14.7118H12.2666V17.5524H14.0661V26.6718H17.6676Z"
                    fill="#1877F2"
                />
            </svg>
        </div>
    )
}

export default FacebookIcon 