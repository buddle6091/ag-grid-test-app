import React from "react";
import Image from 'next/image';
import { CustomCellRendererProps } from "ag-grid-react";


interface ExposureCellRendererProps extends CustomCellRendererProps {
  src?: (props: boolean) => string;
}

const ExposureResultRenderer = (props: ExposureCellRendererProps) => {
  
  const defaultImageSrc = `/icon/${props.value ? 'check' : 'error'}.svg`
  const imageSrc = props.src ? props.src(props.value) : defaultImageSrc;
  return (
    <div className="flex w-full h-full items-center">
<Image src={imageSrc} alt={`${props.value}`} width={16} height={16}/>
    </div>
  )
}

export default ExposureResultRenderer
