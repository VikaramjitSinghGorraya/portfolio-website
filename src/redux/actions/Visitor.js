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
    return dispatch=>{
        axios.post('https://portfolio-website-backend.vercel.app/api/contact', messageInfo)
            .then((res)=>dispatch(success((res.data.message))))
            .catch((err)=>dispatch(failure(err.response.data.error)))
    }
}