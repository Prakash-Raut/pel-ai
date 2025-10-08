import { cn } from "@/lib/utils";

type Props = {
  sections: Array<{
    title: string;
    points: string[];
  }>;
  currentSection: number;
};

export function ProgressBar({ sections, currentSection }: Props) {
  return (
    <div className="absolute top-0 right-0 left-0 z-20 border-rose-50/10 border-b bg-background/80 pt-4 pb-2 backdrop-blur-sm">
      <div className="flex gap-2 px-4">
        {sections.map((section, index) => (
          <div
            className="relative h-2 flex-1 overflow-hidden rounded-full bg-rose-500/10"
            key={section.title}
          >
            <div
              className={cn(
                "h-full rounded-full transition-all duration-500",
                index === currentSection
                  ? "w-full bg-gradient-to-r from-rose-400 to-rose-600 shadow-md shadow-rose-500/30"
                  : currentSection === index
                    ? "w-full bg-rose-500/20"
                    : "w-0",
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
