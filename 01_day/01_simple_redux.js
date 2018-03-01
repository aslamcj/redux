
import {createStore} from "redux";

/* Step1 : Create a reducer function which will handel actions and update the state */
const reducer = (state, action) =>  {
    switch(action.type) {
        case "ADD":
            console.log("ADD action:state",state);
            return state = state + action.payload;
            break;
        case "SUBSTRACT":
            console.log("SUBSTRACT action:state",state);
            return state = state-action.payload;
            break;
        default:
            return state;
    }
}
/* 
    Step2: Crate a Store
    2.1 Pass the fist parameter 'reducrer method' to the Store
    2.2 Pass the initial values or default values to the Store
 */
const store = createStore(reducer,1);


/*
    Step3 : Monitor is there any changes happening to the state in store
*/
store.subscribe(()=>  {
    console.log("Store data:", store.getState());   
});

/*
    Step4 : Call Store's Dispatch Method to modify any state values
    4.1 Pass an object to the dispatch method
    4.2 'type' property is mandatory for any dispatch action
    4.3 'payload' is used to pass new values or update exiting values
*/
store.dispatch({
    type: "ADD",
    payload: 110
});

store.dispatch({
    type: "ADD",
    payload: 10
});

store.dispatch({
    type: "SUBSTRACT",
    payload: 10
});
