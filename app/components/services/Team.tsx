import Image from "next/image";
import { Team_type } from "@/app/lib/definitions";
import { team } from "@/app/lib/placeholder-data";

export default function Team() {
  return (
    <div className="px-8 text-center">
        <p className="heads">INTRODUCE YOURSELF TO</p>
        <h1 className="text-3xl font-semibold pt-2 pb-8">
            Our Team of Experts
        </h1>

        <div className="flex flex-wrap justify-around gap-10">
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
        <div className="text-center w-[40%]">
            <Image src={`${member.url}`} alt="person" width={500} height={100} className="aspect-[0.75] object-cover card-radius brightness-95"/>

            <h3 className=" pt-1">
                {member.name}
            </h3>
            <p className="text-xs text-blue-700">
                {member.designation}
            </p>
        </div>
    )
}