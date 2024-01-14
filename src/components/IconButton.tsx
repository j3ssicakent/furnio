'use client'

import { ReactNode } from "react"

interface Props {
    icon: ReactNode
    url: string
  }

const IconButton = ({icon, url}: Props) => {

    return (
        <a href={url}>
            {icon}
        </a>
    )
}

export default IconButton