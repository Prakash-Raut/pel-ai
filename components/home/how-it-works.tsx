import { Card } from "@/components/ui/card";
import { Play, Sparkles, Upload } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Upload,
    title: "Upload Your PDF",
    description:
      "Simply drag and drop or select your PDF document. We support all standard PDF formats up to 50MB.",
    imageUrl:
      "https://lottie.host/embed/ee6cd002-c8be-4879-9509-293b85bf9180/mNim06U8jD.lottie",
  },
  {
    id: 2,
    icon: Sparkles,
    title: "AI Magic Happens",
    description:
      "Our advanced AI analyzes your document, extracts key insights, and transforms them into engaging visual content.",
  },
  {
    id: 3,
    icon: Play,
    title: "View Beautiful Reels",
    description:
      "Get your content transformed into stunning, swipeable reels that make complex information easy to understand in seconds.",
  },
];

const HowItWorks = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center py-12">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-balance font-bold text-4xl md:text-5xl">
          How It Works
        </h2>
        <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
          Transform your PDFs into engaging reels in three simple steps
        </p>
      </div>

      <div className="relative grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.id} className="p-8 shadow-none">
            <div className="mb-6">
              <div className="mx-auto h-20 w-20 rounded-2xl bg-muted p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-card">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
              </div>
            </div>

            {/* Content */}
            <h3 className="mb-3 text-center font-semibold text-2xl">
              {step.title}
            </h3>
            <p className="text-center text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
