const loading = (state = 'loadingNotStarted', action) => {
  switch (action.type) {
    case 'LOADING':
      return 'loading'
    case 'LOADING_COMPLETE':
      return 'loadingComplete'
    default:
      return state;
  }
}

export default loading
