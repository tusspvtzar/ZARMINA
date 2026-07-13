"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-ivory px-6">
      <div className="max-w-md text-center">
        <div className="eyebrow mb-6">A moment of pause</div>
        <h1 className="font-display text-4xl text-charcoal">
          This page didn&apos;t load
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Something interrupted the weave. Please try again.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button onClick={() => reset()} className="btn-luxe">
            Try again
          </button>
          <a href="/" className="btn-luxe">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}
