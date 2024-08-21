import React from 'react'
import { CustomCellRendererProps } from 'ag-grid-react'

const ItsmeProductLabelTextColorRenderer = (hexValue: CustomCellRendererProps) => {
    const { data } = hexValue
    const { textColor } = data

    console.log(data);
    console.log(textColor, typeof textColor);

  return (
    <div className="flex flex-row gap-2 h-full items-center w-full">
        <div
          className="size-4 rounded-full"
          style={{ backgroundColor: textColor.replaceAll(' ', '') }}
        ></div>
        <p>{textColor}</p>
    </div>
  )
}

export default ItsmeProductLabelTextColorRenderer