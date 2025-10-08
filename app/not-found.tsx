import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="px-4py-8 flex flex-col items-center justify-center justify-self-center text-center">
        <h2 className="text-base-content mb-6 text-5xl font-semibold">
          Whoops!
        </h2>
        <h3 className="text-base-content mb-1.5 text-3xl font-semibold">
          Something went wrong
        </h3>
        <p className="text-base-content mb-6 max-w-sm">
          The page you’re looking for isn’t found, we suggest you back to home.
        </p>
        <Link href="/" className="btn btn-primary btn-gradient">
          Back to home page
        </Link>
      </div>
    </div>
  );
}
