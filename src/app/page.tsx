import { getExperts } from "@/api/expert/getExperts";
import { ExpertCard } from "@/components/expert/ExpertCard/ExpertCard";
import { ExpertsPageWrapper } from "@/components/expert/ExpertsPageWrapper";
import type { ExpertProfileResponseDto } from "@/lib/types";

export default async function Home() {
  let expertsData: ExpertProfileResponseDto[] = [];
  let hasError = false;

  try {
    expertsData = await getExperts();
  } catch {
    hasError = true;
  }

  return (
    <ExpertsPageWrapper>
      {hasError ? (
        <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
          We could not load experts right now. Please try again in a moment.
        </div>
      ) : expertsData.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {expertsData.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>
      ) : (
        <div className="text-2xl font-semibold">
          There are no available experts at the moment
        </div>
      )}
    </ExpertsPageWrapper>
  );
}
