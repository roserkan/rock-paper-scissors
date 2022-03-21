import { combineReducers } from 'redux';
import gameReducer from "./reducers/gameReducer"


const rootReducer = combineReducers({
    gameReducer
})


export default rootReducer;