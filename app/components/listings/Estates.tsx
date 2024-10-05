import { Estate_Type } from "@/app/lib/definitions";
import { estates } from "@/app/lib/placeholder-data"
import Image from "next/image"


export default function  Estates() {
    const list:Estate_Type[] = estates;
  return (
    <div className="flex flex-wrap sm:flex-nowrap w-fit gap-6 py-8">
        {
            list.map((item:Estate_Type)=>(
                <Estate key={`${item.title}`} item={item}/>
            ))
        }
        <Estate item={estates[0]}/>
    </div>
  )
}


function Estate({item}:{item:Estate_Type}){
    return (
        <div className="w-full sm:w-96 mx-auto">
        <div className="relative h-[60vw] sm:h-[20vw] rounded-2xl overflow-hidden">
    <Image src={`${item.url}`} alt=""width={500}height={100} className="size-full object-cover object-center brightness-[0.8]"/>
    {
        (item.icon !== null) && <Image src={`${item.icon}`} alt=""width={130} height={100} className="absolute bottom-4 left-6"/>
    }
        </div>

        <div className="font-semibold text-lg">
        ${` ${item.price}`}
        </div>
        <h4 className="text-sm font-semibold">
        {`${item.title}`}
        </h4>
        <p className="text-xs text-gray-700 py-1">
        {`${item.address}`}
        </p>

        <div className="flex gap-3">
            <div className="flex items-center text-xs">
                <Image src="/listings/icons/bed.svg" alt=""width={15} height={100}/>
                &nbsp;
                {`${item.beds}`} Beds
            </div>
            <div className="flex items-center text-xs">
                <Image src="/listings/icons/bathroom.svg" alt=""width={15} height={100}/>
                &nbsp;
                {`${item.baths}`} Baths
            </div>
        </div>
    </div>
    )
}