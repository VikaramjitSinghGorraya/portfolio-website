import {PROJECTS_FETCHED, PROJECT_POSTED, SUCCESS, FAILURE} from '../Types'
import axios from 'axios'

export const projectsFetched = (projects) =>{
    return{
        type: PROJECTS_FETCHED,
        payload: projects
    }
}

export const projectPosted = (message)=>{
    return{
        type: PROJECT_POSTED,
        payload: message
    }
}

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

export const getProjectsProcess = () =>{
    return dispatch=>{
        axios.get('https://portfolio-website-backend.vercel.app/api/getProjects')
            .then((res)=>dispatch(projectsFetched(res.data.projects)))
            .catch((err)=>dispatch(failure(err.response.data.error)))
    }
}
