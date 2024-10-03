import Image from "next/image"

const Banner = () => {
  return (
    <div className="px-8">
        <div className="overflow-x-hidden">
          <p className="text-gray-400 font-semibold mx-auto w-56 text-center">
            Trusted by 100+ Companies across the globe!
          </p>
          <div className="flex gap-8 marquee grayscale">
            <Image src="/client_logos/google.svg" alt="client-logo" width={100} height={100}/>
            <Image src="/client_logos/amazon.svg" alt="client-logo" width={100} height={100}/>
            <Image src="/client_logos/logitech.svg" alt="client-logo" width={100} height={100}/>
            <Image src="/client_logos/spotify.svg" alt="client-logo" width={100} height={100}/>
            <Image src="/client_logos/samsung.svg" alt="client-logo" width={100} height={100}/>
            <Image src="/client_logos/npm.svg" alt="client-logo" width={100} height={100}/>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 py-3 w-80 mx-auto">
        <div className="p-6 w-full shadow-md rounded-full grid place-content-center">
            <Image src="/Group 21.svg" alt="" width={260} height={100} />
        </div>
        <div className="p-3 w-full shadow-md rounded-full grid place-content-center">
            <Image src="/Group 45.svg" alt="" width={240} height={100} />
        </div>
        </div>
      </div>
  )
}

export default Banner