import Image from "next/image";

export default function Banner() {
  return (
    <div className="px-8">
      <div className="bg-blue-900 text-white w-fit mx-auto flex sm:flex-row-reverse flex-wrap rounded-3xl px-12 py-4"> 
        <div className="flex flex-wrap items-center gap-5">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold">Become a Agent</h2>
            <p className="text-sm sm:text-base opacity-90 py-2">
              Fusce venenatis tellus a felis scelerisque. venenatis tellus a
              felis scelerisque.
            </p>
          </div>

          <button className="py-3 px-8 bg-white text-blue-900 text-lg font-semibold rounded-full mt-6">
            Register Now
          </button>
        </div>
        <Image
          src="/trending/person_without_bg.png"
          alt="person-image"
          width={1000}
          height={100}
          className="w-96 sm:scale-125 translate-y-4 sm:-translate-y-4"
        />
      </div>
    </div>
  );
}
