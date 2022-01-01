import Image from "next/image";
import { useState } from "react";
import { CurrencyRupeeIcon, StarIcon } from "@heroicons/react/solid";

export default function Product({ id, title, rate, rating_count, price, description, category, image }) {
    const [rating] = useState(Math.round(rate));

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

            <Image src={image} height={200} width={200} objectFit="contain" />
            <h4 className="my-3">{title}</h4>
            <div className="flex items-center " >
                {Array(rating).fill().map((_, i) => (
                    <StarIcon className="h-5 text-yellow-500" />
                ))}
                <p className=" pl-1 text-xs">({rate})</p>
                <p className="pl-1 text-xs">/ ({rating_count})</p>
            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <div className="flex items-center mb-5">
                {price} <CurrencyRupeeIcon className="h-5 pl-1 text-eretail_05-dark" />
            </div>
            <button className="mt-auto button">
                Add to Basket
            </button>
        </div>
    )
}
