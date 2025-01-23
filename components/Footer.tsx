<<<<<<< HEAD
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-card py-8 mt-16">
=======
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-card-background py-8 mt-16">
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Image
            src="https://img.shields.io/github/followers/JaredJomar?logo=github&style=for-the-badge&color=3382ed&labelColor=1c1917"
            alt="GitHub followers"
            width={150}
            height={28}
            className="rounded"
          />
          <Image
            src="https://wakatime.com/badge/user/628ab87c-405a-4a29-8c87-079bc17f01c2.svg"
            alt="WakaTime stats"
            width={190}
            height={28}
            className="rounded"
          />
        </div>
<<<<<<< HEAD
        <p className="text-muted-foreground">
=======
        <p className="text-text-secondary">
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061
          © {new Date().getFullYear()} Jared Cruz. All projects under MIT License.
        </p>
      </div>
    </footer>
  )
}

