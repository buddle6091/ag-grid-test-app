import React from 'react'
import { ReactNode } from 'react'

type MainLayoutProps = {
    children?: ReactNode
}

const MainLayout = (props: MainLayoutProps) => {
    const { children } = props

  return (
     <main className="flex-1 overflow-y-auto w-full h-full px-7 py-4">
        {children}
     </main>
  )
}

export default MainLayout