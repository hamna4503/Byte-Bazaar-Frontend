import Footer from "../../components/Footer/Footer";
import UserNavbar from "../../components/Navbar/UserNavbar";
import Carousel from "./Carousel";
import LandingPage from "./LandingPage";
import NewArrivals from "./NewArrivals/NewArrivals";
import ChooseUs from "./ChooseUs/ChooseUs";
import Testimonials from "./Testimonials/Testimonials";
import AnnouncementSlider from "./Announcement/AnnouncementSlider";
import ShopPreview from "./ShopPreview/ShopPreview";
import BestSelling from "./BestSelling/BestSelling";
import LatestTech from "./LatestTech/LatestTech";
import Newsletter from "./Newsletter/Newsletter";
import Landing from "./Landing/Landing";

export default function Home() {
  return (
    <>
      <UserNavbar />
      <AnnouncementSlider />
      <Landing/>
      <ShopPreview />
      <ChooseUs />
      <NewArrivals />
      <LatestTech />
      <BestSelling />
      <LandingPage />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}
