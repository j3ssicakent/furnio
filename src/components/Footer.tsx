'use client'

import { Button, Input, Typography } from "@material-tailwind/react"

const Footer = () => {

    return (
        <div className='py-6 border-t border-t-[#0000002b] px-8'>
            <div className="grid grid-cols-4 justify-between items-end flex w-full mb-12">
                <Typography variant="h1" className='text-2xl font-bold'>Furnio</Typography>
                <a href="#"><Typography variant="paragraph" className='text-gray-700 font-normal hover:text-black'>Links</Typography></a>
                <a href="#"><Typography variant="paragraph" className='text-gray-700 font-normal hover:text-black'>Help</Typography></a>
                <a href="#"><Typography variant="paragraph" className='text-gray-700 font-normal hover:text-black'>Newsletter</Typography></a>
            </div>
            <div className="grid grid-cols-4 justify-between flex w-full mb-12">
                <Typography variant="paragraph" className='text-gray-700 pr-4'>
                    400 University Drive Suite 200 Coral Gables, FL 33134 USA
                </Typography>
                <div className="flex flex-col gap-8">
                    <a href="#"><Typography variant="paragraph" className='font-normal hover:text-brown-500'>Home</Typography></a>
                    <a href="#"><Typography variant="paragraph" className='font-normal hover:text-brown-500'>Shop</Typography></a>
                    <a href="#"><Typography variant="paragraph" className='font-normal hover:text-brown-500'>About</Typography></a>
                    <a href="#"><Typography variant="paragraph" className='font-normal hover:text-brown-500'>Contact</Typography></a>
                </div>
                <div className="flex flex-col gap-8">
                    <a href="#"><Typography variant="paragraph" className='font-normal hover:text-brown-500'>Payment Options</Typography></a>
                    <a href="#"><Typography variant="paragraph" className='font-normal hover:text-brown-500'>Returns</Typography></a>
                    <a href="#"><Typography variant="paragraph" className='font-normal hover:text-brown-500'>Privacy Policies</Typography></a>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 items-baseline justify-start">
                    <Input 
                        variant="static"
                        placeholder="Enter Your Email Address" 
                        className={`!bg-transparent !border-b focus:outline-none !text-gray-700 focus:shadow-none py-1 max-w-[200px]`} 
                        containerProps={{
                            className: "w-[200px]"
                        }}
                        autoComplete="off"
                    />
                    <Button className="text-black text-underline w-full border-b py-1 font-normal w-fit">SUBSCRIBE</Button>
                </div>
            </div>
            <div className='pt-6 border-t border-t-[#0000002b]'>
                <Typography>2023 Furnio. All rights reverved</Typography>
            </div>
        </div>
    )
}

export default Footer