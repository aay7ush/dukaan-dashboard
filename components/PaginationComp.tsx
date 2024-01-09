"use client"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useEffect, useState } from "react"

const PaginationComp = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div>
      {isClient && (
        <Pagination className="md:p-6">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                className="border border-clr-border rounded-md"
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                10
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">11</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="hidden md:flex">
                12
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="hidden md:flex">
                13
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="hidden md:flex">
                14
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="hidden lg:flex">
                15
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="hidden lg:flex">
                16
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="hidden lg:flex">
                17
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="hidden lg:flex">
                18
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                className="border border-clr-border rounded-md"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  )
}
export default PaginationComp
