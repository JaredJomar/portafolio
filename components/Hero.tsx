"use client"

import Image from "next/image"
import { useState } from "react"

export default function Hero() {
    const [handImageError, setHandImageError] = useState(false)
    const [codingImageError, setCodingImageError] = useState(false)

    return (
        <section className="text-center py-24 bg-gradient-to-b from-background to-background/80 transition-colors duration-300">
            <div className="flex flex-col items-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-text-light dark:bg-gradient-text-dark">
                    Hi{" "}
                    {!handImageError ? (
                        <Image
                            src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
                            width={48}
                            height={48}
                            alt="Waving hand"
                            className="inline animate-float"
                            loading="lazy"
                            sizes="48px"
                            onError={() => setHandImageError(true)}
                        />
                    ) : (
                        <span className="inline-block animate-pulse">👋</span>
                    )}
                    , I'm Jared Cruz!
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-medium">
                    Computer Engineering Student | Puerto Rico
                </p>
                <div className="relative group mb-12 transform transition-all duration-300 hover:scale-[1.01]">
                    {!codingImageError ? (
                        <Image
                            src="https://c.tenor.com/ccmSmZhIXNwAAAAC/code-lyoko-jeremy.gif"
                            width={450}
                            height={250}
                            alt="Coding gif"
                            className="rounded-xl shadow-xl dark:shadow-blue-900/30 border border-border/60"
                            priority
                            sizes="(max-width: 640px) 90vw, 450px"
                            onError={() => setCodingImageError(true)}
                        />
                    ) : (
                        <div className="w-[450px] h-[250px] bg-muted/50 rounded-xl shadow-xl flex items-center justify-center border border-border/60">
                            <span className="text-primary text-4xl">👨‍💻</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <a
                    href="https://flowcv.com/resume/elab410wok"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg"
                >
                    View My Resume
                </a>
            </div>

            <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
                <div className="card-interactive p-8 text-left">
                    <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                        <span className="text-primary text-xl">✨</span> About Me
                    </h3>
                    <ul className="space-y-4 text-muted-foreground">
                        <li className="flex items-start gap-3">
                            <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></span>
                            <span className="text-base">Based in Puerto Rico 🇵🇷</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></span>
                            <span className="text-base">Computer Engineering student passionate about full-stack development, cloud deployment, Artificial Intelligence 🤖, and system design</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></span>
                            <span className="text-base">Skilled in building applications that connect backend APIs, databases, authentication, and secure cloud deployment</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></span>
                            <span className="text-base">Constantly learning new languages, frameworks, and exploring real-world applications</span>
                        </li>
                    </ul>
                </div>

                <div className="card-interactive p-8 text-left">
                    <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                        <span className="text-primary text-xl">📬</span> Contact
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                        Have an opportunity, project idea, or collaboration in mind? Let's connect.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="mailto:jared.cruz@upr.edu"
                            className="btn-primary text-sm"
                        >
                            Email Me
                        </a>
                        <a
                            href="https://github.com/JaredJomar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary text-sm"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jared-cruz-880359263/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary text-sm"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
