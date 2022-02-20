import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title,imageUrl,newsUrl} = this.props;
        let defaultImage = `https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg`;
        return (
            <div className='card w-56 h-[320px] bg-slate-400 rounded-lg'>
                <img className=" w-64 h-44 rounded-t-lg" src={imageUrl ? imageUrl:defaultImage} alt="" /> 
                <h1 className=" text-base mx-1">{title.substring(0,80)}...</h1>
                <button className='mx-1.5 my-1.5 py-1.5 px-2 bg-blue-300 rounded hover:bg-blue-400'><a href={newsUrl} target="_blank">Read More&rarr;</a></button>
            </div>
        )
    }
}