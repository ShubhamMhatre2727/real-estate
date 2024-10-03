import Image from "next/image"

const LeftArrow = () => {
  return (
    <div className="border bg-white rotate-180 size-10 rounded-full grid place-content-center">
        <Image src="/right_arrow.svg" alt="right arrow" width={10} height={10}/>
    </div>
  )
}

export default LeftArrow