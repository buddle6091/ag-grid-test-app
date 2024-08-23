import React from 'react'
import { useRecoilValue } from 'recoil';
import { categoryItemAtom } from '@/store/client/categoryAtom';

const DefaultInfo = () => {
  
  const categoryItem = useRecoilValue(categoryItemAtom);
  console.log(categoryItem)

  return (
    <div className="mt-[1.5rem] h-auto border-b border-[#EBEBEB]">
        <p className="text-[1rem] text-[#1B1B1B] font-semibold leading-[1.375rem]">
          기본 정보
        </p>
        <div className="flex flex-row mt-[1.38rem] w-full gap-y-[1.25rem]">
            <span className="w-[9rem] text-[0.875rem] text-[#707071] font-medium"> 이름 </span>
            <span className="text-[0.875rem] text-[#1B1B1B] font-medium"> {categoryItem?.name} </span>
        </div>
        <div className="flex flex-row mt-[1.25rem] mb-[1rem] w-full gap-y-[1.25rem]">
            <span className="w-[9rem] text-[0.875rem] text-[#707071] font-medium"> 순서 </span>
            <span className="text-[0.875rem] text-[#1B1B1B] font-medium"> {categoryItem?.order} </span>
        </div>  
    </div>
  )
}

export default DefaultInfo