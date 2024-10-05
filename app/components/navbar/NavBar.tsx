import Image from "next/image"
import Hamburger from "./Hamburger"
import Icon from "./Icon"

const NavBar = () => {
  return (
      <nav className="sticky top-0 flex justify-between py-2 px-8 sm:px-16 bg-white z-50">
      <div className="hidden sm:flex items-center text-sm">
        <a href="" className="px-4 py-2 rounded-full bg-blue-200">Home</a>
        <a href="" className="px-4 py-2 rounded-full bg-transparent">About</a>
        <a href="" className="px-4 py-2 rounded-full bg-transparent">Listings</a>
        <a href="" className="px-4 py-2 rounded-full bg-transparent">Services</a>
        <a href="" className="px-4 py-2 rounded-full bg-transparent">Blogs</a>
      </div>
       <Icon/>
       <Hamburger/>

       <div className="hidden sm:flex items-center gap-4 [&>a]:inline-flex [&>a]:items-center [&>a]:gap-2 text-sm tracking-wide">
        <a href="">
          <Image src="/navbar/user.svg" alt="user-icon" width={17} height={100}/>
          <p>Login/Register</p>
        </a>

        <a href="" className="text-white bg-blue-950 size-fit px-4 py-2 rounded-full">
          <Image src="/navbar/home.svg" alt="" width={20} height={100}/>
          <p>Add Listing</p>
        </a>
       </div>
    </nav>
  )
}

export default NavBar