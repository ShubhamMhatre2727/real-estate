import Image from "next/image";

export default function Banner() {
  return (
    <div className="px-8">
        <div className="bg-blue-900 text-white p-8 rounded-xl">
        <h2 className="text-3xl font-semibold">
            Become a Agent
        </h2>
        <p className="text-sm opacity-90 py-2">
        Fusce venenatis tellus a felis scelerisque. venenatis tellus a felis scelerisque. 
        </p>

        <button className="py-3 px-8 bg-white text-blue-900 text-lg font-semibold rounded-full mt-6">Register Now</button>

        <Image src="/trending/person_without_bg.png" alt="person-image" width={1000} height={100} className="translate-y-8"/>
    </div>
    </div>
  )
}
