import Image from "next/image"

export default function Testimonials() {
  return (
    <div className="px-8 py-12">
        <p className="heads">TESTIMONIALS</p>
        <h2 className="text-3xl font-semibold">
        Look What Our Customers Say!
        </h2>
        <p className="text-gray-500 ">
        Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque. 
        </p>

        <Wrap/>
        <div className="flex w-full justify-center gap-4 py-4">
            <p className="w-12 h-1 bg-gray-500 rounded-full"></p>
            <p className="w-12 h-1 bg-gray-300 rounded-full"></p>
            <p className="w-12 h-1 bg-gray-300 rounded-full"></p>
        </div>
    </div>
  )
}

function Wrap(){
    return(
        <div className="rounded-3xl p-8 shadow-xl">
            <Image src="/trending/testimonials/comma.svg" alt="" width={70} height={100}/>
            <p className="py-4">
            I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn&rsqou;t be happier with our new place!
            </p>

            <hr/>
            <div className="flex gap-4 py-4">
                <Image src="/trending/testimonials/person.svg" alt="person-icon" width={50} height={100}/>
                <div>
                <p>Barbara D. Smith</p>
                <Image src="/trending/testimonials/rating.png" alt="rating-icon" width={100} height={100}/>
                </div>
            </div>
        </div>
    )
}