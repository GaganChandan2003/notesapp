import { Box, Button, Input, Textarea, Flex, useToast, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getApi, addApi } from '../Store/Data/action';
import Navbar from './Navbar';
import css from './Notes.module.css'

const Notes = () => {
    const token = localStorage.getItem("token");
    const toast = useToast();
    const [title, settitle] = useState("");
    const [note, setnote] = useState("");
    const [label, setlabel] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        let notes = {
            title: title,
            note: note,
            label: label
        }
        dispatch(addApi(notes))
            .then(() => (
                dispatch(getApi(token)),
                toast({
                    title: 'Note created.',
                    status: 'success',
                    duration: 5000,
                    position: "top",
                    isClosable: true,
                }),
                setnote(""),
                settitle(""),
                setlabel("None")
            ))

    }
    useEffect(() => {
        dispatch(getApi(token))
    }, [dispatch, token])

    return (
        <>
            <Navbar />
            <Box className={css.style}>
                <Text fontSize="2xl" fontWeight="600" color="white">NOTES</Text>
                <Flex
                    width={{ base: '90%', sm: '90%', md: '75%', lg: '50%' }}
                    margin="auto"
                    direction="column"
                    border="1px solid white"
                    padding="30px"
                    borderRadius="20px">
                    <form action="" onSubmit={handleSubmit}>

                        <Input onChange={(e) => { settitle(e.target.value) }}
                            required
                            border="none"
                            value={title}
                            borderBottom=" 1px solid white"
                            variant="ghoust"
                            background="transparent"
                            color="white"
                            placeholder="Title"
                            _placeholder={{ color: 'white' }}
                            borderRadius="none" />
                        <Textarea
                            color="white"
                            onChange={(e) => { setnote(e.target.value) }}
                            h="40vh"
                            value={note}
                            minH="40vh"
                            maxH="40vh"
                            required
                            placeholder="Note"
                            border="none"
                            variant="ghoust"
                            background="transparent"
                            borderRadius="none"
                            borderBottom=" 1px solid white"
                            _placeholder={{ color: 'white' }} />
                        <Input
                            color="white"
                            value={label}
                            required
                            onChange={(e) => { setlabel(e.target.value) }}
                            placeholder="Label"
                            border="none"
                            variant="ghoust"
                            background="transparent"
                            borderRadius="none"
                            borderBottom=" 1px solid white"
                            _placeholder={{ color: 'white' }} />
                        <Button
                            marginTop="20px"
                            type='Submit'
                            w="40%">
                            Add</Button>
                    </form>
                </Flex>
            </Box>
        </>
    )
}

export default Notes


