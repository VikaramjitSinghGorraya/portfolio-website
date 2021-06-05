import React, {useState} from 'react'
import {Heading, HStack, Text, VStack, Link, FormControl, Input, Textarea, Flex, Button} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import {linkedInSvg,phoneSvg,emailSvg, githubSvg} from '../helpers/Icons'

const MotionVStack = motion(VStack)

const Contact = () => {

    const [messageInfo, setMessageInfo] = useState({
        email:'',
        name:'',
        message:''
    })

    const inputChangeHandler = (e) =>{
        setMessageInfo({...messageInfo, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log('Submittinng')
    }
    const pageHeading = () =>{
        return(
            <VStack mb = '10' spacing = {10} w = '100%' alignItems = 'flex-start'>
                <Heading>Contact</Heading>
                <hr style = {{color: 'green', width:'100%', borderTop:'0.2em solid Green'}}/>
            </VStack>
        )
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
                <Input name = 'name' type = 'text' placeholder = 'Your name here...' required mt = '5' onChange = {inputChangeHandler} />
                <Input name = 'email' type = 'email' placeholder = 'Your email here...' required mt = '5' onChange = {inputChangeHandler} />
                <Textarea name = 'message' h = '150' placeholder = 'Your message here...' required mt = '5' onChange = {inputChangeHandler} />
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
        <MotionVStack initial = {{x:-100, opacity:0}} animate = {{x:0, opacity:1}} transition = {{duration:0.2}} exit = {{x:100, opacity:1}} spacing = {10} alignItems = 'flex-start' pb = '10' mt = '50'>
            {pageHeading()}
            <Flex direction = {['column','column','column','row']} justifyContent = 'space-between' alignItems ='flex-start' w = '100%' mt = '30'>
                {contactMethods()}
                {contactForm()}
            </Flex>
            {pageFooter()}
        </MotionVStack>
    )
}

export default Contact
