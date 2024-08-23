"use client";
import React from 'react'
import { Drawer } from "vaul";
import IconBox from './iconBox';
import DefaultInfo from './Info/defaultInfo';
import ExposureInfo from './Info/exposureInfo';
import { useRecoilValue } from 'recoil';
import { drawerIsOpenAtom, categoryItemAtom } from '@/store/client/categoryAtom';
import CategoryInfoContent from './Info/categoryInfoContent';
import CreateCategoryContent from './Create/createCategoryContent';

/* const getContentByMethods = () => {
  
} */

const CategoryDrawn = () => {

  const open = useRecoilValue(drawerIsOpenAtom);
  console.log(open);

  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        <button>카테고리 클릭 이벤트 테스트</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/10 z-10"/>
        <Drawer.Content className="bg-white flex flex-col h-full shadow-[-4_0px_80px_10px_rgba(0,0,0,0.3)] w-[51.5rem] px-[3rem] pt-[3rem] pb-[1.25rem] fixed bottom-0 right-0 z-10">
           {/* <CategoryInfoContent /> */}
           <CreateCategoryContent />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default CategoryDrawn