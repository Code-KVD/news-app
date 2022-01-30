import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsContainer extends Component {
    render() {
        return (
            <div className='w-3/4 p-6 m-auto grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
            </div>
        )
    }
}
