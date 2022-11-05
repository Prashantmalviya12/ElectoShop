import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Search = ({cartItem}) => {
    window.addEventListener("scroll", function(){
        const search = document.querySelector('search')
        search.classList.toggle("active",window.screenY>100)
    })
  return (
    <>
    <section className='search'>
        <div className='container c-flex'>
            <div className='logo width'>
                <Link to='/'>
                <h1>Electo Shop</h1>
                </Link>
            </div>
            <div className='search-box f-flex'>
                <i className='fa fa-search'></i>
                <input type='text' placeholder='Search and hit enter ...' ></input>
                <span>All Category</span>

            </div>

            <div className='icon f-flex width'>
                <i className='fa fa-user icon-circle'></i>
                <div className='cart'>
                    <Link to='/Cart'>
                        <i className='fa fa-shopping-bag icon-circle'></i>
                        <span>{cartItem.length === 0? "":cartItem.length}</span>
                    </Link>
                </div>
                 
            </div>

        </div>

    </section>
    </>
  )
}

export default Search
