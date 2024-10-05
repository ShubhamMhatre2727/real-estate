import Image from "next/image";
import { Team_type } from "@/app/lib/definitions";
import { team } from "@/app/lib/placeholder-data";

export default function Team() {
  return (
    <div className="px-8 text-center my-10">
        <p className="heads sm:text-lg">INTRODUCE YOURSELF TO</p>
        <h1 className="text-3xl sm:text-5xl font-semibold pt-2 pb-8">
            Our Team of Experts
        </h1>

        <div className="flex flex-wrap justify-around sm:justify-center gap-10 sm:gap-20 py-20">
            {
                team.map((member)=>{
                    return(
                        <Card key={member.name} member={member}/>
                    )
                })
            }
        </div>
    </div>
  )
}

function Card({member}:{member:Team_type}){
    return(
        <div className="text-center w-[40%] sm:w-48">
            <Image src={`${member.url}`} alt="person" width={500} height={100} className="aspect-[0.75] object-cover card-radius brightness-95"/>

            <h3 className=" pt-1 sm:text-2xl sm:font-semibold">
                {member.name}
            </h3>
            <p className="text-xs sm:text-base text-blue-700">
                {member.designation}
            </p>
        </div>
    )
}