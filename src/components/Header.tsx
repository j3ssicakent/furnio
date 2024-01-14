'use client'
import Image from 'next/image'
import logo from "@/assets/images/logo.svg"
import { Typography } from "@material-tailwind/react"
import MenuItem from '@/components/MenuItem'
import IconButton from '@/components/IconButton'
import { HeartIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline"


const Header = () => {

    return (
        <div className='flex justify-between py-6 items-center'>
            <div className="flex gap-2">
                <Image
                    className="h-8 w-8"
                    priority
                    src={logo}
                    alt="pondora"
                />
                <Typography variant="h1" className='text-2xl font-bold'>Furnio</Typography>
            </div>
            <div className="flex justify-between gap-8">
                <MenuItem url="#" label="Home" />
                <MenuItem url="#" label="Shop" />
                <MenuItem url="#" label="About" />
                <MenuItem url="#" label="Contact" />
            </div>
            <div className="flex justify-between gap-8">
                <IconButton url="#" icon={<UserIcon className="h-5 stroke-2"/>} />
                <IconButton url="#" icon={<MagnifyingGlassIcon className="h-5 stroke-2"/>} />
                <IconButton url="#" icon={<HeartIcon className="h-5 stroke-2"/>} />
                <IconButton url="#" icon={<ShoppingCartIcon className="h-5 stroke-2"/>} />
            </div>
        </div>
    )
}

export default Header