import React from 'react'
import { HStack, Link } from "@chakra-ui/react"
import { useHistory } from 'react-router'
const Navbar = () => {
    
    var history = useHistory()

    return (
        <HStack spacing = {5} minH = '100'>
            <Link href = '/' borderBottom = {history.location.pathname === '/'? '2px solid green': ''} fontWeight = "extrabold" fontSize = "20">Vikaramjit Singh</Link>
            <Link href = '/About' borderBottom = {history.location.pathname === '/About'? '2px solid green': ''}  fontWeight = {history.location.pathname === '/About'?  "bold": 'normal'}  _selected = {{fontWeight: 'bold'}}>About</Link>
            <Link href = '/Contact' borderBottom = {history.location.pathname === '/Contact'? '2px solid green': ''} fontWeight = {history.location.pathname === '/Contact'?  "bold": 'normal'}>Contact</Link>
        </HStack>
    )
}

export default Navbar
