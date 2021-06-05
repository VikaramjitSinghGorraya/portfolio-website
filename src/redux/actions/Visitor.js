import {SUCCESS, FAILURE} from '../Types'
import axios from 'axios'

export const success = (message)=>{
    return{
        type: SUCCESS,
        payload: message
    }
}

export const failure = (error)=>{
    return{
        type: FAILURE,
        payload: error
    }
}

export const sendMessage = (messageInfo) =>{
    console.log(messageInfo)
    return dispatch=>{
        axios.post('http://localhost:4000/api/contact', messageInfo)
            .then((res)=>dispatch(success((res.data))))
            .catch((err)=>dispatch(failure(err.response.data.error)))
    }
}