import { ExpertCardSkeleton } from "@/components/expert/ExpertCard/ExpertCardSkeleton";
import { ExpertsPageWrapper } from "@/components/expert/ExpertsPageWrapper";

export default function HomeLoading() {
  return (
    <ExpertsPageWrapper>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {[...Array(4)].map((_, idx) => (
          <ExpertCardSkeleton key={idx} />
        ))}
      </div>
    </ExpertsPageWrapper>
  );
}
