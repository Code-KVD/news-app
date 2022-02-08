import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title,imageUrl,newsUrl} = this.props;
        return (
            <div className='card w-56 h-[320px] bg-slate-400 rounded-lg'>
                <img className=" w-64 h-44 rounded-t-lg" src={imageUrl} alt="" /> 
                <h1 className=" text-base mx-1">{title.substring(0,80)}...</h1>
                <button className='mx-1.5 my-1.5 py-1.5 px-2 bg-blue-300 rounded'><a href={newsUrl} target="_blank">Read More</a></button>
            </div>
        )
    }
}