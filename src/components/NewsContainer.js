import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loadingspinner'

export default class NewsContainer extends Component {
    constructor(){
        super();
        this.state = {
            articles : [],
            page : 1,
            loading: false,
            totalResults : 0,
        };
        
        this.handlePreviousButton = this.handlePreviousButton.bind(this);
        this.handleNextButton = this.handleNextButton.bind(this);
        
        
    }
    
    // toggleLoading(){
    //         if (this.state.loading) {
    //             this.setState({loading:false})
    //         }
    //         if(!this.state.loading){
    //             this.setState({loading:true})
    //         }
    // }
    
    componentDidMount(){
        let newsURL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b8737bb5f3be458988ac7a29f303a451&page=${this.state.page}`
        this.setState({loading:true})
        let newsData = fetch(newsURL);
        let parsedData = newsData.then((response)=>response.json()).then();
        parsedData.then((data)=> this.setState({articles:data.articles, loading:false}));

    }
    // function which handles previous button.
    handlePreviousButton(){
        let newsURL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b8737bb5f3be458988ac7a29f303a451&page=${this.state.page-1}`
        this.setState({loading:true})
        let newsData = fetch(newsURL);
        let parsedData = newsData.then((response)=>response.json()).then();
        parsedData.then((data)=> this.setState({articles:data.articles, loading:false})); 
        this.setState({page:this.state.page-1});      
    }
    // function which handles next button.
    handleNextButton(){
        let newsURL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b8737bb5f3be458988ac7a29f303a451&page=${this.state.page+1}`
        this.setState({loading:true})
        let newsData = fetch(newsURL);
        let parsedData = newsData.then((response)=>response.json()).then();
        parsedData.then((data)=> this.setState({articles:data.articles,loading:false})); 
        this.setState({page:this.state.page+1});
    }

    render() {
        if (this.state.loading) {
            console.log(this.state.loading)
            return <Loading/> 
         }
         else{
         return <>
        <div className='w-3/4 p-6 m-auto grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
         {this.state.articles.map((element)=>{
             return <NewsItem key={element.url} title={element.title} imageUrl={element.urlToImage} newsUrl={element.url}/>
         })}
         </div>
         <div className=" w-3/4 m-auto flex justify-between">
             <button disabled={this.state.page<=1} className="mx-1.5 my-1.5 py-1.5 px-2 bg-blue-300 rounded hover:bg-blue-400" onClick={this.handlePreviousButton}>&larr;Previous</button>
             <button className="mx-1.5 my-1.5 py-1.5 px-2 bg-blue-300 rounded hover:bg-blue-400" onClick={this.handleNextButton}>Next&rarr;</button>
         </div>
        </>
         }
    }
}
