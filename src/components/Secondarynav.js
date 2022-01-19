import React, { Component } from 'react'

export default class Secondarynav extends Component {
    render() {
        return (
            <div className='secondary-navbar h-9'>
                <ul className='flex'>
                    <li className='mx-4 my-1 cursor-pointer font-bold'>Breaking News</li>
                    <li className='mx-4 my-1 cursor-pointer font-bold'>National</li>
                    <li className='mx-4 my-1 cursor-pointer font-bold'>International</li>
                    <li className='mx-4 my-1 cursor-pointer font-bold'>Politics</li>
                    <li className='mx-4 my-1 cursor-pointer font-bold'>Business</li>
                    <li className='mx-4 my-1 cursor-pointer font-bold'>Economics</li>
                    <li className='mx-4 my-1 cursor-pointer font-bold'>Health</li>
                    <li className='mx-4 my-1 cursor-pointer font-bold'>Education</li>
                    <li className='mx-4 my-1 cursor-pointer font-bold'>Sports</li>
                    <li className='mx-4 my-1 cursor-pointer font-bold'>Entertainment</li>
                    <li className='mx-4 my-1 cursor-pointer font-bold'>Technology</li>
                </ul>
            </div>
        )
    }
}
