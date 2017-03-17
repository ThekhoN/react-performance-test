import React, {Component} from 'react'

export default class QuotesListUnit extends Component {
  shouldComponentUpdate(nextProps){
    return nextProps.quote !== this.props.quote
  }
  render(){
    const {quote} = this.props
    return (<li>{quote}</li>)
  }
}
