import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Secondarynav from './Secondarynav';


export default class Navbar extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <>
            <nav className="navbar flex justify-between bg-black text-white h-14">
                <ul className='flex'>
                    <li className='mx-3 p-3 hover:cursor-pointer font-bold'>Newsapp</li>
                    <li className='mx-3 p-3 hover:cursor-pointer'>Home</li>
                    <li className='mx-3 p-3 hover:cursor-pointer'>About</li>
                    <li className='mx-3 p-3 hover:cursor-pointer'>Contact</li>
                </ul>
                <form  className="mr-9 p-1.5" action="/" method="get">
                    <input className='m-2 rounded w-56 text-black' type="search" placeholder=' search any news' />
                    <button className="bg-green-500 w-20 rounded"type="submit">search</button>
                </form>
            </nav>
            <Secondarynav/>
            </>
        )
    }
}
