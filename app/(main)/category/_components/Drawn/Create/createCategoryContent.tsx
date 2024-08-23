"use client";
import React from 'react'
import { Drawer } from "vaul";
import IconBox from '../iconBox';
import DefaultInfo from './defaultInfo';
import ExposureInfo from './exposureInfo';
import { useRecoilValue } from 'recoil';
import { drawerIsOpenAtom, categoryItemAtom } from '@/store/client/categoryAtom';
import { DrawerFooter } from '@/components/ui/drawer';
import Button from '@/app/_components/button/Button';

const CreateCategoryContent = () => {

  const open = useRecoilValue(drawerIsOpenAtom);
  console.log(open);

  return (
    <><div className="flex justify-between flex-row w-full">
          <Drawer.Title className="text-[1.25rem] text-[#1B1B1B] font-bold leading-[1.625rem]">
              상품 카테고리 생성
          </Drawer.Title>
          <IconBox />
      </div><DefaultInfo /><ExposureInfo />
      <DrawerFooter className="w-full flex flex-wrap justify-between">
        <Button color="GRAY">취소</Button>
        <Button color="BLUE">저장하기</Button>
      </DrawerFooter>
      </>


  )
}

export default CreateCategoryContent