"use client"

import Image from "next/image"
import { useState } from "react"

export default function HeroLight() {
    // Add state to track if images fail to load
    const [handImageError, setHandImageError] = useState(false)
    const [codingImageError, setCodingImageError] = useState(false)

    return (
        <section className="text-center py-20 bg-white">
            <div className="flex flex-col items-center mb-8">
                <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-text-light">
                    Hi{" "}
                    {!handImageError ? (
                        <Image
                            src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
                            width={40}
                            height={40}
                            alt="Waving hand"
                            className="inline animate-float"
                            onError={() => setHandImageError(true)}
                        />
                    ) : (
                        <span className="inline-block animate-pulse">👋</span>
                    )}
                    , I'm Jared Cruz!
                </h1>
                <p className="text-2xl text-gray-600 max-w-2xl mx-auto mb-6">
                    Computer Engineering Student | Puerto Rico
                </p>
                <div className="relative group mb-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                    {!codingImageError ? (
                        <Image
                            src="https://c.tenor.com/ccmSmZhIXNwAAAAC/code-lyoko-jeremy.gif"
                            width={400}
                            height={225}
                            alt="Coding gif"
                            className="rounded-lg shadow-2xl"
                            onError={() => setCodingImageError(true)}
                        />
                    ) : (
                        <div className="w-[400px] h-[225px] bg-blue-100 rounded-lg shadow-2xl flex items-center justify-center">
                            <span className="text-primary text-4xl">👨‍💻</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <a
                    href="https://flowcv.com/resume/elab410wok"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                    View My Resume
                </a>
            </div>
            <div className="text-lg text-gray-600 max-w-2xl mx-auto space-y-4">
                <p>🌍 Based in Puerto Rico 🇵🇷</p>
                <p>💻 Passionate about technology, coding, and solving real-world problems</p>
                <p>🚀 Constantly learning new languages and frameworks</p>
            </div>
        </section>
    )
}