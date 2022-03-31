import Image from "next/image"
import { SearchIcon, MenuIcon, UserCircleIcon, GlobeAltIcon, UsersIcon } from "@heroicons/react/solid"

const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* Left */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src="https://links.papareact.com/qd3"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    objectPosition='left'
                />
            </div>

            {/* Middle */}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input
                    type='text'
                    placeholder="Start your search"
                    className="pl-5 bg-transparent outline-none flex-1 test-sm text-gray-600 placeholder:text-gray-400" />
                <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2" />
            </div>

            {/* Right */}
            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="cursor-pointer hidden md:inline-flex">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
            </div>
        </header>
    )
}

export default Header