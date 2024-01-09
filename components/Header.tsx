import Image from "next/image"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <div className=" flex justify-between items-center border-b border-clr-border py-3 px-8">
      <div className="flex items-center gap-x-4">
        <MobileNav />
        <p className="text-clr-primary">Payments</p>
        <div className="text-clr-secondary flex gap-x-1.5 text-sm items-center">
          <Image src="/help.svg" alt="help icon" width={16} height={20} />
          <p>How it works</p>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-x-2 px-4 py-2 rounded-md bg-clr-bg-grey w-[400px]">
        <Image src="/search.svg" alt="search icon" width={16} height={16} />
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="bg-transparent w-60 placeholder-[#808080] outline-none"
        />
      </div>

      <div className="flex gap-x-3">
        <button className="lg:hidden bg-clr-circle-grey w-10 h-10 rounded-full grid place-content-center">
          <Image src="/search.svg" alt="message icon" width={20} height={20} />
        </button>
        <button className="bg-clr-circle-grey w-10 h-10 rounded-full grid place-content-center">
          <Image src="/message.svg" alt="message icon" width={20} height={20} />
        </button>
        <button className="bg-clr-circle-grey w-10 h-10 grid place-content-center rounded-full">
          <Image
            src="/triangle.svg"
            alt="triangle icon"
            width={15}
            height={15}
          />
        </button>
      </div>
    </div>
  )
}
export default Header
