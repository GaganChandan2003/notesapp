import { Box, Button, Flex, Input, Text, Textarea, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editApi, getApi } from '../Store/Data/action';
import Navbar from './Navbar';
import css from "./Notes.module.css"

const EditNote = () => {
  let { id } = useParams();
  let notes = useSelector((state) => state.notesReducer.oneNote);

 
  const nav=useNavigate();

  const [title, settitle] = useState(notes.title);
  const [note, setnote] = useState(notes.note);
  const [label, setlabel] = useState(notes.label);
  const toast = useToast();
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let notes = {
      title: title,
      note: note,
      label: label
    }
    
    dispatch(editApi(id,notes)).then(()=>(

      toast({
        title: 'Note Edited',
        status: 'success',
        duration: 5000,
        position: "top",
        isClosable: true,
    }),
    nav(`/note/${id}`)
    ))
  }

 

  useEffect(() => {
    dispatch(getApi());
  }, [])

  return (
    <>
      <Navbar />
      <Box className={css.style}>
        <Text fontSize="2xl" fontWeight="600" color="white">EDIT NOTE</Text>
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
            fontSize={{base:"13px",sm:"15px",md:"15px",lg:"18px"}}
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
              EDIT</Button>
          </form>
        </Flex>
      </Box>
    </>
  )
}

export default EditNote