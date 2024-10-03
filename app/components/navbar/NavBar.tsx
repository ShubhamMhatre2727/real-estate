import Hamburger from "./Hamburger"
import Icon from "./Icon"

const NavBar = () => {
  return (
    <>
    <nav>
      
    </nav>
    <nav className="sticky top-0 flex justify-between py-2 px-8 bg-white z-50">
       <Icon/>
       <Hamburger/>
    </nav>
    </>
  )
}

export default NavBar