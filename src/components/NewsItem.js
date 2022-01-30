import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <div className='card w-56 h-96 bg-slate-400 rounded-lg'>
              <img className="w-72 h-auto rounded-t-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png" alt="" /> 
              <p className="text-lg mx-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, quibusdam.</p>
                <button className='mx-1.5 my-1.5 py-1.5 px-2 bg-blue-300 rounded'>Read More</button>
            </div>
        )
    }
}


