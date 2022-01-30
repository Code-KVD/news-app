import React, { Component } from 'react';
import Close from './Close.svg'
import PrimaryLinks from './PrimaryLinks';
import SecondaryLinks from './SecondaryLinks';

export default class Mobilenav extends Component {
  constructor(props){
    super(props);
    this.closeSideNavbar = this.closeSideNavbar.bind(this);
  }
  closeSideNavbar(){
    document.getElementById("sideNavbar").classList.add("-translate-x-full")
  }
  render() {
    return <div  id ="sideNavbar" className="Side-Navbar absolute inset-0 w-3/4 h-screen bg-sky-800 -translate-x-full ">
        <div className="flex justify-between">
        <h1 className="p-2 text-gray-200 text-2xl font-extrabold">EXPRESS NEWS</h1>
        <img className="mx-1 my-3 scale-125 cursor-pointer" src={Close} alt="" onClick={this.closeSideNavbar} />
        </div>
        <PrimaryLinks/>
        <SecondaryLinks/>
    </div>;
  }
}

