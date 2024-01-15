'use client'

import { Typography } from "@material-tailwind/react"
import Masonry from '@mui/lab/Masonry'
import image1 from "@/assets/images/gallery/image-1.jpeg"
import image2 from "@/assets/images/gallery/image-2.jpeg"
import image3 from "@/assets/images/gallery/image-3.jpeg"
import image4 from "@/assets/images/gallery/image-4.jpeg"
import image5 from "@/assets/images/gallery/image-5.jpeg"
import image6 from "@/assets/images/gallery/image-6.jpeg"
import image8 from "@/assets/images/gallery/image-8.jpeg"
import image10 from "@/assets/images/gallery/image-10.jpeg"
import image11 from "@/assets/images/gallery/image-11.jpeg"

const Gallery = () => {

    return (
        <div className="my-12">
            <div className="mb-6 text-center">
                <Typography variant="paragraph" className="text-lg font-normal">Share your setup with</Typography>
                <Typography variant="h2" className="text-2xl font-bold">#FurnioFurniture</Typography>
            </div>
            <div className="w-full overflow-hidden">
                <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={{ xs: 1, sm: 2, md: 4 }}>
                    <img src={image4.src} alt={`image 4`} />
                    <img src={image5.src} alt={`image 5`} />
                    <img src={image1.src} alt={`image 1`} />
                    <img src={image6.src} alt={`image 6`} className=""/>
                    <img src={image3.src} alt={`image 3`} className="hidden md:block" />
                    <img src={image11.src} alt={`image 11`} className="hidden md:block" />
                    <img src={image10.src} alt={`image 10`} className="hidden md:block" />
                    <img src={image2.src} alt={`image 2`} className="hidden sm:block" />
                    <img src={image8.src} alt={`image 8`} className="hidden sm:block" />
                </Masonry>
            </div>
        
        </div>
    )
}

export default Gallery