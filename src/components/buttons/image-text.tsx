"use client"
import { useRouter } from "next/navigation"

interface ImageTextProps {
    src: string
    alt: string
    text: string
    link: string
    onClick?: () => void
}

export const ImageText = ({ src, alt, text, link, onClick }: ImageTextProps) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(link);
    };

    return (
        <button className="flex flex-col items-center cursor-pointer" onClick={handleClick}>
            <img
                src={src}
                alt={alt}
                className="w-3/4 sm:w-3/5 md:w-4/5 lg:w-3/4"
            />
            <p className="mt-2 text-center">{text}</p>
        </button>
    )
} 
