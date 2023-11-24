import React from "react"
import "./Navlinks.css"
import { Link } from "react-router-dom"

function Navlinks() {
    return (
        <div className="navlinks">
            <div className="navlinks-outer">
                <div className="navlinks-inner">
                    <Link>Today's Deals</Link>
                    <Link>Customer Service</Link>
                    <Link>Best Sellers</Link>
                    <Link>Amazon Basics</Link>
                    <Link>New Releases</Link>
                    <Link to="https://github.com/yonderbread/amazon-clone-app">Github</Link>
                </div>
            </div>
        </div>
    )
}

export default Navlinks
