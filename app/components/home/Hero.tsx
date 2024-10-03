import Slider from "./Slider";
import SearchForm from "./SearchForm";
import Banner from "./Banner";

export default function Hero() {
  return (
    <div className="relative">

      <div className="absolute -z-50 w-full h-screen bg-gradient-to-t from-blue-400 rounded-b-full"/>

      {/* slider */}
      <div className="px-8">
        <h3 className="heads py-2">
          REAL ESTATE
        </h3>
        <h1 className="text-4xl font-bold">Find a perfect home you love..!</h1>
        <p className="text-gray-400 text-sm py-4">
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
