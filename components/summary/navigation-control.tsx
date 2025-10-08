import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  sections: Array<{
    title: string;
    points: string[];
  }>;
  currentSection: number;
  totalSections: number;
  onPrevious: () => void;
  onNext: () => void;
  onSectionSelect: (index: number) => void;
};

export function NavigationControl({
  sections,
  currentSection,
  totalSections,
  onPrevious,
  onNext,
  onSectionSelect,
}: Props) {
  return (
    <div className="flex w-full justify-between gap-2">
      <Button
        disabled={currentSection === 0}
        onClick={onPrevious}
        variant="outline"
      >
        <ChevronLeftIcon />
      </Button>

      <div className="flex gap-2">
        {sections.map((section, index) => (
          <Button
            key={section.title}
            disabled={currentSection === index}
            onClick={() => onSectionSelect(index)}
            variant="outline"
          >
            {index + 1}
          </Button>
        ))}
      </div>

      <Button
        disabled={currentSection === totalSections - 1}
        onClick={onNext}
        variant="outline"
      >
        <ChevronRightIcon />
      </Button>
    </div>
  );
}
