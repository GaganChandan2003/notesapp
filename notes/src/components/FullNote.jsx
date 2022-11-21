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
    return (
        <>
            <Navbar />
            <Box w="100%" padding="5vh 5vh 20vh 5vh" height="auto" minH="89.6vh" h="auto" className={css.box}  >
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

// {
//     newdata.map((el) => {
//         return <Box key={el._id}
//             h="auto"
//             overflowY="hidden"
//             padding="20px"
//             borderRadius="2vh"
//             background="#d2d2d2"
//             display="flex"
//             flexDirection="column"
//             alignItems="left"
//             gap="1vh"
//         >
//             <Flex
//                 justifyContent="space-between">
//                 <Box
//                     fontSize={{ base: '11px', sm: '11px', md: "10px", lg: "10px" }}
//                     textAlign="center" alignContent="center"
//                     h="auto" w="auto"
//                     padding="0.5vh 1.5vh"
//                     background="#3a668b"
//                     color="white"
//                     borderRadius="5px"
//                 >{el.label.toUpperCase()}</Box>
//                 <Box
//                     fontSize={{ base: '11px', sm: '11px', md: "10px", lg: "10px" }}
//                     textAlign="center" alignContent="center"
//                     h="auto" w="auto"
//                     padding="0.5vh 1.5vh"
//                     background="#3a668b"
//                     color="white"
//                     borderRadius="5px"
//                 >{el.date}</Box>
//             </Flex>
//             <Text
//                 fontWeight="600"
//                 fontSize={{ base: '16px', sm: '16px', md: "20px", lg: "20px" }}
//             >{el.title}</Text>
//             <Text
//                 padding="0"
//                 height="auto"
//                 overflowY="hidden"
//                 fontSize={{base:"13px",sm:"15px",md:"15px",lg:"18px"}}
//                 border="none"
//                 outline="none"
//                 variant="ghoust"
//                 disabled
//                 _disabled={{ color: "black" }}
//                 background="transparent"
//             >{el.note}</Text>
//             <Flex justifyContent="center" gap="2%" marginTop="20px">
//                 <Button background="transparent" variant="ghost" border="none" outline="none" _hover={{ background: "transparent" }} onClick={handleEdit}><EditIcon /></Button>
//                 <Button background="transparent" variant="ghost" border="none" outline="none" _hover={{ background: "transparent" }} onClick={handleDelete}><DeleteIcon /></Button>
//             </Flex>
//         </Box>
//     })
// }





// const dispatch = useDispatch();
    
// const toast = useToast();

// let { id } = useParams();

// useEffect(() => {
//     dispatch(getApi())
// }, [dispatch]);

// const nav = useNavigate();

// let data = useSelector((state) => state.notesReducer.notes);

// let newdata = data.filter((el) => {
//     if (el._id === id) {
//         return el;
//     }
// });

// const handleEdit = () => {
//     nav(`/edit/${id}`)
// }

// const handleDelete = () => {
//     dispatch(deleteApi(id)).then(() => (
//         toast({
//             title: 'Note Deleted',
//             status: 'success',
//             duration: 5000,
//             position: "top",
//             isClosable: true,
//         }),
//         nav("/allnotes")

//     ))
// }