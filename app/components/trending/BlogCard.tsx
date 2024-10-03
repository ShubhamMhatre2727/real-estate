import { Blog_Type } from "@/app/lib/definitions";
import Image from "next/image";

export default function BlogCard({blog}:{blog:Blog_Type}){
    return(
        <div className="divide-y-8 divide-transparent text-start">
            <div className="relative w-full rounded-3xl overflow-hidden text-center">
                <Image src={`${blog.url}`} alt="" width={1000} height={100} className="brightness-[0.8]"/>
                <div className="absolute top-0 left-8 bg-white text-black w-fit px-4 rounded-b-xl">
                    <p className="text-lg">{blog.date}</p>
                    <p className=" text-gray-500 -translate-y-2">{blog.day}</p>
                </div>
            </div>
            <h2 className="text-xl">
                {blog.title}
            </h2>
            <p className=" opacity-60">
            {blog.description}
            </p>
        </div>
    )
}