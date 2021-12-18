import React from 'react'
import useShopingCart from '../providers/ShopingCartProvider'
//import useSpinner from '../providers/SpinnerProvider'
import { PageHeader, Button, Descriptions, Input, Space } from 'antd'
import { FaSearch } from 'react-icons/fa'
import NavegationLinks from '../components/NavegationLinks'
const { Search } = Input

const Header = () => {
  //const {articlesShopingCart, setArticlesShopingCart} = useShopingCart()
  //console.log('test:...', useSpinner())
  const { articlesShopingCart, setArticlesShopingCart } = useShopingCart()
  console.log('imprimiendo desde header', articlesShopingCart)

  const onSearch = value => console.log(value) //&&pendiente hacer la búsqueda
  return (
    <>
      <div className="search-container">
        {articlesShopingCart}
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
          <title>Cart</title>
          <circle cx="176" cy="416" r="32" />
          <circle cx="400" cy="416" r="32" />
          <path d="M456.8 120.78a23.92 23.92 0 00-18.56-8.78H133.89l-6.13-34.78A16 16 0 00112 64H48a16 16 0 000 32h50.58l45.66 258.78A16 16 0 00160 368h256a16 16 0 000-32H173.42l-5.64-32h241.66A24.07 24.07 0 00433 284.71l28.8-144a24 24 0 00-5-19.93z" />
        </svg>
        <a href="./cliente">My acount</a>

        <div className="icon-input">
          <FaSearch className="icon" />
          <input
            type="text"
            className="seacher"
            placeholder="enter search terms"
            onClick={onSearch}
            style={{ width: 150 }}
          />
        </div>
      </div>
      <div className="navegation">
        <h2 className="title">A Big Title</h2>
        <div className="navegation-links">
          <NavegationLinks />
        </div>
        <select className="navegation-select">
          <option value="volvo">Home</option>
          <option value="saab">Event</option>
          <option value="mercedes">Accesories</option>
          <option value="audi">Apparel</option>
          <option value="audi">Featured Items</option>
        </select>
      </div>
    </>
  )
}

export default Header
//########################################
