import quotes from './quotes'
import loading from './loading'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  quotes,
  loading
})

export default rootReducer
