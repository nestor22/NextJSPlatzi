import React, { useState, useContext } from "react";
import Menu from "@components/Menu";
import Image  from "next/image"
import Link from "next/link"

import AppContext from "@context/AppContext";
import iconMenu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCard from "@icons/icon_shopping_cart.svg";
import MyOrder from "@containers/MyOrder";
import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggle, setToogle] = useState(false);
  const [toggleOrder, setToobleOrder] = useState(false)
  const { state } = useContext(AppContext);
  const handleTootle = () => {
    setToogle(!toggle);
  };

  return (
    <>
    <nav className={styles.nav}>
      <Image src={iconMenu} alt="menu" className={styles.menu} />
      <div className={styles['navbar-left']}>
        <Link href="/">
          <Image src={logo} alt="logo" className={styles['nav-logo']} />
        </Link>
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={handleTootle}>
            platzi@example.com
          </li>
          <li className={styles['navbar-shopping-cart']} onClick={()=> setToobleOrder(!toggleOrder)}>
            <Image src={shoppingCard} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrder && <MyOrder/>}
    </nav>
    </>
    
  );
};

export default Header;
