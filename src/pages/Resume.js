import React from 'react'
import { VStack, Button, Image, Box } from '@chakra-ui/react'
import {motion} from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'react-lazy-load-image-component/src/effects/black-and-white.css'
import Header from '../layout/Header'
import ResumeScreenshot from '../image/ResumeScreenshot.jpg'
import { resumeDownloadSvg } from '../helpers/Icons'

const MotionVStack = motion(VStack)
const Resume = () => {

    const resumeDisplay = () =>{
        return(
            <LazyLoadImage
                            effect = 'blur'
                            height= '100%'
                            src={ResumeScreenshot} 
                            alt = 'image'
                            width='100%'
                        />

        )
    }

    return (
        <MotionVStack initial = {{x:-100, opacity:0}} animate = {{x:0, opacity:1}} transition = {{duration:0.2}} exit = {{x:100, opacity:1}} alignItems = 'center' spacing = {10} overflow = 'hidden' pb = '10' mt = {['auto','50']}>
            <Header heading = 'Resume'/>
            <VStack spacing = {5}>
                <Box minH = '60vh' w = '100%'>
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
