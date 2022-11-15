import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Text, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { deleteApi, getApi } from '../Store/Data/action';
import Navbar from './Navbar';
import css from './FullNote.module.css'

const FullNote = () => {

    const dispatch = useDispatch();
    
    const toast = useToast();

    let { id } = useParams();

    useEffect(() => {
        dispatch(getApi())
    }, [dispatch]);

    const nav = useNavigate();

    let data = useSelector((state) => state.notesReducer.notes);

    let newdata = data.filter((el) => {
        if (el._id === id) {
            return el;
        }
    });

    const handleEdit = () => {
        nav(`/edit/${id}`)
    }

    const handleDelete = () => {
        dispatch(deleteApi(id)).then(() => (
            toast({
                title: 'Note Deleted',
                status: 'success',
                duration: 5000,
                position: "top",
                isClosable: true,
            }),
            nav("/allnotes")

        ))
    }

    return (
        <>
            <Navbar />
            <Box w="100%" padding="5vh 5vh 20vh 5vh" height="auto" minH="89.6vh" h="auto" className={css.box}>
                {
                    newdata.map((el) => {
                        return <Box key={el._id}
                            h="auto"
                            overflowY="hidden"
                            padding="20px"
                            borderRadius="2vh"
                            background="#d2d2d2"
                            display="flex"
                            flexDirection="column"
                            alignItems="left"
                            gap="1vh"
                        >
                            <Flex
                                justifyContent="space-between">
                                <Box
                                    fontSize={{ base: '11px', sm: '11px', md: "10px", lg: "10px" }}
                                    textAlign="center" alignContent="center"
                                    h="auto" w="auto"
                                    padding="0.5vh 1.5vh"
                                    background="#3a668b"
                                    color="white"
                                    borderRadius="5px"
                                >{el.label.toUpperCase()}</Box>
                                <Box
                                    fontSize={{ base: '11px', sm: '11px', md: "10px", lg: "10px" }}
                                    textAlign="center" alignContent="center"
                                    h="auto" w="auto"
                                    padding="0.5vh 1.5vh"
                                    background="#3a668b"
                                    color="white"
                                    borderRadius="5px"
                                >{el.date}</Box>
                            </Flex>
                            <Text
                                fontWeight="600"
                                fontSize={{ base: '16px', sm: '16px', md: "20px", lg: "20px" }}
                            >{el.title}</Text>
                            <Text
                                padding="0"
                                height="auto"
                                overflowY="hidden"
                                fontSize={{base:"13px",sm:"15px",md:"15px",lg:"18px"}}
                                border="none"
                                outline="none"
                                variant="ghoust"
                                disabled
                                _disabled={{ color: "black" }}
                                background="transparent"
                            >{el.note}</Text>
                            <Flex justifyContent="center" gap="2%" marginTop="20px">
                                <Button background="transparent" variant="ghost" border="none" outline="none" _hover={{ background: "transparent" }} onClick={handleEdit}><EditIcon /></Button>
                                <Button background="transparent" variant="ghost" border="none" outline="none" _hover={{ background: "transparent" }} onClick={handleDelete}><DeleteIcon /></Button>
                            </Flex>
                        </Box>
                    })
                }
            </Box>
        </>
    )
}

export default FullNote