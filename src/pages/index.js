import { NavigationMenu } from "../components/navbar";
import { HeroSection } from "../components/hero/index";
import { FeaturedProducts } from "../components/featuredProducts/index";
import { About } from "../components/about";
import { Banner } from "../components/banner";
import { NewsLetter } from "../components/newsLetter";
import { NewArrival } from "../components/newArrival";
import { Footer } from "../components/footer";
const MainPage = () => {
  return (
    <>
      <NavigationMenu />
      <HeroSection />
      <About />
      <FeaturedProducts />
      <Banner />

      <Footer />
    </>
  );
};
export default MainPage;
