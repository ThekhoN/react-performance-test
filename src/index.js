import React from 'react';
import {render} from 'react-dom'

import './index.css';
import {Provider} from 'react-redux'
import Main from './component/Main'
import store from './store/index'

render(<Provider store={store}>
  <Main />
</Provider>,
  document.getElementById('root')
);
