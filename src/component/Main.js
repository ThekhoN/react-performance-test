import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchInitialQuotesDispatch, fetchMoreQuotesDispatch} from '../action/index'
import QuotesListUnit from './QuotesListUnit'

//const baseurl = 'http://58b2874a78d2121200bfa8dd.mockapi.io/api/quotes'
const url = 'http://58b2874a78d2121200bfa8dd.mockapi.io/api/quotes/'
const url2 = 'http://58c7c5f6939d711200e9d1d1.mockapi.io/api/quotes/'

let currentId = 1;
const limitId = 2;

import Perf from 'react-addons-perf';

class MainComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      fetchedAllOther: false
    };
    this.onfetchMoreQuotes = this.onfetchMoreQuotes.bind(this);
  }
  onfetchMoreQuotes(){
    if(currentId > limitId){
      console.log('we are done. . .');
      return ;
    }
    Perf.start();
    let nextUrl = url2 + currentId;
    // console.log('nextUrl: ', nextUrl);
    this.props.onFetchMoreQuotes(nextUrl);
    currentId++;
  }
  componentDidMount(){
    this.props.onFetchInitialQuotes(url);
  }
  componentDidUpdate(){
    Perf.stop();
    Perf.printExclusive();
    Perf.printWasted();
  }
  render(){
    const {allQuotes, initialQuotes, moreQuotes} = this.props;
    return (<div className='App'>
      <br/>
      <br/>
      <ul>
        {
          allQuotes.map((quote, i) => <QuotesListUnit key={ i } quote={quote.quote}/>)
        }
      </ul>
      <br/>
      <button onClick={this.onfetchMoreQuotes}> get NEXT quote </button>
      <br/>
    </div>)
  }
}

const mapStateToProps = state => {
  return {
    initialQuotes: state.quotes.initialQuotes,
    moreQuotes: state.quotes.moreQuotes,
    allQuotes: state.quotes.allQuotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchInitialQuotes:(url) => {
      dispatch(fetchInitialQuotesDispatch(url))
    },
    onFetchMoreQuotes: (url) => {
      dispatch(fetchMoreQuotesDispatch(url))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent)
