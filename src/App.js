import React, {useEffect} from 'react'
import {Route, Switch, useHistory} from 'react-router-dom'
import {Box} from '@chakra-ui/react'
import {AnimatePresence} from 'framer-motion'
import {Helmet} from 'react-helmet'
import Navbar from './layout/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
const App = () => {

    var history = useHistory()

    const setTitle = ()=>{
        if(history.location.pathname === '/')
        return `Home | Vikaramjit Singh`
        else
        return `${history.location.pathname.substring(1, history.location.pathname.length)} | Vikaramjit Singh`

    }
    
    return (
        <Box maxW = {['85%','97%','97%']} mx = 'auto'>
            <Helmet>
                <title>{setTitle()}</title>
            </Helmet>
            <Navbar/> 
            <Box >
                <AnimatePresence exitBeforeEnter>
                <Switch>
                    <Route exact path = '/About' component = {About} />
                    <Route exact path = '/Contact' component = {Contact} />
                    <Route exact path = '/' component = {Home} />

                </Switch>
                </AnimatePresence>
                
            </Box>
        </Box>
    )
}

export default App
