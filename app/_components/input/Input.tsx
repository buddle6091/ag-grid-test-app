import React, { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    width?: string;
}

const Input = ({ ...props }: Props) => {
  return (
    <input className="w-full focus:outline-none text-[0.8125rem]" {...props} />
  )
}

export const InputWithLabel = () => {
  return (
    <>
    <label className="py-[0.375rem] px-[0.75rem] w-full focus:outline-none text-[0.875rem] leading-5 rounded border border-[#EBEBEB]">
      <Input />
    </label>
    </>

  )
}

export default Input