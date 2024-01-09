"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const NavLink: React.FC<NavLinkProps> = ({ item, isActive, onClick }) => {
  const { href, label, icon } = item
  return (
    <Link
      href={href}
      className={cn(
        "flex px-4 py-2 rounded-md items-center gap-3 font-medium text-white opacity-80",
        isActive && "opacity-100 bg-clr-selected"
      )}
      onClick={onClick}
    >
      <Image src={icon} alt="icon" width={25} height={25} />
      <p className="mt-1">{label}</p>
    </Link>
  )
}
export default NavLink
