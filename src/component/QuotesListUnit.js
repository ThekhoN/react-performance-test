import React, {Component} from 'react'


import { onlyUpdateForKeys }  from 'recompose';
const QuotesListUnitComponent = ({quote}) => (<li>{quote}</li>);
const QuotesListUnit = onlyUpdateForKeys(['quote'])(QuotesListUnitComponent);
export default QuotesListUnit;

/*
export default class QuotesListUnit extends Component {
  shouldComponentUpdate(nextProps){
    return nextProps.quote !== this.props.quote
  }
  render(){
    const {quote} = this.props
    return (<li >{quote}</li>)
  }
}
*/
