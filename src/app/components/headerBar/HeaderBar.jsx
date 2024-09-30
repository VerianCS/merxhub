"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import Merx from "@/app/public/merx.png"

export default function FancyHeaderBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    const pageAnchors = {
        Índice: "#index",
        Servicios: "#services",
        Productos: "#products",
        Galería: "#slideshow",
        Contacto: "#contact",
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out shadow-md ${
                isScrolled ? 'bg-orange-100 bg-opacity-80 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
                <div className="container mx-auto px-4 py-3">
                    <nav className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image src={Merx} alt="MerxHub Logo" width={40} height={40} className="rounded-full" />
                            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                MerxHub
                            </h1>
                        </Link>
                        <div className="hidden md:flex items-center space-x-8">
                            {Object.entries(pageAnchors).map(([key, value]) => (
                                <Link key={key} href={value} className="relative group">
                                    <span className="text-lg font-semibold text-gray-700 group-hover:text-orange-500 transition-colors duration-200">
                                        {key.charAt(0).toUpperCase() + key.slice(1)}
                                    </span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-200 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </div>
                        <div className="md:hidden">
                            <button className="text-gray-700 hover:text-orange-500 focus:outline-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}