import {combineReducers} from 'redux'
import projectReducer from './reducers/Project'

const rootReducer = combineReducers({
    project: projectReducer
})

export default rootReducer