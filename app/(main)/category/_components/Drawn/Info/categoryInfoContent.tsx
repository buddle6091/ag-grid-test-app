"use client";
import React from 'react'
import { Drawer } from "vaul";
import IconBox from '../iconBox';
import DefaultInfo from './defaultInfo';
import ExposureInfo from './exposureInfo';
import { useRecoilValue } from 'recoil';
import { drawerIsOpenAtom, categoryItemAtom } from '@/store/client/categoryAtom';

const CategoryInfoContent = () => {

  const open = useRecoilValue(drawerIsOpenAtom);
  console.log(open);

  return (
    <><div className="flex justify-between flex-row w-full">
          <Drawer.Title className="text-[1.25rem] text-[#1B1B1B] font-bold leading-[1.625rem]">
              상품 카테고리 상세
          </Drawer.Title>
          <IconBox />
      </div><DefaultInfo /><ExposureInfo /></>


  )
}

export default CategoryInfoContent