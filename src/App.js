import React, { Component } from 'react'
import 'whatwg-fetch'
import Perf from 'react-addons-perf'

//const baseurl = 'http://58b2874a78d2121200bfa8dd.mockapi.io/api/quotes'
const url = 'http://58b2874a78d2121200bfa8dd.mockapi.io/api/quotes/'

//global
let currentId = 1
const limitId = 9

class QuoteListItem extends Component {
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.quote !== this.props.quote
  }
  render(){
    let {quote} = this.props
    return (<li>{quote}</li>)
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loadCompled: false,
      loading: false,
      quotes: []
    }
    this.fetchNextData = this.fetchNextData.bind(this)
  }
  componentDidUpdate(){
    Perf.stop()
    Perf.printInclusive()
    Perf.printWasted()
  }
  fetchNextData(){
    Perf.start()
    if(currentId > limitId){
      console.log('we are done. ..')
      return false
    }
    else {
      let reqUrl = url + currentId
      fetch(reqUrl)
      .then(res => res.json())
      .then(jsonRes => {
        const quote = jsonRes.quote
        this.setState({
          quotes: [...this.state.quotes, quote]
        })
      })
      .catch(err => {
        console.log('error in fetch: ', err)
      })
      currentId++
    }

  }
  render(){
    const {quotes} = this.state
    return (<div className='App'>
      <button onClick={this.fetchNextData}>fetch more</button>
      <br/>
      <ul>
        {
          quotes.map((quote, i) => <QuoteListItem key={i} quote={quote}/>)
        }
      </ul>
    </div>)
  }
}


export default App
