import React from 'react'
import Image from 'next/image'
import Input from './Input'

const SearchInput = () => {
  return (
    <><label htmlFor="search" className="flex w-[22.25rem] px-[0.5rem] py-[0.31rem] rounded border border-[#EBEBEB] gap-[0.25rem]">
              <Image src="/icon/search.svg" alt="search" width={16} height={16} />
          <Input id="search" placeholder="검색어를 입력해주세요."/>
          </label>
          </>
  )
}

export default SearchInput