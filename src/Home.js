import React from "react"
import Product from "./Product"
import './Home.css'

function Home() {
    return (
        <div className="home">
            <img
                className="home-image"
                src="https://m.media-amazon.com/images/I/61GG5tEKCXL._SX1500_.jpg"
                alt=""
            ></img>

            <div className="home-row">
                <Product
                    id="000000001"
                    title="Marhsall Origin 240-Watt 4x12 Inches Slant Extension Cabinet Amplifier PArt (ORI412A)"
                    price={549.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/91CUjdsS3ZL._AC_UL320_.jpg"
                />
                <Product
                    id="000000002"
                    title="Boss RE-202 Space Echo Digital Delay Pedal "
                    price={314.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/711xmHaToDL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
                />
                <Product
                    id="000000003"
                    title="Pro Co RAT2 Distortion Pedal"
                    price={74.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61gHNmcYvFL._AC_SX425_.jpg"
                />
                <Product
                    id="000000004"
                    title="Squier Affinity Series Deluxe Telecaster Electric Guitar, with 2-Year Warranty, Black, Maple Fingerboard"
                    price={279.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41fGgZhH9fL._AC_SL1000_.jpg"
                />
            </div>
            <div className="home-row">
                <Product
                    id="000000001"
                    title="Marhsall Origin 240-Watt 4x12 Inches Slant Extension Cabinet Amplifier PArt (ORI412A)"
                    price={549.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/91CUjdsS3ZL._AC_UL320_.jpg"
                />
                <Product
                    id="000000002"
                    title="Boss RE-202 Space Echo Digital Delay Pedal "
                    price={314.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/711xmHaToDL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
                />
                <Product
                    id="000000003"
                    title="Pro Co RAT2 Distortion Pedal"
                    price={74.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61gHNmcYvFL._AC_SX425_.jpg"
                />
                <Product
                    id="000000004"
                    title="Squier Affinity Series Deluxe Telecaster Electric Guitar, with 2-Year Warranty, Black, Maple Fingerboard"
                    price={279.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41fGgZhH9fL._AC_SL1000_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
