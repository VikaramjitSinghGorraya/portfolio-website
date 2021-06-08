import React from 'react'
import {Flex, Heading, Text, VStack} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import {Helmet} from 'react-helmet'
import ReactTitle from 'react-meta-tags';
import {htmlSvgIcon, cssSvgIcon, bootstrapSvgIcon, javascriptSvgIcon, reactSvgIcon, nodeSvgIcon, mongoSvgIcon, expressSvgIcon} from '../helpers/Icons'
import Header from '../layout/Header'

const About = () => {

    const MotionVStack = motion(VStack)

    const introductoryText = () =>{
        return(
            <MotionVStack alignItems = 'flex-start' spacing = {8}>
                <Text fontSize = {[null, '20px', '20px']}>
                    Hi, I am Vikaramjit, a web developer from Edmonton, Canada, with a passion for all
                    Javascript realted things. <br/><br/>
                    I have experience working with Javascript front and backend technologies: MongoDB, ExpressJs, ReactJs, and NodeJs. 
                    I am Constantly trying to improve my knowledge about the applications used in the industry. For example, currently, I am learning Docker and Kubernetes.
                    I love solving real world problems and try to base my side projects on the ideas that I come across based on daily needs.
                    <br/><br/>
                    I spend most of my time learning and building. Apart from this, my interests are reading history, watching films,
                    and going on long walks with my dog.
                </Text>
            </MotionVStack>
        )
    }

    

    const mySkillsSection = () =>{
        return(
            <VStack spacing = {6} alignItems = 'flex-start'>
                <Heading>My Skills...</Heading>
                <Flex flexWrap = 'wrap' justifyContent = 'flex-start' alignItems = "space-between" h ='40'>
                    {htmlSvgIcon()}
                    {cssSvgIcon()}
                    {bootstrapSvgIcon()}
                    {javascriptSvgIcon()}
                    {reactSvgIcon()}
                    {nodeSvgIcon()}
                    {mongoSvgIcon()}  
                    {expressSvgIcon()} 
                </Flex>
            </VStack>
        )
    }

    
    return (
        <MotionVStack initial = {{x:-100, opacity:0}} animate = {{x:0, opacity:1}} transition = {{duration:0.2}} exit = {{x:100, opacity:1}} alignItems = 'flex-start' spacing = {20} overflow = 'hidden' pb = '10' mt = {['auto','50']}>
            {/* <Helmet>
                <title>About | Vikaramjit</title>
            </Helmet> */}
            <ReactTitle title = 'About | Vikaramjit Singh'/>
            <Header heading = 'About'/>
            {introductoryText()}
            {mySkillsSection()}
        </MotionVStack>
    )
}

export default About
