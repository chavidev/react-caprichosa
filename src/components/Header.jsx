import React from 'react'
import { PageHeader, Button, Descriptions, Input, Space } from 'antd'
import { FaSearch } from 'react-icons/fa'
const { Search } = Input

const Header = () => {
  const onSearch = value => console.log(value) //&&pendiente hacer la búsqueda
  return (
    <>
      <div className="search-container">
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
            style={{ width: 130 }}
          />
        </div>
      </div>
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          title="Caprichosa traducido"
          subTitle=""
          extra={[
            <a href="./">Home</a>,
            <a href="./">Event</a>,
            <a href="./">Accesories</a>,
            <a href="./">Apparel</a>,
            <a href="./">Featured Items</a>
          ]}
        ></PageHeader>
      </div>
    </>
  )
}

export default Header
//########################################
