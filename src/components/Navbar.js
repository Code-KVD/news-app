import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Secondarynav from './Secondarynav';
import Hamburger from './Hamburger-Menu.svg'
import MobileNavBar from './MobileNavBar';
import PrimaryLinks from './PrimaryLinks';
// import PrimaryLinks from './PrimaryLinks';

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.OpenSideNavbar = this.OpenSideNavbar.bind(this);
        this.screenWidth = window.innerWidth;
    }
    OpenSideNavbar(){
        document.getElementById("sideNavbar").classList.remove("-translate-x-full");    
    }
    
    render() {
        return (
            <>
            <nav className="navbar flex  bg-black text-white h-14">
            {this.screenWidth <= 1300 && <img className="cursor-pointer" src={Hamburger} alt="" width="50px" onClick={this.OpenSideNavbar}/>}
                <ul className='flex '>
                    <li className='mx-1 p-3 hover:cursor-pointer font-bold text-xl'>EXPRESS NEWS</li>
                    {this.screenWidth >= 1300 && <>
                    <li className='mx-2 p-3 text-lg hover:cursor-pointer font-bold'>Home</li>
                    <li className='mx-2 p-3 text-lg hover:cursor-pointer font-bold'>About</li>
                    <li className='mx-2 p-3 text-lg hover:cursor-pointer font-bold'>Contact</li>
                        </>}
                </ul>
            </nav>
            {this.screenWidth <=1300 ?<MobileNavBar/> : <Secondarynav/>}
            </>
        )
    }
}
