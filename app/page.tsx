import { Faq } from "./components/Faq";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { HeaderMegaMenu } from "./components/Header";
import Hero from "./components/Hero";
import { SubscribeForm } from "./components/SubscribeForm";

export default function HomePage() {
  return <div>
    <HeaderMegaMenu />
    <Hero />
    <Features />
    <Faq />
    <Footer />
  </div>;
}
