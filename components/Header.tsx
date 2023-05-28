import Image from "next/image";
import Navigation from "./Navigation";

export default function Header(){
    return (
        <header className="flex sm:px-28 py-10 drop-shadow-sm">
            <div className="sm:w-3/6 w-full">
                <Image 
                    className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300 sm:m-0 m-auto"
                    src={'logo.svg'}
                    width={40}
                    height={40}
                    alt="Logo SA"
                />
            </div>
            <div className="w-3/6 sm:flex hidden items-center justify-end ">
                <Navigation />
            </div>
        </header>
    )
}