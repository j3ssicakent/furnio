'use client'

import { Typography } from "@material-tailwind/react"
import Image from 'next/image'

interface Collection {
    title: string
    image: string
}

interface Props {
    collections: Array<Collection>
    title: string
    description: string
}


const Collections = ({collections, title, description}: Props) => {

    return (
        <div className="my-12">
            <div className="mb-12 text-center">
                <Typography variant="h2" className="text-xl font-bold">{title}</Typography>
                <Typography variant="paragraph" className="font-light">{description}</Typography>
            </div>
            <div className="grid grid-cols-3 gap-6">

                {collections.map((collection) => {
                    return (
                        <a href="#">
                            <div className="flex flex-col gap-4">
                                <div className="overflow-hidden rounded-xl">
                                    <Image 
                                        src={collection.image} height={400} width={400} alt={collection.title} 
                                        className=" w-full hover:scale-110 hover:brightness-75 transition"
                                    />
                                </div>
                                <Typography variant="h5" className="font-semibold text-center">{collection.title}</Typography>
                            </div>
                        </a>
                    )
                })}
            </div>
        
        </div>
    )
}

export default Collections