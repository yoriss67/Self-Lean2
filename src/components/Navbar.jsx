import React, { useState } from "react";
import "./Navbar.css";

import { Routes, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";

import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function Navbar() {
  const [navOpen, setNavOpen] = React.useState(false);

  const handleHamburgerClick = () => {
    setNavOpen(!navOpen);
  };

  const handleOverlayClick = () => {
    setNavOpen(false);
  };

  const navClass = navOpen ? "nav_open" : "";

  // change color
  const [changeColor, setChangeColor] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  // 🌸これ忘れてた
  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  // 🙋‍♀️
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <div className={`${navClass}`}>
      <header>
        <div className="pc_navbar">
          <Link to="/" className="logo">
            {/* <img src="frame.svg" alt="" /> */}
            <h1 className="logo">Lean</h1>
          </Link>

          <div className="sp_no">
            <nav className="pc_nav">
              <ul className="pc_ul">
                <li>
                  <a className="nav-item" href="#message">
                    leanの特徴
                  </a>
                </li>

                <li>
                  <a className="nav-item" href="#media">
                    メディア
                  </a>
                </li>
                <li>
                  <a className="nav-item" href="#nutrition">
                    栄養成分
                  </a>
                </li>

                {/* <li><Link className="nav-item"  to="/blog">Blog</Link></li> */}
                <li>
                  <a>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <Link className="ul_link nav-item" to="/store">
                  ストア
                </Link>
                {/* 🙋‍♀️ */}
                {cartQuantity > 0 && (
                  <Button
                    style={{
                      width: "3rem",
                      height: "3rem",
                      position: "relative",
                      color: "#EED199",
                    }}
                    variant="outline"
                    className="rounded-circle"
                    // 🤔なんでStoreItem.tsxとちがって関数名だけ？
                    onClick={openCart}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fill="currentColor"
                    >
                      <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                    </svg>
                    <div
                      className="rounded-circle  d-flex justify-content-center align-items-center"
                      style={{
                        color: "white",
                        width: "1.5rem",
                        height: "1.5rem",
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                        transform: "translate(25%, 25%)",
                        backgroundColor: "#FB6B27",
                      }}
                    >
                      {cartQuantity}
                    </div>
                  </Button>
                )}
              </ul>
            </nav>
          </div>
        </div>
        {/* pcハンバーガーメニュー ↑ */}

        {/* spハンバーガーメニュー ↓ */}
        <div className="sp_navbar pc_no">
          <div className="overlay" id="js_overlay" onClick={handleOverlayClick}>
            {navOpen}
          </div>
          <div
            className="hamburger"
            id="js_hamburger"
            onClick={handleHamburgerClick}
          >
            <span className={`first_line ${changeColor ? "blue" : ""}`} />
            <span className={`second_line ${changeColor ? "blue" : ""}`} />
            <span className={`third_line ${changeColor ? "blue" : ""}`} />
          </div>
          <div className="sidemenu">
            <nav>
              <ul>
                <li>
                  <a className="nav-item" href="#message">
                    leanの特徴
                  </a>
                </li>

                <li>
                  <a className="nav-item" href="#media">
                    メディア
                  </a>
                </li>
                <li>
                  <a className="nav-item" href="#nutrition">
                    栄養成分
                  </a>
                </li>
                <li>
                  <a>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                {/* <li><a className="nav-item"  href="#flavors">ストア</a></li> */}
                <Link className="ul_link nav-item" to="/store">
                  ストア
                </Link>
                <li>
                  {/* 🙋‍♀️ */}
                  {cartQuantity > 0 && (
                    <Button
                      style={{
                        width: "3rem",
                        height: "3rem",
                        position: "relative",
                        margin: "10px 0 0 0",
                        color: "#EED199",
                      }}
                      variant="outline"
                      className="rounded-circle"
                      // 🤔なんでStoreItem.tsxとちがって関数名だけ？
                      onClick={openCart}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        fill="currentColor"
                      >
                        <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                      </svg>
                      <div
                        className="rounded-circle  d-flex justify-content-center align-items-center"
                        style={{
                          color: "white",
                          width: "1.5rem",
                          height: "1.5rem",
                          position: "absolute",
                          bottom: "0",
                          right: "0",
                          transform: "translate(25%, 25%)",
                          backgroundColor: "#FB6B27",
                        }}
                      >
                        {cartQuantity}
                      </div>
                    </Button>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}






// import  { useState, useEffect } from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { Button } from "react-bootstrap";
// import { useShoppingCart } from "../context/ShoppingCartContext";

// export default function Navbar() {
//   const [navOpen, setNavOpen] = useState(false);
//   const [changeColor, setChangeColor] = useState(false);

//   const handleHamburgerClick = () => {
//     setNavOpen(!navOpen);
//   };

//   const handleOverlayClick = () => {
//     setNavOpen(false);
//   };

//   const navClass = navOpen ? "nav_open" : "";

//   const changeNavbarColor = () => {
//     if (window.scrollY >= 80) {
//       setChangeColor(true);
//     } else {
//       setChangeColor(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", changeNavbarColor);
//     return () => {
//       window.removeEventListener("scroll", changeNavbarColor);
//     };
//   }, []);

//   const { openCart, cartQuantity } = useShoppingCart();

//   return (
//     <div className={`${navClass}`}>
//       <header>
//         <div className="pc_navbar">
//           <Link to="/" className="logo">
//             <h1 className="logo">Lean</h1>
//           </Link>

//           <div className="sp_no">
//             <nav className="pc_nav">
//               <ul className="pc_ul">
//                 <li>
//                   <a className="nav-item" href="#message">
//                     leanの特徴
//                   </a>
//                 </li>
//                 <li>
//                   <a className="nav-item" href="#media">
//                     メディア
//                   </a>
//                 </li>
//                 <li>
//                   <a className="nav-item" href="#nutrition">
//                     栄養成分
//                   </a>
//                 </li>
//                 <li>
//                   <a>
//                     <FontAwesomeIcon icon={faTwitter} />
//                   </a>
//                 </li>
//                 <li>
//                   <a>
//                     <FontAwesomeIcon icon={faInstagram} />
//                   </a>
//                 </li>
//                 <Link className="ul_link nav-item" to="/store">
//                   ストア
//                 </Link>
//                 {cartQuantity > 0 && (
//                   <Button
//                     style={{
//                       width: "3rem",
//                       height: "3rem",
//                       position: "relative",
//                       color: "#EED199",
//                     }}
//                     variant="outline"
//                     className="rounded-circle"
//                     onClick={openCart}
//                   >
//                     {/* Cart Icon */}
//                     <div
//                       className="rounded-circle  d-flex justify-content-center align-items-center"
//                       style={{
//                         color: "white",
//                         width: "1.5rem",
//                         height: "1.5rem",
//                         position: "absolute",
//                         bottom: "0",
//                         right: "0",
//                         transform: "translate(25%, 25%)",
//                         backgroundColor: "#FB6B27",
//                       }}
//                     >
//                       {cartQuantity}
//                     </div>
//                   </Button>
//                 )}
//               </ul>
//             </nav>
//           </div>
//         </div>
//         {/* pcハンバーガーメニュー ↑ */}

//         {/* spハンバーガーメニュー ↓ */}
//         <div className="sp_navbar pc_no">
//           <div className="overlay" id="js_overlay" onClick={handleOverlayClick}>
//             {navOpen}
//           </div>
//           <div
//             className="hamburger"
//             id="js_hamburger"
//             onClick={handleHamburgerClick}
//           >
//             <span className={`first_line ${changeColor ? "blue" : ""}`} />
//             <span className={`second_line ${changeColor ? "blue" : ""}`} />
//             <span className={`third_line ${changeColor ? "blue" : ""}`} />
//           </div>
//           <div className="sidemenu">
//             <nav>
//               <ul>
//                 <li>
//                   <a className="nav-item" href="#message">
//                     leanの特徴
//                   </a>
//                 </li>
//                 <li>
//                   <a className="nav-item" href="#media">
//                     メディア
//                   </a>
//                 </li>
//                 <li>
//                   <a className="nav-item" href="#nutrition">
//                     栄養成分
//                   </a>
//                 </li>
//                 <li>
//                   <a>
//                     <FontAwesomeIcon icon={faTwitter} />
//                   </a>
//                 </li>
//                 <li>
//                   <a>
//                     <FontAwesomeIcon icon={faInstagram} />
//                   </a>
//                 </li>
//                 <Link className="ul_link nav-item" to="/store">
//                   ストア
//                 </Link>
//                 <li>
//                   {cartQuantity > 0 && (
//                     <Button
//                       style={{
//                         width: "3rem",
//                         height: "3rem",
//                         position: "relative",
//                         margin: "10px 0 0 0",
//                         color: "#EED199",
//                       }}
//                       variant="outline"
//                       className="rounded-circle"
//                       onClick={openCart}
//                     >
//                       {/* Cart Icon */}
//                       <div
//                         className="rounded-circle  d-flex justify-content-center align-items-center"
//                         style={{
//                           color: "white",
//                           width: "1.5rem",
//                           height: "1.5rem",
//                           position: "absolute",
//                           bottom: "0",
//                           right: "0",
//                           transform: "translate(25%, 25%)",
//                           backgroundColor: "#FB6B27",
//                         }}
//                       >
//                         {cartQuantity}
//                       </div>
//                     </Button>
//                   )}
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }
