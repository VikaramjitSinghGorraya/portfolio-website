import React, {useEffect} from 'react'
import {useToast} from '@chakra-ui/react'

const Toast = ({toastId, title, description, successStatus}) => {

    const toast = useToast()

    useEffect(()=>{
        if(!toast.isActive(toastId)){
            toast({
                
                title: title,
                description: description,
                status: successStatus ? "success": "error",
                duration: 6000,
                isClosable: true,
              })
        }
        
    },[toastId])

    return (
        <></>
    )
}


export default Toast
