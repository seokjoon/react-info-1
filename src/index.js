import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals'
import { applyMiddleware, createStore } from 'redux'
import rootReducer, { rootSaga } from './redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import createMiddlewareSaga from 'redux-saga'
import InRoute from './route'

const middlewareSaga = createMiddlewareSaga()

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      middlewareSaga,
    ),
  ),
)

middlewareSaga.run(rootSaga)

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={store}>
    <BrowserRouter>
      <InRoute/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
