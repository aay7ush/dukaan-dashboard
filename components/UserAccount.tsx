import Image from "next/image"
import Link from "next/link"

const UserAccount = () => {
  return (
    <div className="px-2 flex gap-x-3">
      <Image
        src="/image.png"
        alt="image"
        width={50}
        height={40}
        className="rounded-md"
      />
      <div className="w-full space-y-1">
        <p className="font-medium">Nishyan</p>
        <Link
          href="/"
          className="opacity-80 underline text-sm underline-offset-4"
        >
          Visit store
        </Link>
      </div>
      <Image
        src="/chevron-down.svg"
        alt="chevron-down icon"
        width={40}
        height={40}
      />
    </div>
  )
}
export default UserAccount
