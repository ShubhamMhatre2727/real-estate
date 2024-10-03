import Image from "next/image"

const RightArrow = () => {
  return (
    <div className="border bg-white size-10 rounded-full grid place-content-center">
        <Image src="/right_arrow.svg" alt="right arrow" width={10} height={10}/>
    </div>
  )
}

export default RightArrow