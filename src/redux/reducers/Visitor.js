import {SUCCESS, FAILURE} from '../Types'

const initialState = {
    success:'',
    failure:'',
    isLoading: true
}

export const visitorReducer = (state = initialState, action) =>{
    switch(action.type){
        case SUCCESS:
            return{
                ...state,
                success: action.payload,
                error:'',
                isLoading: false
            }
        case FAILURE:
            return{
                ...state,
                error: action.payload,
                success:'',
                isLoading: false
            }
        default:
            return state
    }
}

export default visitorReducer