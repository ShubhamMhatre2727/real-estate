import Image from "next/image";

export default function Header() {
  return (
    <header className="hidden bg-blue-950 text-white  text-xs sm:flex  justify-between px-16 py-2">
        <div className="flex gap-2 items-center">
          <Image src="/navbar/pin.svg" alt="" width={13} height={100}/>
          <p>Rezilla, 18 Grattan St, Brooklyn</p>
        </div>

        <span className="flex gap-6 [&>*]:flex [&>*]:gap-2 items-center">
        <a href="tel:12062142298">
          <Image src="/footer/phone.svg" alt="" width={15} height={100} className="brightness-200"/>
          +1 206-214-2298
        </a>
        <a href="mailTo:support@rezilla.com">
          <Image src="/footer/mail.svg" alt="" width={15} height={100} className="brightness-200"/>
          support@rezilla.com
        </a>
        </span>
      </header>
  )
}
