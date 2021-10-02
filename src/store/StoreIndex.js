
import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counter-slice';
import authSlice from './auth-slice';



// const counterReducer = (state = initialState,action) => { 
//     if(action.type === 'increment'){
//         return {
//                 counter:state.counter + 1,
//                 showCounter:state.showCounter
//             };
//     }

//     if(action.type === 'increase'){
//         return {
//                 counter:state.counter + action.amount,
//                 showCounter:state.showCounter
//             };
//     }

//     if(action.type === 'decrement'){
//         return {
//             counter:state.counter - 1,
//             showCounter:state.showCounter
//         };
//     }

//     if(action.type === 'toggler'){
//         return {
//             counter:state.counter,
//             showCounter:!state.showCounter
//         };
//     }

//     return state;
// }

// without slice
// const store = createStore(counterReducer);

// use configurestore with slice
// const store = configureStore({
//     reducer:counterSlice.reducer
// });

// with multiple slice
const store = configureStore({
    reducer: { counter:counterSlice.reducer,auth:authSlice.reducer },
});




export default store;