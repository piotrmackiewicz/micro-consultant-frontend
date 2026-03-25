import { PropsWithChildren } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Props = PropsWithChildren;

export const ExpertsPageWrapper = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <span className="text-lg font-bold ">MicroConsultant</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <Card className="mb-10 border border-border">
          <CardHeader>
            <CardTitle className="text-3xl sm:text-4xl">
              Find your expert
            </CardTitle>
            <CardDescription className="max-w-2xl text-base">
              Book a focused consultation with a vetted legal, tax, or financial
              professional in as little as 10 minutes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" size="sm">
              Browse all experts
            </Button>
          </CardContent>
        </Card>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight">
            Available experts
          </h2>
        </div>

        {children}
      </main>
    </div>
  );
};
