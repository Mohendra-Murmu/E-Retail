import { SearchIcon, ShoppingBagIcon } from "@heroicons/react/outline"
import Image from "next/image"
import { signIn, signOut, useSession } from 'next-auth/react'
import { UserCircleIcon } from "@heroicons/react/solid";
{/**Built-in Routing */ }
import { useRouter } from "next/router"
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";

function Header_main() {
    const { data: session, status } = useSession();
    {/**It's a hook . this will give router object */ }
    const router = useRouter();
    const items = useSelector(selectItems);

    return (
        <div className="flex items-center bg-eretail_dark_neon-black p-1 flex-grow py-2">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 ">
                <Image
                    src="https://links.papareact.com/f90"
                    width={150}
                    height={40}
                    objectFit="contain"
                    className="cursor-pointer"
                    onClick={() => router.push(`/`)}
                />
            </div>
            {/**Search bar */}

            <div className="
                hidden 
                sm:flex 
                items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500
                ">
                <input className="
                    p-2 
                    h-full 
                    w-6 
                    flex-grow 
                    flex-shrink 
                    rounded-l-md 
                    focus:outline-none
                    px-4"
                    type="text" />
                <SearchIcon className="h-12 p-4" />
            </div>

            {/*//*Search bar */}
            <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                <div onClick={status === "authenticated" ? signOut : signIn} className="link">
                    <p className="flex">
                        <UserCircleIcon className="h-4 pr-1" />
                        {session ? `Hello, ${session.user.name}` : "Sign In"}
                    </p>
                    <p className="font-extrabold md:text-sm">Account & Lists</p>
                </div>
                <div className="link">
                    <p className="">Returns</p>
                    <p className="font-extrabold md:text-sm">& Orders</p>
                </div>
                <div className="link flex relative items-center " onClick={() => router.push(`/checkout`)}>
                    <span className="
                        absolute 
                        top-0 
                        right-0 
                        md:right-6 
                        h-4 w-4 
                        bg-yellow-400 
                        text-center 
                        rounded-full 
                        text-black 
                        font-bold
                        ">
                        {items.length}
                    </span>
                    <ShoppingBagIcon className="h-10" />
                    <p className=" hidden md:inline mt-2 md:text-sm font-extrabold">Basket</p>
                </div>
            </div>
        </div>
    )
}

export default Header_main
