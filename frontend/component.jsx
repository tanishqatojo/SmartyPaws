/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ngNw0WT4znD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-gradient-to-br from-[#FFF8E1] to-[#E3F2FD] dark:from-[#1C1C1E] dark:to-[#2C2C2E]">
      <header className="flex items-center justify-between px-4 py-3 sm:px-6 md:px-8">
        <div className="flex items-center space-x-3">
          <PawPrintIcon className="h-8 w-8 text-[#FF6B6B]" />
          <h1 className="text-2xl font-bold text-[#4CAF50]">Smartypaws</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            className="rounded-md bg-[#FFA726] px-4 py-2 text-sm font-medium text-white hover:bg-[#FB8C00] focus:outline-none focus:ring-2 focus:ring-[#FFA726] focus:ring-offset-2 dark:bg-[#FFA726] dark:hover:bg-[#FB8C00] dark:focus:ring-[#FFA726]"
            href="#"
          >
            Parent Login
          </Link>
          <Link
            className="rounded-md bg-[#64B5F6] px-4 py-2 text-sm font-medium text-white hover:bg-[#42A5F5] focus:outline-none focus:ring-2 focus:ring-[#64B5F6] focus:ring-offset-2 dark:bg-[#64B5F6] dark:hover:bg-[#42A5F5] dark:focus:ring-[#64B5F6]"
            href="#"
          >
            Student Login
          </Link>
        </div>
      </header>
      <main className="flex-1 px-4 py-8 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center rounded-full bg-[#E8F5E9] px-4 py-2 text-[#4CAF50]">
              <PawPrintIcon className="mr-2 h-5 w-5" />
              <span className="text-sm font-medium">Smartypaws</span>
            </div>
            <h2 className="text-4xl font-bold text-[#4CAF50] sm:text-5xl">Unleash Your Child's Potential</h2>
            <p className="text-lg text-[#757575] dark:text-[#B0BEC5]">
              Smartypaws is an engaging educational platform that helps children with ADHD and dyslexia learn and grow
              through interactive games and activities.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-[#1C1C1E] dark:text-white">
              <div className="flex items-center justify-center">
                <img
                  alt="Animal 1"
                  className="h-20 w-20"
                  height={100}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width={100}
                />
              </div>
              <h3 className="mt-4 text-center text-xl font-bold text-[#4CAF50]">Playful Learning</h3>
              <p className="mt-2 text-center text-[#757575] dark:text-[#B0BEC5]">
                Engaging games and activities that make learning fun.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-[#1C1C1E] dark:text-white">
              <div className="flex items-center justify-center">
                <img
                  alt="Animal 2"
                  className="h-20 w-20"
                  height={100}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width={100}
                />
              </div>
              <h3 className="mt-4 text-center text-xl font-bold text-[#4CAF50]">Personalized Approach</h3>
              <p className="mt-2 text-center text-[#757575] dark:text-[#B0BEC5]">
                Tailored content to meet the unique needs of each child.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-[#1C1C1E] dark:text-white">
              <div className="flex items-center justify-center">
                <img
                  alt="Animal 3"
                  className="h-20 w-20"
                  height={100}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width={100}
                />
              </div>
              <h3 className="mt-4 text-center text-xl font-bold text-[#4CAF50]">Supportive Community</h3>
              <p className="mt-2 text-center text-[#757575] dark:text-[#B0BEC5]">
                Connect with other parents and educators for support.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-[#4CAF50] py-4 text-center text-white dark:bg-[#1C1C1E]">
        <p>© 2024 Smartypaws. All rights reserved.</p>
      </footer>
    </div>
  )
}

function PawPrintIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </svg>
  )
}
