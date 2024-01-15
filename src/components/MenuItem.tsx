'use client'
import { Typography } from "@material-tailwind/react"

interface Props {
    label: string
    url: string
  }

const MenuItem = ({label, url}: Props) => {

    return (
        <a href={url}><Typography variant='paragraph' className='text-base hover:text-brown-500'>{label}</Typography></a>
    )
}

export default MenuItem