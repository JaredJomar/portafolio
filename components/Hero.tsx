<<<<<<< HEAD
import Image from "next/image"
=======
<<<<<<< HEAD
import Image from "next/image"
=======
import Image from 'next/image'
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061
>>>>>>> c3fa5384aa439b15da03084628fd866ccae3b6f9

export default function Hero() {
  return (
    <section className="text-center py-20">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-text">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c3fa5384aa439b15da03084628fd866ccae3b6f9
          Hi{" "}
          <Image
            src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
            width={40}
            height={40}
            alt="Waving hand"
            className="inline animate-float"
          />
          , I'm Jared Cruz!
        </h1>
        <p className="text-2xl text-muted-foreground max-w-2xl mx-auto mb-6">
          Computer Engineering Student | Puerto Rico
        </p>
        <div className="relative group mb-8">
          <Image
            src="https://c.tenor.com/ccmSmZhIXNwAAAAC/code-lyoko-jeremy.gif"
            width={400}
            height={225}
            alt="Coding gif"
            className="rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<<<<<<< HEAD
=======
=======
          Hi <Image src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif" width={40} height={40} alt="Waving hand" className="inline animate-float" />, I'm Jared Cruz!
        </h1>
        <p className="text-2xl text-text-secondary max-w-2xl mx-auto mb-6">
          Computer Engineering Student | Puerto Rico
        </p>
        <div className="relative group mb-8">
          <Image 
            src="https://c.tenor.com/ccmSmZhIXNwAAAAC/code-lyoko-jeremy.gif" 
            width={400} 
            height={225} 
            alt="Coding gif" 
            className="rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 bg-primary-color bg-opacity-30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061
>>>>>>> c3fa5384aa439b15da03084628fd866ccae3b6f9
        </div>
        <a
          href="https://flowcv.com/resume/elab410wok"
          target="_blank"
          rel="noopener noreferrer"
<<<<<<< HEAD
          className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
=======
<<<<<<< HEAD
          className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
=======
          className="bg-primary-color hover:bg-secondary-color text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061
>>>>>>> c3fa5384aa439b15da03084628fd866ccae3b6f9
        >
          View My Resume
        </a>
      </div>
<<<<<<< HEAD
      <div className="text-lg text-muted-foreground max-w-2xl mx-auto space-y-4">
=======
<<<<<<< HEAD
      <div className="text-lg text-muted-foreground max-w-2xl mx-auto space-y-4">
=======
      <div className="text-lg text-text-secondary max-w-2xl mx-auto space-y-4">
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061
>>>>>>> c3fa5384aa439b15da03084628fd866ccae3b6f9
        <p>🌍 Based in Puerto Rico 🇵🇷</p>
        <p>💻 Passionate about technology, coding, and solving real-world problems</p>
        <p>🚀 Constantly learning new languages and frameworks</p>
      </div>
    </section>
  )
}

