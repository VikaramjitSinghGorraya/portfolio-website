import React, {useEffect, useState} from 'react'
import {VStack, HStack, Heading, Text, Flex, Image, Link, Box, Skeleton, StackDivider} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'react-lazy-load-image-component/src/effects/black-and-white.css'
import {githubSvg, visitSiteSvg} from '../helpers/Icons'
import image from '../image/ds.png'
import axios from 'axios'

const MotionVStack = motion(VStack)
const PortfolioCard = ({ photo ,projectId, title, description, technologiesUsed, githubLink, liveLink}) => {
    
    const [projectImage, setProjectImage] = useState(null)
    
    const fetchImage = () =>{
        axios.get(`https://portfolio-website-backend.vercel.app/api/${projectId}/getProjectPhoto`)
        .then((res)=> {setProjectImage(res.config.url)
        })
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        fetchImage()
    },[])

    return (
            <MotionVStack initial ={{marginTop:100, opacity:0}} animate = {{marginTop:0, opacity:1}} transition = {{duration:0.4}} alignItems = 'flex-start' maxW ={['100%','48%']} mb = '10'>
                <Box minH = {['25vw']} minW = '100%'>
                    <LazyLoadImage
                        effect = 'blur'
                        height= '100%'
                        src={projectImage} 
                        alt = 'image'
                        width='100%'
                    />
                </Box>
                <VStack spacing = {5} alignItems = 'flex-start' mt = '40'>
                    <Heading as = 'h6' fontSize = '2xl'>{title}</Heading>
                    <VStack alignItems = 'flex-start' spacing = {5}>
                        <Text as = 'p' fontSize = 'xl'>{description} </Text>
                        <VStack alignItems = 'flex-start' spacing = {0}>
                            <Text fontWeight = 'bold'>Tech used:</Text>
                            <HStack flexWrap = 'wrap' spacing = {0}>
                                {technologiesUsed.map((technology, index)=>(
                                        <Text key = {index} as = 'p' fontWeight = 'bold'>{technology}{index===technologiesUsed.length-1? '' : `,\u00A0 \u00A0`} </Text>
                                ))}
                            </HStack>
                        </VStack>
                        <HStack spacing = {10}>
                            <HStack>
                                {githubSvg()}
                                <Link isExternal href = {githubLink}>Github</Link>
                            </HStack>
                            <HStack>
                                {visitSiteSvg()}
                                <Link isExternal href = {liveLink}>Visit the website</Link>
                            </HStack>
                        </HStack>
                    </VStack>
                </VStack>
            </MotionVStack>
)}

export default PortfolioCard
