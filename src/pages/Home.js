import React, {useEffect} from 'react'
import {VStack, HStack, Heading, Text, Flex, Box, Image, StackDivider} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import {connect} from 'react-redux'
import {getProjectsProcess} from '../redux/actions/Project'
import PortfolioCard from '../layout/PortfolioCard'
import axios from 'axios'

const MotionHeading = motion(Heading)
const Home = ({getProjectsProcess, projectsData}) => {

    useEffect(()=>{
        getProjectsProcess()
    },[])

    const pageHeading = () =>{
        
        return(
            <VStack spacing = {10} alignItems = 'flex-start' w = '100%' mb = '10'>
                <MotionHeading initial = {{opacity:0}} animate = {{opacity:1}} transition = {{duration: 0.8}}>Portfolio</MotionHeading>
            </VStack>
        )
    }

    const projectCard = () =>{
        return(
            <Flex justifyContent = {['center','space-between']} alignItems = 'flex-start'  m = 'auto' flexWrap =' wrap'>
                {projectsData.projects.map((project, index)=>(
                    <PortfolioCard key = {index} photo = {project.photo.data} projectId = {project._id} title = {project.title} description = {project.description} technologiesUsed= {project.technologiesUsed} githubLink = {project.githubLink} liveLink = {project.liveLink} />     
                ))}
            </Flex>  
        )
    }
    return (
        <VStack spacing = {5}  mt = 'auto' justifyContent = 'center'>
            {pageHeading()}
            {projectCard()}
        </VStack>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        getProjectsProcess:()=>dispatch(getProjectsProcess())
    }
}

const mapStateToProps = (state)=>{
    return{
        projectsData: state.project
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
