import React, { ButtonHTMLAttributes } from 'react';
import Image from 'next/image';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: 'BLUE' | 'GRAY',
}

const getIconByColor = (color: 'BLUE' | 'GRAY') => {
    switch (color) {
        case 'BLUE':
            return (<Image src="/icon/add.svg" alt="add" width={16} height={16}/>)

        case 'GRAY':
            return (<Image src="/icon/more.svg" alt="more" width={16} height={16}/> )
    }
}

const getBgColorByColor = (color: 'BLUE' | 'GRAY') => {
    switch (color) {
        case 'BLUE':
            return "bg-[#4275FF]"

        case 'GRAY':
            return "bg-[#707071]"
    }
}

const Button = ({...props}: Props) => {
  return (
    <button className={`flex w-auto h-auto px-[0.75rem] py-[0.38rem] ${getBgColorByColor(props.color)} text-white text-sm rounded justify-center items-center gap-1 appearance-none`}
    {...props}>
        {getIconByColor(props.color)}
        <span>{props.children}</span>
        </button>
  )
}

export default Button


