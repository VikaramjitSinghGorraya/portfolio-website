import {PROJECTS_FETCHED, PROJECT_POSTED, SUCCESS, FAILURE} from '../Types'

const initialState = {
    projects:[],
    success:'',
    failure:''
}

export const projectReducer = (state = initialState, action) =>{
    switch(action.type){
        case PROJECTS_FETCHED:
            return{
                ...state,
                projects: action.payload
            }
        case PROJECT_POSTED:
            return{
                ...state,
                success: action.payload,
                error:''
            }
        case SUCCESS:
            return{
                ...state,
                success: action.payload,
                error:''
            }
        case FAILURE:
            return{
                ...state,
                error: action.payload,
                success:'',
                projects:[]
            }
        default:
            return state
    }
}

export default projectReducer