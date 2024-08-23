import React from 'react'
import { useRecoilValue } from 'recoil';
import { categoryItemAtom } from '@/store/client/categoryAtom';
import Input from '@/app/_components/input/Input';

const DefaultInfo = () => {
  
  const categoryItem = useRecoilValue(categoryItemAtom);
  console.log(categoryItem)

  return (
    <div className="mt-[1.5rem] h-auto border-b border-[#EBEBEB]">
        <p className="text-[1rem] text-[#1B1B1B] font-semibold leading-[1.375rem]">
          기본 정보
        </p>
        <div className="flex flex-row mt-[1rem] w-full gap-y-[1.25rem] items-center">
            <span className="w-[9rem] text-[0.875rem] text-[#707071] font-medium"> 이름 </span>
            <Input type="text" placeholder="이름을 입력해주세요." />
        </div>
        <div className="flex flex-row mt-[0.5rem] mb-[1rem] w-full gap-y-[1.25rem] items-center">
            <span className="w-[9rem] text-[0.875rem] text-[#707071] font-medium"> 순서 </span>
            <Input type="number" placeholder="순서를 입력해주세요." />
        </div>  
    </div>
  )
}

export default DefaultInfo