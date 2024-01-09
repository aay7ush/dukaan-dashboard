"use client"

import { NavItems } from "@/constants"
import { Menu } from "lucide-react"
import { useState } from "react"
import Credits from "./Credits"
import NavLink from "./NavLink"
import UserAccount from "./UserAccount"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

const MobileNav = () => {
  const [activeButton, setActiveButton] = useState<Number>(6)

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="mt-1" size={30} />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="flex bg-clr-sidebar flex-col text-white py-4 px-[10px] overflow-y-scroll scrollbar-hide w-[250px]"
        >
          <UserAccount />

          <ul className="grid gap-3 pt-6">
            {NavItems.map((item: NavItemProps, index: number) => (
              <li key={item.id}>
                <NavLink
                  item={item}
                  isActive={index === activeButton}
                  onClick={() => setActiveButton(index)}
                />
              </li>
            ))}
          </ul>

          <Credits />
        </SheetContent>
      </Sheet>
    </div>
  )
}
export default MobileNav
