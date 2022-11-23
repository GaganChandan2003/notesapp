// import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/react'
// import React, { useEffect } from 'react'
import {  useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom'
// import { deleteApi, getApi } from '../Store/Data/action';
import Navbar from './Navbar';
import css from './FullNote.module.css'


const FullNote = () => {
    let {id}=useParams();
    let data=useSelector((state)=>state.notesReducer.notes);
    let note=data.filter((el)=>
    {
        return el._id===id
    })[0]

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
    return (
        <>
            <Navbar />
            <Box w="100%" padding="5vh 5vh 20vh 5vh" height="auto" minH="89.6vh" h="auto" className={css.box}  >
                <Flex height="2.5rem" width="100px" margin="auto" bgColor="blue.200" borderRadius=" 8px 8px 0 0 " alignItems="center" justifyContent="space-around" border="2px solid black" borderBottom="none" >
                <i class="fa-solid fa-circle-play" style={{fontSize:"20px"}} onClick={handlePlay}></i>
                <i class="fa-solid fa-circle-stop" style={{fontSize:"20px"}} onClick={handleStop}></i>
                </Flex>
                <Box 
                border="2px solid black"
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
                    <Box border="2px solid black" borderRadius="8px 8px 0 0"  fontSize="13px" padding=" 4px 10px" fontWeight="650" bgColor="blue.200" >{note.label}</Box>
                    <Box border="2px solid black" borderRadius="8px 8px 0 0"  fontSize="13px" padding=" 4px 10px" fontWeight="650" bgColor="blue.200" >{note.date}</Box>
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
                </Box>
            </Box>
        </>
    )
}

export default FullNote

