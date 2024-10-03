"use client"
import Image from "next/image"
import LeftArrow from "./LeftArrow"
import RightArrow from "./RightArrrow"
import { useRef, useState } from "react"

const Slider = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [idx, setIdx] = useState(0);
    
    if(ref.current){
        ref.current.children[idx].scrollIntoView(false);  
    }

    function handleRight(){
        if(ref.current){
            setIdx((idx+1) % 4)
        }
    }
    function handleLeft(){
        if(ref.current){
            if(idx === 0)
                setIdx(3)
            else
                setIdx((idx-1) % 4)
        }
    }

  return (
    <div className="relative size-fit py-4">
        <div className="absolute top-[40%] left-1" onClick={handleLeft}>
        <LeftArrow/>
        </div>
        <div className="absolute top-[40%] right-1" onClick={handleRight}>
        <RightArrow/>
        </div>

        <div ref={ref} className="flex size-full overflow-hidden scroll-smooth">
            <Image className="rounded-3xl" src="/slides/slide_2.jpg" alt="slide" width={450} height={400}/>
            <Image className="rounded-3xl" src="/slides/slide_2.jpg" alt="slide" width={450} height={400}/>
            <Image className="rounded-3xl" src="/slides/slide_2.jpg" alt="slide" width={450} height={400}/>
            <Image className="rounded-3xl" src="/slides/slide_2.jpg" alt="slide" width={450} height={400}/>
        </div>
        <div className="flex gap-2 justify-center translate-y-1 [&>p]:rounded-full">
            <p className={`w-1/5 border-2 ${(idx===0)?"border-blue-500":"border-blue-50"}`}></p>
            <p className={`w-1/5 border-2 ${(idx===1)?"border-blue-500":"border-blue-50"}`}></p>
            <p className={`w-1/5 border-2 ${(idx===2)?"border-blue-500":"border-blue-50"}`}></p>
            <p className={`w-1/5 border-2 ${(idx===3)?"border-blue-500":"border-blue-50"}`}></p>
        </div>
    </div>
  )
}

export default Slider