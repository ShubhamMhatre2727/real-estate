import Image from "next/image";
import { Propert_Type } from "@/app/lib/definitions";
import { properties } from "@/app/lib/placeholder-data";
export default function Areas() {
  return (
    <div className="px-8 py-10">
            <p className="heads">AREAS ACROSS THE TOWN</p>
        <h1  className="text-4xl font-semibold">
            Neighborhood Properties
        </h1>
        <div className="grid grid-cols-2 gap-4">
        {
            properties.map((item)=>{
                return(
                    <Property key={item.place} item={item}/>
                )
            })
        }
        </div>
    </div>
  )
}

function Property({item}:{item:Propert_Type}){
    return(
        <div className="relative size-fit">
            
        <Image src={`${item.url}`} alt="" width={300} height={100} className="min-w-1/2 aspect-square object-cover rounded-2xl brightness-75"/>

        <h3 className="absolute bottom-6 left-4 text-3xl text-white font-semibold opacity-70">
            {item.count}
        </h3>
        <p className="absolute bottom-2 left-4 text-sm text-white">
            {item.place}
        </p>
        </div>
    )
}