import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from "@chakra-ui/react"
import {BrowserRouter} from 'react-router-dom'
import "@fontsource/lato"
import "@fontsource/oswald"
import CustomTheme from './styles/CustomTheme'
import App from './App'
ReactDOM.render(
    <ChakraProvider theme = {CustomTheme}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ChakraProvider>,
    document.getElementById('root')

)