import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading="lazy" src="https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?size=338&ext=jpg" alt="banner_3" />
                </div>
                <div>
                    <img loading="lazy" src="https://img.freepik.com/free-photo/phone-with-black-friday-inscription-table_23-2147957608.jpg?size=338&ext=jpg" alt="banner_1" />
                </div>
                <div>
                    <img loading="lazy" src="https://img.freepik.com/free-photo/woman-shopping-bags-copy-space_23-2148674356.jpg?size=338&ext=jpg" alt="banner_3" />
                </div>
            </Carousel>
        </div >
    )
}

export default Banner
