import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";


/* Its optional to define/handel every action request */
/*
const reducer = (state = { }, action) => {
    return state;
}
*/
const reducer = (state = { }, action) => {
    switch(action.type) {
        case "Fetch_Users":            
            document.getElementById('dataToFill').innerHTML=
                `<p>User Id: ${action.payload.id}</p>
                <p>Title: ${action.payload.title}</p>
                <p>Body ${action.payload.body}</p>
                `;
        break;
        case "Fetch_Users_error":
            document.getElementById('dataToFill').innerHTML= `<p>${action.payload}</p>`;
        break;
    }
    return state;
}

/* Logger middleware is used to console log every action is getting triggered */

const middleware = applyMiddleware(logger, thunk);
const store = createStore(reducer, middleware);

store.subscribe(() => {
    console.log("store changed", store.getState());
})

/* Simple way of dispatch */
store.dispatch({type:"hello"});
store.dispatch({type:"hello"});

/* Call back way of dispatch */
/* Here we are using axio node module middleware to fetch data from server */
store.dispatch((dispatch) => {
    dispatch({type:'foo'})
    axios.get("https://jsonplaceholder.typicode.com/posts/2")
         .then((response) => {
            dispatch({type:"Fetch_Users", payload: response.data})
         })
         .catch((err) => {
            dispatch({type:"Fetch_Users_error", payload: err})
         })
});

const ren = <section id="dataToFill">mmm</section>;
ReactDOM.render(ren, document.getElementById('root'));

