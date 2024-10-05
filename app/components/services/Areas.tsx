import Image from "next/image";
import { Propert_Type } from "@/app/lib/definitions";
import { properties } from "@/app/lib/placeholder-data";
export default function Areas() {
  return (
    <div className="px-8 sm:w-5/6 sm:p-0 mx-auto my-20">
            <p className="heads sm:text-lg py-2">AREAS ACROSS THE TOWN</p>
        <h1  className="text-4xl sm:text-5xl font-semibold">
            Neighborhood Properties
        </h1>
        <div className="w-fit mx-auto flex flex-wrap justify-between gap-6 sm:gap-12 sm: py-10">
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
        <div className={`relative w-[45%] ${(item.id===3 || item.id ===4)?"sm:w-[35%]":(item.id===5)?"sm:w-[60%]":"sm:w-[28%]"}`}>
            
        <Image src={`${item.url}`} alt="" width={300} height={100} className="w-full h-full sm:h-80 object-cover rounded-2xl brightness-75"/>

        <h3 className="absolute bottom-6 left-4 text-3xl sm:text-6xl text-white font-semibold opacity-70">
            {item.count}
        </h3>
        <p className="absolute bottom-2 left-4 text-sm sm:text-lg tracking-wider text-white">
            {item.place}
        </p>
        </div>
    )
}