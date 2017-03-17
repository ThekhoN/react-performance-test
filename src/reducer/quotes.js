const quotes = (state = {allQuotes:[], initialQuotes:[], moreQuotes:[]}, action) => {
  const {quotes} = action
  switch (action.type) {
    case 'UPDATE_ALL_QUOTES':
      return {...state, allQuotes: [...state.allQuotes, ...quotes]}
    case 'FETCH_INITIAL_QUOTES':
      return {...state, initialQuotes: [...quotes]}
    case 'FETCH_MORE_QUOTES':
      return {...state, moreQuotes: [...quotes]}
    default:
      return state;
  }
}

/*
const quotes = (state = {allQuotes:[], initialQuotes:[], moreQuotes:[]}, action) => {
  const {quotes} = action
  switch (action.type) {
    case 'FETCH_INITIAL_QUOTES':
      return {...state, initialQuotes: [...quotes]}
    case 'FETCH_MORE_QUOTES':
      return {...state, moreQuotes: [...quotes]}
    default:
      return state;
  }
}
*/

export default quotes
