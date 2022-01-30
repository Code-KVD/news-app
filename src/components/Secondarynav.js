import React, { Component } from 'react'

export default class Secondarynav extends Component {
    render() {
        return (
            <div className='secondary-navbar h-9 bg-sky-800 text-gray-200'>
                <ul className='flex space-x-8'>
                    <li className='ml-5 my-1 cursor-pointer font-bold'>Breaking News</li>
                    <li className=' my-1 cursor-pointer font-bold'>National</li>
                    <li className=' my-1 cursor-pointer font-bold'>International</li>
                    <li className=' my-1 cursor-pointer font-bold'>Politics</li>
                    <li className=' my-1 cursor-pointer font-bold'>Business</li>
                    <li className=' my-1 cursor-pointer font-bold'>Economics</li>
                    <li className=' my-1 cursor-pointer font-bold'>Health</li>
                    <li className=' my-1 cursor-pointer font-bold'>Education</li>
                    <li className=' my-1 cursor-pointer font-bold'>Sports</li>
                    <li className=' my-1 cursor-pointer font-bold'>Entertainment</li>
                    <li className=' my-1 cursor-pointer font-bold'>Technology</li>
                </ul>
            </div>
        )
    }
}
