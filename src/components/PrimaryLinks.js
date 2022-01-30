import React, { Component } from 'react';

export default class PrimaryLinks extends Component {
  render() {
    return <div>
        <ul className='flex flex-col text-gray-200'>
        <li className='mx-2 p-2 hover:cursor-pointer font-bold'>Home</li>
        <li className='mx-2 p-2 hover:cursor-pointer font-bold'>About</li>
        <li className='mx-2 p-2 hover:cursor-pointer font-bold'>Contact</li>
        </ul>
    </div>;
  }
}
