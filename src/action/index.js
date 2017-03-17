import 'whatwg-fetch'
export const fetchInitialQuotes = (quotes) => {
  return {
    type: 'FETCH_INITIAL_QUOTES',
    quotes
  }
}

export const fetchMoreQuotes = (quotes) => {
  return {
    type: 'FETCH_MORE_QUOTES',
    quotes
  }
}

const updateAllQuotes = (quotes) => {
  return {
    type: 'UPDATE_ALL_QUOTES',
    quotes
  }
}

export const loading = (status) => {
  return {
    type: 'LOADING',
    status
  }
}

export const loading_complete = (status) => {
  return {
    type: 'LOADING_COMPLETE',
    status
  }
}

export const fetchInitialQuotesDispatch = (url) => {
  return (dispatch) => {
    fetch(url)
    .then(res => res.json())
    .then(resJson => {
      dispatch(fetchInitialQuotes(resJson))
      dispatch(updateAllQuotes(resJson))
    })
    .catch(err => {
      console.log('err in fetchInitialQuotesDispatch: ', err);
    })
  }
}

export const fetchMoreQuotesDispatch = (url) => {
  return (dispatch) => {
    fetch(url)
    .then(res => res.json())
    .then(resJson => {
      let payload = resJson
      if(!Array.isArray(resJson)){
        payload = [resJson]
      }
      dispatch(fetchMoreQuotes(payload))
      dispatch(updateAllQuotes(payload))
    })
    .catch(err => {
      console.log('err in fetchMoreQuotesDispatch: ', err);
    })
  }
}
