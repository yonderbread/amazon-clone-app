import React from "react"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { Link } from "react-router-dom"
import "./Header.css"
import { useStateValue } from "./StateProvider"

function Header() {

    const [{basket}, dispatch] = useStateValue();

    console.log(basket);

    return (
        <nav className="header">
            <img
                className="header-logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="logo"
            />
            <div className="header-search">
                <input className="header-searchInput" type="text" />
                <SearchIcon className="header-searchIcon" />
            </div>
            <div className="header-nav">
                {/* First link */}
                <Link className="header-link" to="/login">
                    <div className="header-option">
                        <span className="header-option-lineOne">
                            Hello, User
                        </span>
                        <span className="header-option-lineTwo">Sign In</span>
                    </div>
                </Link>
                {/* Second link */}
                <Link className="header-link" to="/">
                    <div className="header-option">
                        <span className="header-option-lineOne">Returns</span>
                        <span className="header-option-lineTwo">& Orders</span>
                    </div>
                </Link>
            </div>
            {/* Shopping basket icon */}
            <div>
                <Link className="header-link" to="/checkout">
                    <div class="header-optionBasket">
                        <ShoppingBasketIcon />
                        {/* Updating number of items in shopping basket */}
                        <span className="header-option-lineTwo-productCount">
                            {
                                basket?.length
                            }
                        </span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
