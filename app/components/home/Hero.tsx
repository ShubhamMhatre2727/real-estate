import Slider from "./Slider";
import SearchForm from "./SearchForm";
import Banner from "./Banner";

export default function Hero() {
  return (
    <div className="relative flex flex-wrap justify-evenly sm:px-8 py-8">

      <div className="absolute -z-50 w-full h-screen bg-gradient-to-t from-blue-200 rounded-b-full"/>

      {/* slider */}
      <div className="px-8 sm:w-1/2">
        <h3 className="heads sm:text-lg py-2 sm:p-0">
          REAL ESTATE
        </h3>
        <h1 className="text-4xl sm:text-5xl font-bold">Find a perfect <br/> home you love..!</h1>
        <p className="text-gray-400 py-4 sm:py-2 sm:w-11/12 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quae
          temporibus facere, dignissimos quo tenetur impedit fugit eos aut
          nostrum.
        </p>

        <Slider />
      </div>

      {/* search Form */}
      <SearchForm/>

      {/* Banner */}
      <Banner/>
    </div>
  );
}
