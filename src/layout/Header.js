import React from 'react'
import {VStack, Heading} from '@chakra-ui/react'
import {motion} from 'framer-motion'

const MotionHeading = motion(Heading)

const Header = ({heading}) => {
    return (
        <VStack spacing = {10} alignItems = 'flex-start' w = '100%'>
                <MotionHeading initial = {{opacity:0}} animate = {{opacity:1}} transition = {{duration: 0.8}}>{heading}</MotionHeading>
                 {heading !== 'Portfolio' && <hr style = {{color: 'green', width:'100%', borderTop:'0.2em solid Green'}}/>}
        </VStack>
    )
}

export default Header
