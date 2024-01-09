"use client"

import { NavItems } from "@/constants"
import { useState } from "react"
import Credits from "./Credits"
import NavLink from "./NavLink"
import UserAccount from "./UserAccount"

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState<Number>(6)

  return (
    <section className="hidden lg:flex bg-clr-sidebar flex-col text-white py-4 px-[10px]">
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
    </section>
  )
}
export default Sidebar
