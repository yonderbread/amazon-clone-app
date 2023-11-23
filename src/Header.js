import React from "react"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
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
                {/* Third link */}
                <Link className="header-link" to="/">
                    <div className="header-option">
                        <span className="header-option-lineOne">
                            Hello, User
                        </span>
                        <span className="header-option-lineTwo">Sign In</span>
                    </div>
                </Link>
            </div>
            {/* Shopping basket icon */}
            <div>
                <Link className="header-link" to="/checkout">
                    <div class="header-optionBasket">
                        <ShoppingBasketIcon />
                        {/* Updating number of items in shopping basket */}
                        <span className="header-option-lineTwo-basketCount">
                            2
                        </span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
