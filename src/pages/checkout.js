import { CurrencyRupeeIcon } from "@heroicons/react/solid"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useSelector } from "react-redux"
import CheckoutProduct from "../components/CheckoutProduct"
import Header from "../components/Header"
import { selectItems, selectTotal } from "../slices/basketSlice"
import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"
const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const { data: session } = useSession();

    const createCheckoutSession = async () => {
        const stripe = await stripePromise;

        //Call the backend to create a checkout session...
        const checkoutSession = await axios.post('/api/create-checkout-session',
            {
                items: items,
                email: session.user.email,
            });

        //Redirect user/customer to Stripe checkout
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        });

        if (result.error) {
            alert(result.error.message);
        }

    };
    return (
        <div className="bg-gray-100">
            <Header />

            <main className="lg:flex max-w-screen-2xl mx-auto ">
                {/**Left Section */}
                <div className="flex-grow m-5 shadow-sm">
                    <Image
                        src="https://m.media-amazon.com/images/I/81JxNoPb96L._SX3000_.jpg"
                        width={1020}
                        height={120}
                        objectFit="contain"
                    />
                    <div className="flex flex-col p-5 space-y-10 bg-white mx-10">
                        <h1 className="text-3xl border-b pb-4">
                            {items.length === 0 ? "Nothing In Your Basket." : "Your Shopping Basket"}
                        </h1>
                        {items.map((item, i) =>
                        (
                            <CheckoutProduct
                                key={i}
                                id={item.id}
                                title={item.title}
                                rate={item.rate}
                                rating_count={item.rating_count}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                            />
                        )
                        )}
                    </div>
                </div>

                {/**Right Section */}
                {items.length > 0 && (
                    <div className=" flex flex-col bg-white p-10 shadow-md">
                        {items.length > 0 && (
                            <>
                                <h2 className=" whitespace-nowrap">Subtotal ({items.length} items):{""}
                                    <span className="flex font-bold">
                                        {total}<CurrencyRupeeIcon className="h-5" />
                                    </span>

                                </h2>
                                <button role="link"
                                    onClick={createCheckoutSession}
                                    disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300'}`}>
                                    {!session ? "Sign in to checkout" : "Proceed to checkout"}
                                </button>
                            </>
                        )}
                    </div>
                )}

            </main >
        </div >
    )
}

export default Checkout
