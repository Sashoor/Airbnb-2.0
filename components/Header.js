import Image from "next/image"
import { SearchIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* left-side */}

            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3"
                    layout='fill'
                    objectFit="contain" objectPosition="left"
                />
            </div>
            {/* Middle-side  search*/}
            <div className="flex md:border-2 rounded-full py-2 md:shadow-sm ">
                <input className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-600"   type="text" placeholder="Start your search" />
                <SearchIcon className="hidden md:inline h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>

            {/* Right-side */}

            <div className=""></div>
        </header>
    )
}

export default Header
