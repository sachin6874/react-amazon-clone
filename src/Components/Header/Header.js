import {MdOutlineStorefront} from "react-icons/md"
import {IoMdBasket} from "react-icons/io"
import { FiSearch} from "react-icons/fi"
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
                <div className="header-logo">
                      <div className="logo"><MdOutlineStorefront/></div>
                      <h1>eShop</h1>
                </div>

                <div className="header-search">
                    <input type="text" name= "search" />
                    <div className="search-icon"><FiSearch/></div>

                </div>

                <div className="header-nav"> 
                     <div className="header-nav-signin">
                        <span>Hello Guest </span>
                        <h4>Sign In</h4>

                     </div>

                     <div className="header-nav-your-shop">
                     <span>Your</span>
                     <h4>Shop</h4>
                     </div>
                    <div  className="header-nav-cart">
                    <h1><IoMdBasket/></h1>
                    </div>
                </div>
        </header>
    );
}

export default Header;