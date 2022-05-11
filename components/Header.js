import Image from "next/image"

function Header() {
    return (
        <header className="sticky top-0 z-50 grid-cols-3 bg-red-500">



            {/* left-side */}

            <div className="relative flex items-center h-10 cursor-pointer my-auto  ">
                <Image src="https://links.papareact.com/qd3" 
                layout='fill'
                objectFit="contain" objectPosition="left"
                />
            </div>
            

            {/* Middle-side */}

            <div className=""></div>

            {/* Right-side */}

            <div className=""></div>
        </header>
    )
}

export default Header
