import {combineReducers} from 'redux'
import projectReducer from './reducers/Project'
import visitorReducer from './reducers/Visitor'

const rootReducer = combineReducers({
    project: projectReducer,
    visitor: visitorReducer
})

export default rootReducer