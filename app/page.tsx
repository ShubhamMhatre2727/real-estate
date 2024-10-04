import NavBar from "@/app/components/navbar/NavBar";
import Hero from "./components/home/Hero";
import About from "./components/about/About";
import Listings from "./components/listings/Listings";
import Services from "./components/services/Services";
import Trending from "./components/trending/Trending";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <NavBar/>
      <Hero/>
      <About/>
      <Listings/>
      <Services/>
      <Trending/>
      <Footer/>
      <p className="bg-black text-gray-400 text-center text-xs py-2">
        © Rezilla – All rights reserved
        </p>
    </div>
  );
}
