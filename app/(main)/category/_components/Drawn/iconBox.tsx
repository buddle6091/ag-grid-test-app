import React from 'react'
import Image from 'next/image'
import { DrawerClose } from "@/components/ui/drawer"

const IconBox = () => {
  return (
    <div className="flex w-auto flex-row gap-4">
        <Image src="/icon/edit.svg" alt="edit" width={18} height={18} className="cursor-pointer"/>
        <Image src="/icon/more_gray.svg" alt="more" width={18} height={18} className="cursor-pointer"/>
        <DrawerClose>
        <Image src="/icon/close.svg" alt="close" width={18} height={18} className="cursor-pointer"/>
        </DrawerClose>
    </div>
  )
}

export default IconBox