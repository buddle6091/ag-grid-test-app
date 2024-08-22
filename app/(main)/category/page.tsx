import React from 'react' 
import SearchInput from '@/app/_components/input/SearchInput'
import MainLayout from '@/app/_layout/MainLayout'
import ItsmeCategoryGrid from './_components/itsmeCategoryGrid'
import Button from '@/app/_components/button/Button'
import CategoryDrawn from './_components/Drawn/categoryDrawn'

const CategoryPage = () => {
  return (
    <MainLayout>
      <span className="text-[1.125rem] font-semibold leading-6"> 상품 카테고리 </span>
      <section className="flex mt-[1rem] w-full h-auto justify-between">
        <SearchInput />
        <div className="flex flex-wrap gap-[0.62rem]">
          <Button color="BLUE">카테고리 추가하기</Button>
          <Button color="GRAY">더보기</Button>
        </div>
      </section>
      <ItsmeCategoryGrid />
      <CategoryDrawn />
    </MainLayout>
  )
}

export default CategoryPage