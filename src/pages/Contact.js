import React, {useState} from 'react'
import {Heading, HStack, Text, VStack, Link, FormControl, Input, Textarea, Flex, Button} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import {connect} from 'react-redux'
import {sendMessage} from '../redux/actions/Visitor'
import {linkedInSvg,phoneSvg,emailSvg, githubSvg} from '../helpers/Icons'
import Toast from '../helpers/Toast'
import Header from '../layout/Header'

const MotionVStack = motion(VStack)

const Contact = ({sendMessage, visitorData}) => {

    
    const {error, success} = visitorData

    const [messageInfo, setMessageInfo] = useState({
        email:'',
        name:'',
        message:''
    })

    const [showMessage, setShowMessage] = useState(false)

    const inputChangeHandler = (e) =>{
        setShowMessage(false)
        setMessageInfo({...messageInfo, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        setShowMessage(false)
        sendMessage(messageInfo)
        setMessageInfo({...messageInfo, name:'', email:'', message:''})
        setShowMessage(true)
    }
    const contactMethods = () =>{
        return(
            <VStack alignItems = 'flex-start' spacing = {8} >
                <Heading>Contact Me Using Following Options...</Heading>
                <VStack alignItems = 'flex-start' spacing = {4} pl = '4' >
                    <HStack>{phoneSvg()}<Text as = 'p' fontSize = 'large'>+1 902-943-0518</Text></HStack>
                    <HStack>{emailSvg()}<Text fontSize = 'large'>vikaramjitgoraya01@gmail.com</Text></HStack>
                    <Link href = 'https://github.com/VikaramjitSinghGorraya' isExternal><HStack>{githubSvg()}<Text fontSize = 'large'>Guthub</Text> </HStack></Link>
                    <Link href = 'https://www.linkedin.com/in/vikaramjit-goraya-961a63152/' isExternal><HStack>{linkedInSvg()}<Text fontSize = 'large'>LinkedIn</Text></HStack></Link>
                </VStack>
            </VStack>
        )
    }

    const contactForm = () =>{
        return(
            <Flex direction = 'column' mt = {['85','85','85','0']}>
            <Heading>Or Fill Out And Submit This Form</Heading>
            <FormControl w = '100%' onSubmit = {submitHandler} >
                <form>
                <Input name = 'name' type = 'text' placeholder = 'Your name here...' required mt = '5' onChange = {inputChangeHandler} value = {messageInfo.name} />
                <Input name = 'email' type = 'email' placeholder = 'Your email here...' required mt = '5' onChange = {inputChangeHandler} value = {messageInfo.email} />
                <Textarea name = 'message' h = '150' placeholder = 'Your message here...' required mt = '5' onChange = {inputChangeHandler} value = {messageInfo.message} />
                <Button type = 'submit'>SUBMIT</Button>
                </form>
                
            </FormControl>
            </Flex>
        )
    }

    const pageFooter = () =>{
        return(
            <Text as = 'p' fontSize = {['md','xl','xl']} pt = {['10','5','5']}>Created by Vikaramjit Singh</Text>
        )
    }

    return (
        <MotionVStack initial = {{x:-100, opacity:0}} animate = {{x:0, opacity:1}} transition = {{duration:0.2}} exit = {{x:100, opacity:1}} spacing = {10} alignItems = 'flex-start' pb = '10' mt = {['auto','50']}>
            <Header heading = 'Contact' />
            <Flex direction = {['column','column','column','row']} justifyContent = 'space-between' alignItems ='flex-start' w = '100%' mt = '30'>
                {contactMethods()}
                {contactForm()}
            </Flex>
            {pageFooter()}
            {error && showMessage && <Toast toastId = 'error-tost' title = 'Following error occured' description = {error} successStatus = {false}/>}
            {success && showMessage&& <Toast toastId = 'success-tost' title = 'It is done!!!' description = {success} successStatus = {true}/>}

        </MotionVStack>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        sendMessage: (messageData)=>dispatch(sendMessage(messageData))
    }
}

const mapStateToProps = (state)=>{
    return{
        visitorData: state.visitor
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Contact)
