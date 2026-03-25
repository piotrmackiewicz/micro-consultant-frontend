import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ExpertCardSkeleton = () => {
  return (
    <Card size="sm" className="h-full border border-border">
      <CardHeader>
        <CardTitle>
          <div className="h-5 w-40 animate-pulse rounded bg-muted" />
        </CardTitle>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <div className="h-5 w-20 animate-pulse rounded-full bg-muted" />
          <div className="h-5 w-24 animate-pulse rounded-full bg-muted" />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="h-4 w-full animate-pulse rounded bg-muted" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
      </CardContent>
      <CardFooter className="justify-between border-t border-border">
        <div className="h-4 w-24 animate-pulse rounded bg-muted" />
        <div className="h-8 w-24 animate-pulse rounded-md bg-muted" />
      </CardFooter>
    </Card>
  );
};
