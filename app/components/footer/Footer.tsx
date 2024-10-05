import Image from "next/image";
import QuickLinks from "./QuickLinks";
import Discovery from "./Discovery";

export default function Footer() {
  return (
    <div className="px-12 py-8 text-center flex flex-wrap justify-evenly gap-2 bg-blue-50">
        <div>
        <Image src="/icon.svg" alt="icon" width={100} height={100} className="mx-auto"/>
        <p className="text-gray-500 text-center">
        2728 Hickory StreetSalt  Lake City, UT 84104
        </p>
        <a href="tel:+1206-214-2298" className="flex items-center justify-center text-gray-500">
            <Image src="/footer/phone.svg" alt="" width={15} height={15}/>
        
           &nbsp; +1 206-214-2298
        </a>
        
        <a href="mailTo:support@rezilla.com" className="flex items-center justify-center text-gray-500">
            <Image src="/footer/mail.svg" alt="" width={15} height={15}/>
        
           &nbsp; support@rezilla.com
        </a>   
        </div> 

        <QuickLinks/>
        <Discovery/>

        <div>
        <strong className="text-xl">
        Subscribe to our Newsletter!
        </strong>
        
        <div className="flex items-center gap-8 bg-white pr-2 pl-4 py-2 rounded-full mx-auto">
            <input type="text" placeholder="Email address"/>
            <button type="submit" className="bg-blue-900 p-4 rounded-full">
                <Image src="/footer/arrow.svg" alt="" width={15} height={15}/>
            </button>
        </div>

        <div>
            <p className="font-semibold py-4">Follow Us On</p>
            <div className="flex items-center justify-center gap-8">
                <Image src="/footer/linkedin.svg" alt="" width={20} height={20}/>
                <Image src="/footer/facebook.svg" alt="" width={10} height={10}/>
                <Image src="/footer/instagram.svg" alt="" width={20} height={20}/>
            </div>
        </div>
        </div>
    </div>
  )
}
