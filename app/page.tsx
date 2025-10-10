import CtaBanner from "@/components/home/cta-banner";
import Features from "@/components/home/feature";
import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";
import HowItWorks from "@/components/home/how-it-works";
import Navbar from "@/components/home/navbar";
import Pricing from "@/components/home/pricing";
import ProductDemo from "@/components/home/product-demo";
import Testimonial from "@/components/home/testimonials";
import { getCurrentUser } from "@/lib/auth-util";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <>
      <Navbar />
      <main className="container px-4 py-2">
        <div className="mx-auto grid max-w-5xl gap-6">
          <Hero />
          <ProductDemo />
          <Features />
          <HowItWorks />
          <Pricing />
          <Testimonial />
          {/* <FAQ /> */}
          <CtaBanner />
        </div>
      </main>
      <Footer />
    </>
  );
}
