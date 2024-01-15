'use client'

import { Typography } from "@material-tailwind/react"
import TextButton from "@/components/TextButton"
import Carousel from "@/components/Carousel"
import image1 from "@/assets/images/carousel/image-1.jpeg"
import image2 from "@/assets/images/carousel/image-2.jpeg"
import image3 from "@/assets/images/carousel/image-3.jpeg"



const Banner = () => {

    return (
        <div className="bg-brown-200 my-6">
            <div className="grid grid-cols-5 items-center py-4">
                <div className="flex flex-col py-12 px-8 col-span-2">
                    <Typography variant="h1" className="text-[42px] font-bold leading-tight">
                        Room Inspiration
                    </Typography>
                    <Typography variant="paragraph" className="mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </Typography>
                    <TextButton>Explore More</TextButton>
                </div>
                <div className="col-span-3">
                    <Carousel 
                        slides={[image1.src, image2.src, image3.src]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner