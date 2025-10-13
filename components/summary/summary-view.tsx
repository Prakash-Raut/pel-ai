"use client";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { NavigationControl } from "./navigation-control";
import { ProgressBar } from "./progress-bar";

const parseSection = (section: string) => {
  console.log(section);
  const [title, ...content] = section.split("\n");

  console.log("Title", title, "Content", content);

  const cleanTitle = title.trim();

  const points: string[] = [];

  let currentPoint = "";

  content.forEach((line) => {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith("•")) {
      if (currentPoint) {
        points.push(currentPoint.trim());
      }
      currentPoint = trimmedLine;
    } else if (trimmedLine) {
      currentPoint += " " + trimmedLine;
    } else {
      if (currentPoint) {
        points.push(currentPoint.trim());
      }
      currentPoint = "";
    }
  });

  if (currentPoint) {
    points.push(currentPoint.trim());
  }

  return {
    title: cleanTitle,
    points,
  };
};

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="font-bold text-2xl">{title}</h2>
);

const SummaryContent = ({ points }: { title: string; points: string[] }) => (
  <ul>
    {points.map((point) => (
      <li key={point}>{point}</li>
    ))}
  </ul>
);

export function SummaryView({ summary }: { summary: string }) {
  console.log("Summary", summary);
  const [currentSection, setCurrentSection] = useState<number>(0);

  const handleNext = () => {
    setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
  };

  const handlePrevious = () => {
    setCurrentSection((prev) => Math.max(prev - 1, 0));
  };

  const handleSectionSelect = (index: number) => {
    setCurrentSection(Math.min(Math.max(index, 0), sections.length - 1));
  };

  const sections = summary
    .split("\n# ")
    .map((section) => section.trim())
    .filter(Boolean)
    .map(parseSection);

  console.log("Sections", sections);

  return (
    <Card className="relative mt-4 flex h-[500px] flex-col pt-12">
      <ProgressBar currentSection={currentSection} sections={sections} />
      <CardTitle>
        <SectionTitle title={sections[currentSection].title} />
      </CardTitle>
      <CardContent className="flex-1 overflow-y-auto">
        <SummaryContent
          points={sections[currentSection].points}
          title={sections[currentSection].title}
        />
      </CardContent>
      <CardFooter>
        <NavigationControl
          currentSection={currentSection}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onSectionSelect={setCurrentSection}
          sections={sections}
          totalSections={sections.length}
        />
      </CardFooter>
    </Card>
  );
}
