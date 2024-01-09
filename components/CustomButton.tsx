import Image from "next/image"

const CustomButton: React.FC<CustomButtonProps> = ({ title, icon }) => {
  return (
    <button className="flex items-center gap-x-1.5 text-clr-secondary border border-clr-border rounded-md px-[14px] py-1.5">
      {title && <p>{title}</p>}
      <Image src={icon} alt="icon" width={20} height={20} />
    </button>
  )
}
export default CustomButton
