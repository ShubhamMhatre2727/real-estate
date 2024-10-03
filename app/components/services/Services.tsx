import { Service_Type } from "@/app/lib/definitions"
import { services } from "@/app/lib/placeholder-data"
import ServiceCard from "./ServiceCard"
import Areas from "./Areas"
import Team from "./Team"

export default function Services() {
  return (
    <div>
        <div className="px-8 py-12 bg-gray-100">
        <p className="tracking-widest text-sm font-mediam text-center">OUR SERVICES</p>
        <h2 className="text-2xl font-semibold text-center mx-auto w-56 sm:w-full">
            Donec porttitor euismod dignissim
        </h2>

        <div className="flex flex-col gap-6 py-8">
           {
            services.map((service:Service_Type)=>{
                return (
                    <ServiceCard key={`${service.text}`} service={service}/>
                )
            })
           }
        </div>

    </div>
        <Areas/>
        <Team/>
    </div>
  )
}