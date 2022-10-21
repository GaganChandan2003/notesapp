import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerApi } from '../Store/Auth/action';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';


const Register = () => {
    const [username, setusername] = useState("");
    
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast=useToast();
    const handleSubmit = (e) => {
        e.preventDefault();
        const details = {
            "username":username,
            "email": email,
            "password": password
        }

        dispatch(registerApi(details)).then(() =>(  
            toast({
                title: 'Registered Sucess',
                status: 'success',
                duration: 5000,
                position:"top",
                isClosable: true,
              }),
             navigate("/login")) )
    }
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign up to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <form action="" onSubmit={handleSubmit}>
                        <FormControl id="username">
                                <FormLabel>Username</FormLabel>
                                <Input type="text" required onChange={(e) => { setusername(e.target.value) }} />
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" required onChange={(e) => { setemail(e.target.value) }} />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" required onChange={(e) => { setpassword(e.target.value) }} />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                </Stack>
                                <Button
                                    bg={'blue.400'}
                                    type="submit"
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Sign up
                                </Button>
                            </Stack>
                        </form>
                        <Box textAlign="center"><Text>Already have an account <Link to="/login"><span style={{ color: "blue" }}>Login</span> </Link></Text></Box>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )



}

export default Register