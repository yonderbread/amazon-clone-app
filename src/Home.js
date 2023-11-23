import React from "react"
import Product from "./Product"

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
            </div>
        </div>
    )
}

export default Home
