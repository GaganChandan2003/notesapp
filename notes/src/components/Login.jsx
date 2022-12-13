import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import { loginApi } from '../Store/Auth/action';
import { useNavigate, Link } from 'react-router-dom';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuth } = useSelector((state) => state.reducer);
    const toast = useToast()
    if (isAuth === true) {
        toast({
            title: 'Logged in Sucessfully',
            status: 'success',
            duration: 5000,
            position: "top",
            isClosable: true,
        })
        navigate('/notes')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email,
            password
        }
        
        dispatch(loginApi(data)).then(()=>
        {
            var token=localStorage.getItem("token")
            if (!token) {
                toast({
                    title: 'Invalid credentials',
                    status: 'error',
                    duration: 5000,
                    position: "top",
                    isClosable: true,
                })
            }
        })
    }
    return (

        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <form action="" onSubmit={handleSubmit}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" onChange={(e) => setemail(e.target.value)} />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" onChange={(e) => setpassword(e.target.value)} />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Remember me</Checkbox>
                                    <Text color={'blue.400'}>Forgot password?</Text>
                                </Stack>
                                <Button
                                    bg={'blue.400'}
                                    type="submit"
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Sign in
                                </Button>

                            </Stack>
                        </form>
                        <Box textAlign="center"><Text>Don't have an account <Link to="/register"><span style={{ color: "blue" }}>Sign up</span> </Link></Text></Box>
                    </Stack>
                </Box>
            </Stack>
        </Flex>

    )
}

export default Login