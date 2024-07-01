import Footer from "../../components/Footer/Footer";
import UserNavbar from "../../components/Navbar/UserNavbar";
import NewArrivals from "./NewArrivals/NewArrivals";
import Testimonials from "./Testimonials/Testimonials";
import AnnouncementSlider from "./Announcement/AnnouncementSlider";
import ShopPreview from "./ShopPreview/ShopPreview";
import BestSelling from "./BestSelling/BestSelling";
import LatestTech from "./LatestTech/LatestTech";
import Newsletter from "./Newsletter/Newsletter";
import Landing from "./Landing/Landing";
import Featured from "./Featured/Featured";
import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext/AuthContext";
import Cookies from "js-cookie";
export default function Home() {
  return (
    <>
      <AnnouncementSlider />
      <Landing />
      <ShopPreview />
      <NewArrivals />
      <BestSelling />
      <Featured />
      <Testimonials />
      <Newsletter />
      <LatestTech />
    </>
  );
}
