import React from 'react'
import {VStack, HStack, Heading, Text, Flex, Image} from '@chakra-ui/react'
import {githubSvg} from '../helpers/Icons'
import image from '../image/ds.png'

const PortfolioCard = () => {
    return (
            <VStack alignItems = 'flex-start' spacing = {6} maxW = '45%' mt = '10'>
                <Image src= {image} objectFit = 'cover'/>
                <Heading>Algorithm Tests</Heading>
                    <VStack alignItems = 'flex-start'>
                        <Text as = 'p' fontSize = 'xl'>A collection of toy problems I have solved with their accompanying Jest tests. I thought the simple well defined inputs and outputs of problems on websites like L33tCode were an excellent opportunity to learn how to write better tests in Jest.  </Text>
                        <HStack>
                            {githubSvg()}
                            <Text>Github</Text>
                        </HStack>
                    </VStack>
            </VStack>
)}

export default PortfolioCard
