// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center overflow-x-hidden">
      <h1 className="text-3xl font-bold mb-4 text-primary-foreground">
        404 - Page Not Found
      </h1>
      <p className="mb-6 text-primary-foreground">Sorry, we couldn&apos;t find the page you were looking for.</p>
      <a href="/" className="cosmic-button">
        Go back home
      </a>
    </div>
  );
}
