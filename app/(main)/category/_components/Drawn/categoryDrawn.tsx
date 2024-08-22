"use client";
import React from 'react'
import { Drawer } from "vaul";
import IconBox from './iconBox';
import DefaultInfo from './defaultInfo';
import ExposureInfo from './exposureInfo';
import { TrendingUpIcon } from 'lucide-react';


const CategoryDrawn = () => {
  return (
    <Drawer.Root direction="right" open={true}>
      <Drawer.Trigger asChild>
        <button>카테고리 클릭 이벤트 테스트</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/10 z-10"/>
        <Drawer.Content className="bg-white flex flex-col h-full shadow-[-4_0px_80px_10px_rgba(0,0,0,0.3)] w-[51.5rem] p-[3rem] fixed bottom-0 right-0 z-10">
            <div className="flex justify-between flex-row w-full">
              <Drawer.Title className="text-[1.25rem] text-[#1B1B1B] font-bold leading-[1.625rem]">
                 상품 카테고리 상세
              </Drawer.Title>
              <IconBox />
            </div>
            <DefaultInfo />
            <ExposureInfo />

        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default CategoryDrawn