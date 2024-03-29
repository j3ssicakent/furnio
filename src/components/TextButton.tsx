'use client'

import { Button } from "@material-tailwind/react"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
    variant?: string
  }

const TextButton = ({children, variant, ...props}: Props) => {
    let classes = "uppercase bg-brown-500 text-white max-w-[200px] py-3"
    return (
        <Button 
            className={classes}
            {...props}
        >
            {children}
        </Button>
    )
}

export default TextButton