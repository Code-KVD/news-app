import React, { Component } from 'react'
import loading from './loading.gif'

export default class Loading extends Component {
  render() {
    return (
      <div className="flex justify-center items-center h-[75vh]">
      <img className='w-12 ' src={loading} alt="Loading" />
      </div>
    )
  }
}
