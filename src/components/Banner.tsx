'use client'

import { Typography } from "@material-tailwind/react"
import TextButton from "@/components/TextButton"

const Banner = () => {

    return (
        <div className="h-[700px]">
            <div className={`w-screen bg-banner bg-cover bg-center absolute left-0 h-[700px]`}>
                <div className="flex flex-col bg-brown-100 pl-6 pr-16 pt-12 pb-6 absolute top-1/2 -translate-y-1/2 inset-x-6 md:left-[unset] md:right-10 md:max-w-[480px] ">
                    <Typography className="tracking-widest text-bold">New Arrival</Typography>
                    <Typography variant="h1" className="text-[42px] text-brown-500 font-bold leading-tight">
                        Discover Our New Collection
                    </Typography>
                    <Typography variant="paragraph" className="mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </Typography>
                    <TextButton>Buy now</TextButton>

                </div>
            </div>
        </div>
    )
}

export default Banner