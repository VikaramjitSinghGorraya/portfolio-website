import React, {useEffect} from 'react'
import {VStack, Flex} from '@chakra-ui/react'
import {connect} from 'react-redux'
import {getProjectsProcess} from '../redux/actions/Project'
import PortfolioCard from '../layout/PortfolioCard'
import Header from '../layout/Header'

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
