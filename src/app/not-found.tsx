import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-ivory px-6">
      <div className="max-w-md text-center">
        <div className="eyebrow mb-6">Error 404</div>
        <h1 className="font-display text-6xl md:text-7xl text-charcoal">
          Page not found
        </h1>
        <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
          The page you were looking for has wandered off the loom.
        </p>
        <div className="mt-10">
          <Link href="/" className="btn-luxe">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
