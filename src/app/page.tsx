import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-grow overflow-y-auto scroll-smooth p-4 md:p-6 lg:p-8">
      <div className="text-xl">
        <h1 className="text-4xl font-bold">Welcome to Daily Working Tools</h1>
        <p className="text-md mt-4">
          A collection of tools for daily working. Powered by Next.js, Shadcn
          UI,Tailwind CSS, and Vercel.
          <br></br>
          <br></br>
          Built with ❤️ by{" "}
          <Link className="text-blue-600" href="https://t.me/tt219395">
            @tt219395
          </Link>
        </p>
      </div>
    </div>
  );
}
