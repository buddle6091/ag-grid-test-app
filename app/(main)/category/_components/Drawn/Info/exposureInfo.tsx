'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import { useRecoilValue } from'recoil';
import { categoryItemAtom } from '@/store/client/categoryAtom';

const ExposureInfo = () => {
    const [isOpen, setIsOpen] = useState(true)
    const exposureResult = useRecoilValue(categoryItemAtom);
    console.log(exposureResult?.appExposure)

    const getIconByExposureResult = (exposure: boolean) => {
      if (exposure == true) 
        return (
        <Image src='/icon/check.svg' alt="exposure check" width={16} height={16} />
    )
      if (exposure == false) 
        return (
        <Image src='/icon/error.svg' alt="exposure error" width={16} height={16} />
      )
    }

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
            {getIconByExposureResult(exposureResult?.appExposure)}
        </div>
        <div className="flex flex-row mt-[1.25rem] mb-[1rem] w-full gap-y-[1.25rem]">
            <span className="w-[9rem] text-[0.875rem] text-[#707071] font-medium"> 키오스크 노출 </span>
            {getIconByExposureResult(exposureResult?.kioskExposure)}
        </div> 
        <div className="flex flex-row mt-[1.25rem] mb-[1rem] w-full gap-y-[1.25rem]">
            <span className="w-[9rem] text-[0.875rem] text-[#707071] font-medium"> 포스 노출 </span>
            {getIconByExposureResult(exposureResult?.posExposure)}
        </div>  
        <hr className=" text-[#EBEBEB]" />
        </CollapsibleContent>
    </Collapsible>
  )
}

export default ExposureInfo