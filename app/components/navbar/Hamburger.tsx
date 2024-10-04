import Image from "next/image"

const Hamburger = () => {
  return (
    <Image src="/hamburger_menu.svg" alt="menu" width={20} height={20} className="sm:hidden"/>
  )
}

export default Hamburger