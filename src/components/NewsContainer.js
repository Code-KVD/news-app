import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsContainer extends Component {
    constructor(){
        super();
        this.state = {
            articles : [],
            pages : 1,
        };
        
        this.handlePreviousButton = this.handlePreviousButton.bind(this);
    }
    
    
    componentDidMount(){
        let newsURL = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b8737bb5f3be458988ac7a29f303a451&page=1"
        let newsData = fetch(newsURL);
        let parsedData = newsData.then((response)=>response.json()).then();
        parsedData.then((data)=> this.setState({articles:data.articles})); 
    }

    handlePreviousButton(){
        
    }

    render() {
        return (
            <>
            <div className='w-3/4 p-6 m-auto grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
            {this.state.articles.map((element)=>{
                return <NewsItem key={element.url} title={element.title} imageUrl={element.urlToImage} newsUrl={element.url}/>
            })}
            </div>
            <div className=" w-3/4 m-auto flex justify-between">
                <button className="mx-1.5 my-1.5 py-1.5 px-2 bg-blue-300 rounded" onClick={this.handlePreviousButton}>&larr;Previous</button>
                <button className="mx-1.5 my-1.5 py-1.5 px-2 bg-blue-300 rounded" onClick={this.handleNextButton}>Next&rarr;</button>
            </div>
            </>
        )
    }
}
