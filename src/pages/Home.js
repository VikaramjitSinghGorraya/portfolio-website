import React, {useEffect} from 'react'
import {VStack, HStack, Heading, Text, Flex, Box, Image, StackDivider} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import {connect} from 'react-redux'
import {Helmet} from 'react-helmet'
import MetaTags from 'react-meta-tags'
import {getProjectsProcess} from '../redux/actions/Project'
import PortfolioCard from '../layout/PortfolioCard'
import Header from '../layout/Header'

const MotionHeading = motion(Heading)
const Home = ({getProjectsProcess, projectsData}) => {

    useEffect(()=>{
        getProjectsProcess()
    },[])

    const projectCard = () =>{
        return(
            <Flex justifyContent = {['center','space-between']} alignItems = 'flex-start'  m = 'auto' flexWrap =' wrap'>
                {projectsData.projects.map((project, index)=>(
                    <PortfolioCard key = {index}projectId = {project._id} title = {project.title} description = {project.description} technologiesUsed= {project.technologiesUsed} githubLink = {project.githubLink} liveLink = {project.liveLink} />     
                ))}
            </Flex>  
        )
    }
    return (
        <VStack spacing = {5} justifyContent = 'center' mt = {['auto','50']}>
            {/* <Helmet>
                <title>Home | Vikaramjit</title>
            </Helmet> */}
            <MetaTags>
                <title>Home | Vikaramjit Singh</title>
            </MetaTags>
            <Header heading = 'Portfolio'/>
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
