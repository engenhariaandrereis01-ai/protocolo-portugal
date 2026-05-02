import { Hero } from "@/components/sections/Hero";
import { ProblemProof } from "@/components/sections/ProblemProof";
import { Deliverables } from "@/components/sections/Deliverables";
import { ForWhom } from "@/components/sections/ForWhom";
import { Authority } from "@/components/sections/Authority";
import { Preview } from "@/components/sections/Preview";
import { Bonus } from "@/components/sections/Bonus";
import { PriceCard } from "@/components/sections/PriceCard";
import { Guarantee } from "@/components/sections/Guarantee";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCTA } from "@/components/sections/StickyMobileCTA";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Protocolo Portugal: Os 30 Primeiros Dias",
  description:
    "A sequência exata de NIF, NISS, SNS, banco e moradia para os primeiros 30 dias em Portugal. Verificado em fontes oficiais. Para brasileiros.",
  brand: {
    "@type": "Brand",
    name: "BR Fora do Brasil",
  },
  offers: {
    "@type": "Offer",
    price: "47.00",
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: "https://brforadobrasil.com/portugal",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <main>
        <Hero />
        <ProblemProof />
        <Deliverables />
        <ForWhom />
        <Authority />
        <Preview />
        <Bonus />
        <PriceCard />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
