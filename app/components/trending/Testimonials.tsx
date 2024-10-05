import Image from "next/image"

export default function Testimonials() {
  return (
    <div className="px-8 sm:px-36 py-12 my-12 flex flex-wrap justify-between">
        <div className="w-full sm:w-5/12">
        <p className="heads sm:text-lg">TESTIMONIALS</p>
        <h2 className="text-3xl sm:text-5xl font-semibold py-3 sm:py-5">
        Look What Our Customers Say!
        </h2>
        <p className="text-gray-500 sm:text-lg sm:tracking-wider">
        Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque. 
        </p>
        </div>

        <div className="sm:w-5/12 sm:flex sm:items-center">
        <Wrap/>
        <div className="flex w-full sm:w-fit flex-wrap justify-center gap-4 py-4">
            <p className="w-12 sm:w-1 h-1 sm:h-12 bg-gray-500 rounded-full"></p>
            <p className="w-12 sm:w-1 h-1 sm:h-12 bg-gray-300 rounded-full"></p>
            <p className="w-12 sm:w-1 h-1 sm:h-12 bg-gray-300 rounded-full"></p>
        </div>
        </div>
    </div>
  )
}

function Wrap(){
    return(
        <div className=" sm:text-lg sm:font-semibold rounded-3xl p-8 sm:p-16 shadow-xl">
            <Image src="/trending/testimonials/comma.svg" alt="" width={70} height={100}/>
            <p className="py-4">
            I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn&rsqou;t be happier with our new place!
            </p>

            <hr/>
            <div className="flex gap-4 py-4">
                <Image src="/trending/testimonials/person.svg" alt="person-icon" width={50} height={100}/>
                <div className="w-full sm:flex items-center justify-between">
                <p>Barbara D. Smith</p>
                <Image src="/trending/testimonials/rating.png" alt="rating-icon" width={100} height={100}/>
                </div>
            </div>
        </div>
    )
}