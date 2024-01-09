import { Orders } from "@/constants"
import Image from "next/image"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"

const DataTable = () => {
  return (
    <Table className="mt-3 overflow-hidden rounded-md">
      <TableHeader className="bg-clr-bg-grey">
        <TableRow className="text-clr-bg-grey">
          <TableHead className="w-[100px] lg:w-[246px]">Order ID</TableHead>
          <TableHead className="w-[100px] lg:w-[246px] lg:flex items-center gap-x-1">
            Order date
            <Image
              src="/triangle.svg"
              alt="triangle icon"
              width={10}
              height={10}
              className="hidden lg:block"
            />
          </TableHead>
          <TableHead className="w-[100px] lg:w-[246px] text-right">
            Order amount
          </TableHead>
          <TableHead className="w-[100px] lg:w-[246px] text-right lg:flex justify-end items-center gap-x-1">
            Transaction fees
            <Image
              src="/info.svg"
              alt="info icon"
              width={15}
              height={15}
              className="hidden lg:block"
            />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array(19)
          .fill(Orders[0])
          .map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium text-clr-accent">
                {order.id}
              </TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell className="text-right">{order.amount}</TableCell>
              <TableCell className="text-right">
                {order.transactionFees}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}
export default DataTable
