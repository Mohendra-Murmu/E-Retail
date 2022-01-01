import { MenuIcon } from "@heroicons/react/solid"

function Bottom_nav() {
    return (
        <div className="flex space-x-3 p-2 pl-6 items-center bg-eretail_05-dark text-eretail_05-white text-sm">
            <p className="flex link items-center">
                <MenuIcon
                    className="h-6 mr-1"
                />All
            </p>
            <p className="link">Trending</p>
            <p className="link">Best Selling</p>
            <p className="link">New Arrivals</p>
            <p className="link hidden lg:inline-flex">Electronics & Accessories</p>
            <p className="link hidden lg:inline-flex">Gadgets & Accessories</p>
            <p className="link hidden lg:inline-flex">Foot Wear</p>
            <p className="link hidden lg:inline-flex">Men & Women Clothes</p>
            <p className="link">About</p>
        </div>
    )
}

export default Bottom_nav
