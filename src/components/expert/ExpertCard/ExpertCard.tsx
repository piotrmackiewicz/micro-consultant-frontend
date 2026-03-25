import { ExpertProfileResponseDto, Specialization } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatPrice } from "@/app/utils/formatPrice";

const SPECIALIZATION_LABELS: Record<Specialization, string> = {
  TAX_LAW: "Tax Law",
  CORPORATE_LAW: "Corporate Law",
  CIVIL_LAW: "Civil Law",
  ACCOUNTING: "Accounting",
  PAYROLL: "Payroll",
  FINANCIAL_PLANNING: "Financial Planning",
  INVESTMENT_ADVISORY: "Investment Advisory",
  INSURANCE: "Insurance",
};

type Props = {
  expert: ExpertProfileResponseDto;
};

export const ExpertCard = ({ expert }: Props) => {
  const startingPrice =
    expert.pricings.length > 0
      ? Math.min(...expert.pricings.map((p) => p.price))
      : undefined;

  return (
    <Card size="sm" className="h-full border border-border">
      <CardHeader>
        <CardTitle>
          {expert.firstName} {expert.lastName}
        </CardTitle>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {expert.specializations.map((s) => (
            <Badge key={s} variant="secondary">
              {SPECIALIZATION_LABELS[s]}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {expert.bio}
        </p>
      </CardContent>
      <CardFooter className="justify-between border-t border-border">
        {startingPrice ? (
          <span className="text-sm text-muted-foreground">
            From{" "}
            <span className="font-semibold text-foreground">
              {formatPrice(startingPrice)}
            </span>
          </span>
        ) : null}
        <Button size="sm">View profile</Button>
      </CardFooter>
    </Card>
  );
};
