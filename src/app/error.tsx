"use client";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function HomeError({ error, reset }: Props) {
  useEffect(() => {
    console.error("Route error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background">
      <main className="space-y-4 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <h2>Something went wrong</h2>
        <p className="text-sm text-muted-foreground">
          Please try again in a moment.
        </p>
        <Button onClick={reset}>Try again</Button>
      </main>
    </div>
  );
}
