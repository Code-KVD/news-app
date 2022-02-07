import { data } from 'autoprefixer';
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsContainer extends Component {
    constructor(){
        super();
        this.state = {
            articles : [],
        };
    }
    componentDidMount(){
        let newsURL = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b8737bb5f3be458988ac7a29f303a451"
        let newsData = fetch(newsURL);
        let parsedData = newsData.then((response)=>response.json()).then();
        parsedData.then((data)=> this.setState({articles:data.articles})); 
    }
    render() {
        return (
            <>
            <div className='w-3/4 p-6 m-auto grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
            {this.state.articles.map((element)=>{
                return <NewsItem key={element.url} title={element.title} imageUrl={element.urlToImage} newsUrl={element.url}/>
            })}
            </div>
            </>
        )
    }
}
