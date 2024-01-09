import Image from "next/image"

const Credits = () => {
  return (
    <div className="flex mt-auto gap-x-3 items-center px-3 py-1.5 bg-clr-selected rounded-md">
      <Image
        src="/wallet.svg"
        alt="wallet icon"
        width={40}
        height={40}
        className="bg-[#494f64] p-1.5 rounded-md"
      />
      <div>
        <p className="text-white opacity-80 text-sm">Available credits</p>
        <p className="font-medium">222.10</p>
      </div>
    </div>
  )
}
export default Credits
