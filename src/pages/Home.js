import React from 'react'
import {VStack, HStack, Heading, Text, Flex, Box, Image, StackDivider} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import {githubSvg} from '../helpers/Icons'
import image from '../image/ds.png'
import PortfolioCard from '../layout/PortfolioCard'

const MotionHeading = motion(Heading)
const Home = () => {

    const pageHeading = () =>{
        return(
            <VStack spacing = {10} alignItems = 'flex-start' w = '100%'>
                <MotionHeading initial = {{opacity:0}} animate = {{opacity:1}} transition = {{duration: 0.8}}>Portfolio</MotionHeading>
            </VStack>
        )
    }

    const projectCard = () =>{
        return(
            <Flex justifyContent = 'space-between'flexWrap =' wrap'>
                {PortfolioCard()}
            </Flex>  
        )
    }
    return (
        <VStack spacing = {10}  mt = '50'>
            {pageHeading()}
            {projectCard()}
        </VStack>
    )
}

export default Home
