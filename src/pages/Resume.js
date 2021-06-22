import React from 'react'
import { VStack, Button, Image, Box } from '@chakra-ui/react'
import {motion} from 'framer-motion'
import Header from '../layout/Header'
import ResumeScreenshot from '../image/ResumeScreenshot.jpg'
import { resumeDownloadSvg } from '../helpers/Icons'

const MotionVStack = motion(VStack)
const Resume = () => {

    const resumeDisplay = () =>{
        return(
            <Image src = {ResumeScreenshot} objectFit = 'cover'/>
        )
    }

    return (
        <MotionVStack initial = {{x:-100, opacity:0}} animate = {{x:0, opacity:1}} transition = {{duration:0.2}} exit = {{x:100, opacity:1}} alignItems = 'center' spacing = {20} overflow = 'hidden' pb = '10' mt = {['auto','50']}>
            <Header heading = 'Resume'/>
            <VStack spacing = {5}>
                <Box minH = '60vh'>
                    {resumeDisplay()}
                </Box>
                <Button w = {['100%','40%']} h ='3em' m = 'auto' onClick = {()=>window.open('Final Resume.pdf', '_blank')}>
                    {resumeDownloadSvg()}
                    DOWNLOAD RESUME .PDF
                </Button>
            </VStack>
        </MotionVStack>
    )
}

export default Resume
