import Image from "next/image"
import Collage from "./Collage"

const About = () => {
  return (
    <div className="px-8 py-8">
        <p className="heads">WHO ARE WE</p>
        <h2 className="text-2xl font-semibold py-3">
        Assisting individuals in locating the appropriate real estate.
        </h2>
        <p className="text-gray-500 text-sm">
        Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.
        </p>

        <Collage/>

        <div>
        <div className="flex gap-6 px-8 py-6 shadow-lg">
            <Image src="/collage/smart_home.svg" alt="" width={40} height={40}/>
            <div>
                <h3 className="text-blue-700 text-lg">Donec porttitor euismod</h3>
                <p className="text-gray-500">Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
            </div>
        </div>
        <div className="flex gap-6 px-8 py-6 shadow-lg">
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