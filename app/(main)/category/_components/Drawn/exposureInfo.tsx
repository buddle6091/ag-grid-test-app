'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"

const ExposureInfo = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-[1.5rem] h-auto">
        <CollapsibleTrigger>
        <p className="flex text-[1rem] text-[#1B1B1B] font-semibold leading-[1.375rem] flex-row item-center">
          <span>노출 여부</span> 
          <Image src="/icon/arrow down.svg" alt="exposure" width={32} height={32} className="mt-[-5px] ml-[4rem] absolute"/>
        </p>
        </CollapsibleTrigger>
        <CollapsibleContent>
        <div className="flex flex-row mt-[1.38rem] w-full gap-y-[1.25rem]">
            <span className="w-[9rem] text-[0.875rem] text-[#707071] font-medium"> 앱 노출 </span>
            <Image src='/icon/check.svg' alt="appExposure" width={16} height={16} />
        </div>
        <div className="flex flex-row mt-[1.25rem] mb-[1rem] w-full gap-y-[1.25rem]">
            <span className="w-[9rem] text-[0.875rem] text-[#707071] font-medium"> 키오스크 노출 </span>
            <Image src='/icon/error.svg' alt="kioskExposure" width={16} height={16} />

        </div> 
        <div className="flex flex-row mt-[1.25rem] mb-[1rem] w-full gap-y-[1.25rem]">
            <span className="w-[9rem] text-[0.875rem] text-[#707071] font-medium"> 포스 노출 </span>
            <Image src='/icon/check.svg' alt="posExposure" width={16} height={16} />

        </div>  
        <hr className=" text-[#EBEBEB]" />
        </CollapsibleContent>
    </Collapsible>
  )
}

export default ExposureInfo