import Image from "next/image"

const Collage = () => {
  return (
    <div className="relative w-full aspect-square [&>*]:object-cover my-8">
        <Image src="/collage/1.jpg" alt="" width={1000} height={100} className="absolute bottom-0 w-[47%] h-5/6 bg-slate-600 rounded-3xl drop-shadow-xl"/>
        <Image src="/collage/3.jpg" alt="" width={1000} height={100} className="absolute top-6 right-0 w-[47%] h-[45%] bg-zinc-300 rounded-3xl drop-shadow-xl"/>
        <Image src="/collage/2.jpg" alt="" width={1000} height={100} className="absolute bottom-8 right-0 w-[47%] h-2/6 bg-zinc-600 rounded-3xl drop-shadow-xl"/>
        
        <Image src="/collage/ring.svg" alt="" width={100} height={100} className="absolute left-1/2 -translate-x-1/2"/>
    </div>
  )
}

export default Collage