import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Flex, Spinner, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar';
import css from './FullNote.module.css'
import { deleteApi, getApi, getOne } from '../Store/Data/action';


const FullNote = () => {
    let nav = useNavigate();
    let { id } = useParams();
    const dispatch = useDispatch();



    let { isLoading } = useSelector((state) => state.notesReducer);
    let note = useSelector((state) => state.notesReducer.oneNote);
    useEffect(() => {
        dispatch(getOne(id))
    }, [id,dispatch])


    const handlePlay = () => {
        let speech = new SpeechSynthesisUtterance();
        speech.text = note.note;
        speech.lang = 'en-US';
        speech.rate = 0.7;
        speech.volume = 1;
        speech.pitch = 1;
        speechSynthesis.speak(speech);
    }

    const handleStop = () => {
        window.speechSynthesis.cancel()
    }

    const handleDelete = () => {

        dispatch(deleteApi(id)).then(() => dispatch(getApi())).catch((err) => console.log(err))
        nav("/allnotes")
    }

    const handleEdit = () => {
        nav(`/edit/${id}`)
    }
    return (
        <>
            <Navbar />
             {isLoading ? <Box w="100%" padding="5vh 5vh 20vh 5vh" height="auto" minH="89.6vh" h="auto" className={css.box} display="flex" justifyContent="center" alignItems="center">
                 <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
             </Box> :
                <Box w="100%" padding="5vh 5vh 20vh 5vh" height="auto" minH="89.6vh" h="auto" className={css.box}  >
                    <Flex height="2.5rem" width="100px" margin="auto" bgColor="blue.200" borderRadius=" 8px 8px 0 0 " alignItems="center" justifyContent="space-around" border="2px solid black" borderBottom="none" >
                        <i class="fa-solid fa-circle-play" style={{ fontSize: "20px" }} onClick={handlePlay}></i>
                        <i class="fa-solid fa-circle-stop" style={{ fontSize: "20px" }} onClick={handleStop}></i>
                    </Flex>
                    <Box
                        border="2px solid black"
                        paddingBottom="1rem"
                        borderRadius="3vh"
                        height="auto"
                        backgroundColor="blue.200"
                        boxShadow="8px 8px 0px 2px rgba(0,0,0,0.67)"
                    >
                        <Flex
                            height="3rem"
                            borderBottom="1px solid black"
                            padding="20px 20px 0 20px"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Box border="2px solid black" borderRadius="8px 8px 0 0" fontSize="13px" padding=" 4px 10px" fontWeight="650" bgColor="blue.200" >{note.label}</Box>
                            <Box border="2px solid black" borderRadius="8px 8px 0 0" fontSize="13px" padding=" 4px 10px" fontWeight="650" bgColor="blue.200" >{note.date}</Box>
                        </Flex>
                        <Flex
                            borderTop="1px solid black" padding="20px" direction="column">
                            <Text
                                fontSize="25px"
                                fontWeight="700"
                                fontFamily="'Zilla Slab', serif;"
                            >{note.title}</Text>
                            <Text fontSize="15px"
                                fontWeight="600"
                                fontFamily="'Zilla Slab', serif;" textAlign="justify">{note.note}</Text>

                        </Flex>
                        <Flex width="100px" height="2rem" margin="auto">
                            <Box border="2px solid black" borderRight="1px solid" borderRadius="5px 0 0 5px" w="50%" display="flex" justifyContent="center" fontSize="13px" alignItems="center" _hover={{ backgroundColor: "blue.900", color: "white", fontSize: "15px" }} onClick={handleDelete}><DeleteIcon /></Box>
                            <Box border="2px solid black" borderLeft="1px solid" borderRadius="0 5px 5px 0" w="50%" display="flex" justifyContent="center" fontSize="13px" alignItems="center" _hover={{ backgroundColor: "blue.900", color: "white", fontSize: "15px" }} onClick={handleEdit}><EditIcon /></Box>
                        </Flex>
                    </Box>
                </Box>}
        </>
    )
}

export default FullNote

