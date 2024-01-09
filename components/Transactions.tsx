import Image from "next/image"
import CustomButton from "./CustomButton"
import DataTable from "./DataTable"
import PaginationComp from "./PaginationComp"

const Transactions = () => {
  return (
    <div className=" px-8">
      <p className="mb-5 text-xl text-clr-primary font-medium">
        Transactions | This Month
      </p>

      <div className="p-3 mb-6 shadow-3xl">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2 border border-clr-border rounded-md px-4 py-2.5 w-[220px] lg:w-[248px] ">
            <Image src="/search.svg" alt="search icon" width={20} height={20} />
            <input
              type="text"
              placeholder="Search by order ID..."
              className="bg-transparent placeholder-[#999] outline-none"
            />
          </div>

          <div className="flex gap-x-3">
            <CustomButton title="Sort" icon="/sort.svg" />
            <CustomButton icon="/download.svg" />
          </div>
        </div>

        <DataTable />

        <PaginationComp />
      </div>
    </div>
  )
}
export default Transactions
