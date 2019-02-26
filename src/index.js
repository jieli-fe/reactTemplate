// import "@babel/polyfill"
// 兼容 ie9 包括 Promise、fetch、assign、Symbol、 Array.from
import 'react-app-polyfill/ie9';
// import 'core-js/es6/map';
// import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/index';
import * as serviceWorker from './serviceWorker';
// import http from "./axios/index"
// import api from "./axios/api"

import "@styl/index"

// http.get(api.user,{name: 1}).then((res)=>{
//
//     console.log(res)
//
// })

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more header service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
