import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getZodiacAnalytics } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Progress } from "../ui/progress";

type ZodiacAnalyticsModalProps = {
  open: boolean;
  onOpenChange: (
    open: boolean
  ) => void;

  analytics: ReturnType<
    typeof getZodiacAnalytics
  >;
};

export function ZodiacAnalyticsModal({
  open,
  onOpenChange,
  analytics,
}: ZodiacAnalyticsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Zodiac Analytics
          </DialogTitle>
        </DialogHeader>

        <Accordion
          type="single"
          collapsible
          className="w-full"
        >
          {analytics.map((dept) => (
            <AccordionItem
              key={dept.department}
              value={dept.department}
            >
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <span>
                    {dept.department}
                  </span>

                  <span className="text-xs text-muted-foreground">
                    ({dept.totalMembers} members)
                  </span>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <div className="space-y-4 pt-2">
                  {dept.distribution
                    .sort((a, b) => Number(b.percentage) - Number(a.percentage))
                    .map((item) => (
                      <div
                        key={item.zodiac}
                        className="space-y-1"
                      >
                        <div className="flex justify-between text-sm">
                          <span>
                            {item.zodiac}
                          </span>

                          <span>
                            {item.count} •{" "}
                            {item.percentage}%
                          </span>
                        </div>

                        <Progress
                          value={Number(
                            item.percentage
                          )}
                        />
                      </div>
                    ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </DialogContent>
    </Dialog>
  );
}