import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { Badge } from "../ui/badge";

const ProductDemo = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center py-12">
      <div className="mb-16 text-center">
        <Badge className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
          <Play className="h-4 w-4" />
          <span className="font-medium text-sm">Live Demo</span>
        </Badge>
        <h2 className="mb-4 text-balance font-bold text-4xl md:text-5xl">
          See Saaransh AI in Action
        </h2>
        <p className="mx-auto max-w-2xl text-pretty text-lg">
          Watch how we transform complex PDFs into beautiful, easy-to-understand
          reels
        </p>
      </div>

      <Card className="border-none shadow-none">
        {/* Replace the src with your actual Supademo embed URL */}
        <iframe
          src="https://app.supademo.com/demo/cm7lzg1gc1mwqddum7swzvy4m"
          className="h-[450px] min-w-5xl"
          title="Saaransh AI Product Demo"
          allowFullScreen
          loading="lazy"
        />
      </Card>
    </section>
  );
};

export default ProductDemo;
