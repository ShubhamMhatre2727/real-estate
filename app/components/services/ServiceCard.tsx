import { Service_Type } from '@/app/lib/definitions'
import Image from 'next/image'
import React from 'react'

export default function ServiceCard({service}:{service:Service_Type}){
        return(
            <div className="flex flex-col items-center text-center bg-white p-10 rounded-3xl shadow-sm">
            <div className="bg-blue-700 w-fit p-4 mb-2 rounded-full shadow-lg shadow-blue-300">
                 <Image src={`${service.url}`} alt="" width={30} height={100}/>
             </div>
             <h3 className="text-lg font-semibold">
                 {service.text}
             </h3>
             <p className="text-sm text-gray-500">
             {service.description}
             </p>
            </div>
        )
    }
