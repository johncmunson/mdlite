import { combineReducers } from 'redux'
import contentReducer from './contentReducer.js'

const rootReducer = combineReducers({
    content: contentReducer
});

export default rootReducer
