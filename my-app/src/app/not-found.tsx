import Link  from "next/link";

// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center overflow-x-hidden">
      <h1 className="text-3xl font-bold mb-4 text-primary-foreground">
        404 - Page Not Found
      </h1>
      <p className="mb-6 text-primary-foreground">Sorry, we couldn&apos;t find the page you were looking for.</p>
      <p className="mb-6 text-primary-foreground">AI Resume is temporarily down due to budgetary limitations. We&apos;re working to restore service as soon as possible.</p>
      <Link href="/" className="cosmic-button">
        Go back home
      </Link>
    </div>
  );
}
