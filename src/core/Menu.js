import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import img1 from '../img/11.2 shopping-bag.svg.svg'
import Search from './Search'
import logo from '../img/logo.jpg'

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#7c7c7c" };
    }
};

const Menu = ({ history }) => (
    <div>
        <div className="horizontal-line">
            <div className="containerNav">



                <header>
                    <section className="header-info">
                        <div className="header-info-text">
                            <ul>
                                <li><i className="fas fa-phone-volume"></i>+250788 285 979</li>
                                <li><i className="far fa-envelope"></i>kigaliphones@gmail.com</li>
                                <li><Link to="/"><img src={logo} alt=""/></Link></li>
                            </ul>
                        </div>
                        <div className="header-info-list">
                            <ul>

                                <li>

                                    <Link
                                        style={isActive(history, "/about")}
                                        to="/about"
                                    >
                                        <i className="far fa-address-card"></i>


                                        About Us
                    </Link>


                                </li>

                                <li>

                                    <Link

                                        style={isActive(history, "/faq")}
                                        to="/faq"
                                    >
                                        <i className="far fa-address-book"></i>


                                        FAQ
                    </Link>


                                </li>

                                <li>

                                    <Link

                                        style={isActive(history, "/contact")}
                                        to="/contact"
                                    >
                                        <i className="fas fa-mobile-alt"></i>


                                        Contact Us
                    </Link>


                                </li>





                                {isAuthenticated() && isAuthenticated().user.role === 0 && (
                                    <li>
                                        <Link

                                            style={isActive(history, "/user/dashboard")}
                                            to="/user/dashboard"
                                        >
                                            <i className="far fa-user"></i> Account
                    </Link>
                                    </li>
                                )}

                                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                                    <li>
                                        <Link

                                            style={isActive(history, "/admin/dashboard")}
                                            to="/admin/dashboard"
                                        >
                                            <i className="far fa-user"></i> Account
                    </Link>
                                    </li>
                                )}

                                {!isAuthenticated() && (
                                    <Fragment>


                                        <li>
                                            <Link

                                                style={isActive(history, "/signup")}
                                                to="/signup"
                                            >
                                                <i className="far fa-user"></i> Register
                                             </Link>
                                            <span className="or">or</span>
                                            <Link

                                                style={isActive(history, "/signin")}
                                                to="/signin"
                                            >
                                                Login
                                             </Link>
                                        </li>
                                    </Fragment>
                                )}

                                {isAuthenticated() && (
                                    <li className=" mr-auto ">
                                        <span
                                            className=" text-dark mb-2"
                                            style={{ cursor: "pointer", color: "#ffffff" }}
                                            onClick={() =>
                                                signout(() => {
                                                    history.push("/");
                                                })
                                            }
                                        >
                                            <i className="fas fa-sign-out-alt"></i> Logout
                    </span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </section>
                </header>

            </div>


        </div>
        <div className="content-wrapper">
            <nav className="navigation">
                <div className="navigation-logo">
                    <Link to="/">

                       <img src={logo} alt=""/>

                    </Link>
                </div>


                <Search />

                <div className="navigation-links">



                    <ul className="icons">
                        <li>  <Link to="/" >Home</Link> </li>
                        <li>  <Link title="Shop"
                            style={isActive(history, "/shop")}
                            to="/shop" ><i className="fas fa-shopping-cart"></i> <span>Shop</span></Link> </li>
                        <li> <Link to="/wishlist" title="WishList"><i className="far fa-heart"></i></Link></li>


                        <li>
                            <Link

                                style={isActive(history, "/cart")}
                                to="/cart"
                                title="Cart"
                            >
                                <img src={img1} alt="" />
                                <sup> <span className='item-count '>{itemTotal()}</span></sup>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
);

export default withRouter(Menu);