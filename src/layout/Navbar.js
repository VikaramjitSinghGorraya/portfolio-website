import React from 'react'
import { HStack, Link } from "@chakra-ui/react"
import { useHistory } from 'react-router'
import {motion} from 'framer-motion'
const MotionLink = motion(Link)
const Navbar = () => {
    
    var history = useHistory()

    return (
        <HStack spacing = {5} minH = '100'>
            <MotionLink background= 'linear-gradient(green, green) bottom/0% 2px no-repeat' initial = {{backgroundSize:'none'}} animate ={history.location.pathname === '/'? { backgroundSize: '100% 2px'}:''} transition = {{duration:0.25}} href = '/' fontWeight = "extrabold" fontSize = {["15","20"]}>Vikaramjit Singh</MotionLink>
            <MotionLink  background= 'linear-gradient(green, green) bottom/0% 2px no-repeat' initial = {{backgroundSize:'none'}} animate ={history.location.pathname === '/About'? { backgroundSize: '100% 2px'}:''} transition = {{duration:0.25}} href = '/About' fontWeight = {history.location.pathname === '/About'?  "bold": 'normal'}>About</MotionLink>
            <MotionLink background= 'linear-gradient(green, green) bottom/0% 2px no-repeat' initial = {{backgroundSize:'none'}} animate ={history.location.pathname === '/Contact'? { backgroundSize: '100% 2px'}:''} transition = {{duration:0.25}} href = '/Contact'  fontWeight = {history.location.pathname === '/Contact'?  "bold": 'normal'}>Contact</MotionLink>
        </HStack>
    )
}

export default Navbar
