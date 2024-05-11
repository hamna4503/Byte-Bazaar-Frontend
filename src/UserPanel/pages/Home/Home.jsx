import Footer from "../../components/Footer/Footer";
import UserNavbar from "../../components/Navbar/UserNavbar";
import Carousel from "./Carousel";
import Video from "../../assets/images/home/home.webp";
import LandingPage from "./LandingPage";
import NewArrivals from "./NewArrivals/NewArrivals";
import ChooseUs from "./ChooseUs/ChooseUs";
import Sale from "./Sale/Sale";
// import video from "../../assets/images/home/homee.mp4"

export default function Home() {
  return (
    <>
      <UserNavbar />
      <Sale />
      <ChooseUs />
      <NewArrivals />
      <LandingPage />
      {/* <img src={Video} alt="Your Animation" className="w-full"/> */}
      {/* <video controls>
        <source src={video} type="video/mp4"/>
        Your browser does not support the video tag.
      </video> */}
      {/* <Carousel /> */}
      <Footer />
    </>
  );
}
