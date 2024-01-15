'use client'

import { Button, Typography } from "@material-tailwind/react"
import Image from 'next/image'
import IconButton from "@/components/IconButton"
import { ArrowsRightLeftIcon, HeartIcon, ShareIcon } from "@heroicons/react/24/outline"

interface Product {
    name: string
    description: string
    price: number
    oldPrice?: number
    image: string
}

interface Props {
    products: Array<Product>
    title: string
}


const Products = ({products, title}: Props) => {

    return (
        <div className="my-12 px-8">
            <div className="mb-12 text-center">
                <Typography variant="h2" className="text-2xl font-bold">{title}</Typography>
            </div>
            <div className="grid base:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {products.map((product, index) => {
                    return (
                        <div className="flex flex-col gap-2 bg-gray-600 transition relative cursor-pointer" key={index}>
                            <div className="absolute bg-gray-100/75 w-full h-full opacity-0 hover:opacity-100 transition">
                                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-100 text-center">
                                    <Button className="bg-white text-brown-500 hover:bg-brown-500 hover:text-white transition px-8">
                                        Add to cart
                                    </Button>
                                    <div className="my-4 flex gap-3">
                                        <IconButton url="#" icon={<ShareIcon className="w-4 h-4 text-white stroke-2"/>}><Typography variant="small" color="white" className="font-bold">Share</Typography></IconButton>
                                        <IconButton url="#" icon={<ArrowsRightLeftIcon className="w-4 h-4 text-white stroke-2"/>}><Typography variant="small" color="white" className="font-bold">Compare</Typography></IconButton>
                                        <IconButton url="#" icon={<HeartIcon className="w-4 h-4 text-white stroke-2"/>}><Typography variant="small" color="white" className="font-bold">Like</Typography></IconButton>
                                    </div>
                                </div>
                            </div>
                            <div className="product-image">
                                <Image 
                                    src={product.image} height={400} width={400} alt={product.name} 
                                    className=" w-full"
                                />
                            </div>
                            <div className="px-4 pb-6 product-details">
                                <Typography variant="h6" className="font-semibold text-lg">{product.name}</Typography>
                                <Typography variant="paragraph" className="text-gray-300 min-h-[52px]">{product.description}</Typography>
                                <div className="flex gap-2">
                                    <Typography variant="paragraph" className="font-bold">$ {product.price}</Typography>
                                    {product?.oldPrice && 
                                        <Typography variant="paragraph" className="line-through text-gray-400">$ {product.oldPrice}</Typography>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-center my-6">
                <Button variant="outlined" color="brown" className="font-normal w-[250px] border border-brown-500">
                    Show More
                </Button>
            </div>
        </div>
    )
}

export default Products