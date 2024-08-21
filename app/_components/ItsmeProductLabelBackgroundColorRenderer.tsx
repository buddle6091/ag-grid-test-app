import React from 'react'
import { CustomCellRendererProps } from 'ag-grid-react'

const ItsmeProductLabelBackgroundColorRenderer = (hexValue: CustomCellRendererProps) => {
    const { data } = hexValue
    const { backgroundColor } = data
  return (
    <div className="flex flex-row gap-2 h-full items-center w-full">
        <div
          className="size-4 rounded-full"
          style={{ backgroundColor: backgroundColor.replaceAll(' ', '') }}
        ></div>
        <p>{backgroundColor}</p>
    </div>
  )
}

export default ItsmeProductLabelBackgroundColorRenderer