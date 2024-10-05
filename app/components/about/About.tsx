import Image from "next/image"
import Collage from "./Collage"

const About = () => {
  return (
    <div className="sm:w-5/6 mx-auto px-8 sm:px-0 py-8 grid sm:grid-rows-2 sm:grid-cols-2">
        <div>
        <p className="heads sm:text-lg">WHO ARE WE</p>
        <h2 className="text-2xl sm:text-5xl font-semibold py-3">
        Assisting individuals in locating the appropriate real estate.
        </h2>
        <p className="text-gray-500 text-sm sm:text-base tracking-wider">
        Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.
        </p>
        </div>

        <div className="row-span-2">
        <Collage/>
        </div>

        <div>
        <div className="sm:w-96 mx-auto flex gap-6 px-8 py-6 shadow-lg rounded-3xl">
            <Image src="/collage/smart_home.svg" alt="" width={40} height={40}/>
            <div>
                <h3 className="text-blue-700 text-lg">Donec porttitor euismod</h3>
                <p className="text-gray-500">Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
            </div>
        </div>
        <div className="sm:w-96 mx-auto flex gap-6 px-8 py-6 shadow-lg rounded-3xl">
            <Image src="/collage/user_octagon.svg" alt="" width={40} height={40}/>
            <div>
                <h3 className="text-blue-700 text-lg">Donec porttitor euismod</h3>
                <p className="text-gray-500">Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About