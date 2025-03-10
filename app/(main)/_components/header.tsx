import { MenuIcon, SearchIcon, ShoppingBagIcon, UserIcon } from "lucide-react";
import Image from "next/image";

export const Header = () => {
    return (
        <header className="py-2 px-4 flex items-center w-full">
            <div className="w-[33.33%] flex justify-start">
                <MenuIcon className="h-6 w-6 cursor-pointer" />
            </div>
            <div className="w-[33.33%] flex justify-center">
                <Image
                    src="/logo/2.png"
                    alt="Logo"
                    height={43}
                    width={120}
                    className="md:h-[73px] md:w-[200px] cursor-pointer"
                />
            </div>
            <div className="w-[33.33%] flex justify-end">
                <div className="flex gap-x-4">
                    <UserIcon className="hidden md:block cursor-pointer" />
                    <SearchIcon className="cursor-pointer" />
                    <ShoppingBagIcon className="cursor-pointer" />
                </div>
            </div>
        </header>
    );
}