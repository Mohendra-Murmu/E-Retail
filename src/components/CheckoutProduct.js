import { CurrencyRupeeIcon, StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

export default function CheckoutProduct({ id,
    title,
    rate,
    rating_count,
    price,
    description,
    category,
    image, }) {
    const dispatch = useDispatch();
    {/** This is if user wants to add more quantity to the basket for that u have to use a "counter" */ }
    const addItemToBasket = () => {
        const product = {
            id,
            title,
            rate,
            rating_count,
            price,
            description,
            category,
            image
        };
        {/** //Push items into redux */ }
        dispatch(addToBasket());
    }
    {/** //Remove from Basket Function */ }

    const removeItemFromBasket = () => {
        //Remove item from Redux
        dispatch(removeFromBasket({ id }))
    }

    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />

            {/**Middle section */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex py-1">
                    {Array(Math.round(rate)).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))
                    }
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <div className="flex justify-content items-center h-5">
                    {price} <CurrencyRupeeIcon className="h-5" />
                </div>
            </div>            
            {/**Right section Button */}
            <div className="flex ">
                <div className="flex flex-col space-y-2 my-auto justify-self-end">
                    <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
                    <button className="button">Buy Now</button>
                </div>
            </div>
        </div>
    )
}
