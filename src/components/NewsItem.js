import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <div className='card w-56 h-96 bg-slate-400'>
              <img className="w-72 h-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png" alt="" /> 
              <p className="text-lg mx-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, quibusdam.</p>
                <button className='mx-1 my-2 py-1 px-1 bg-blue-300 rounded'>Read More</button>
            </div>
        )
    }
}


