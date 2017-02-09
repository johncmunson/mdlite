import { combineReducers } from 'redux'
import documentsReducer from './documentsReducer.js'
import activeDocumentIdReducer from './activeDocumentIdReducer.js'

const rootReducer = combineReducers({
    documents: documentsReducer,
    activeDocumentId: activeDocumentIdReducer
});

export default rootReducer
