import React, { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    width?: string;
}

const Input = ({ ...props }: Props) => {
  return (
    <input className="w-full focus:outline-none text-[0.8125rem]" {...props} />
  )
}

export default Input