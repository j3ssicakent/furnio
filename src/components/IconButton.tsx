'use client'

import { ReactNode } from "react"

interface Props {
    children?: ReactNode
    icon: ReactNode
    url: string
  }

const IconButton = ({icon, url, children}: Props) => {

    return (
        <a href={url}>
            <div className="flex gap-2 items-center hover:brightness-75">
                {icon}
                {children}
            </div>
        </a>
    )
}

export default IconButton