import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from "@chakra-ui/react"
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import "@fontsource/lato"
import "@fontsource/oswald"
import CustomTheme from './styles/CustomTheme'
import App from './App'
import store from './redux/Store'
ReactDOM.render(
    <ChakraProvider theme = {CustomTheme}>
        <BrowserRouter>
        <Provider store = {store}>
            <App/>
        </Provider>
        </BrowserRouter>
    </ChakraProvider>,
    document.getElementById('root')

)