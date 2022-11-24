import { Box, Flex, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApi } from '../Store/Data/action'
import Navbar from './Navbar';
import { Link } from "react-router-dom"
import css from './AllNotes.module.css'


const AllNotes = () => {
    const dispatch = useDispatch();
    let data = useSelector((state) => state.notesReducer.notes);
    console.log(data);
    let { isLoading } = useSelector((state) => state.notesReducer);
    useEffect(() => {
        dispatch(getApi())
    }, [dispatch])
    return (
        < >
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
            <Box w="100%" padding="5vh 5vh 20vh 5vh" height="auto" minH="89.6vh" h="auto" className={css.box}>
                    <SimpleGrid columns={{ base: 1, sm: 1, md: 3, lg: 4 }} w="100%" justifyContent="center" gap="20px" alignItems="center" >
                        {
                            data.map((el) => {
                                return <Flex key={el._id}
                                    boxShadow="8px 8px 0px 2px rgba(0,0,0,0.67)"
                                    border="2px solid black"
                                    h="50vh"
                                    overflowY="hidden"
                                    borderRadius="3vh"
                                    background="#d2d2d2"
                                    flexDirection="column"
                                    alignItems="left"
                                >
                                    <Flex
                                        backgroundColor="blue.200"
                                        height="15%"
                                        padding="20px"
                                        alignItems="center"
                                        justifyContent="space-between"
                                        borderBottom="1px solid black"
                                        fontSize="20px"
                                        fontFamily="'Zilla Slab', serif;"
                                        fontWeight="700"
                                        letterSpacing="1px"

                                    >
                                        <Box>{el.title}</Box>
                                    </Flex>
                                    <Box
                                        borderTop="1px solid black"
                                        padding="20px"
                                        bgColor="blue.200"
                                        height="85%"
                                        textAlign="center"
                                    >
                                        <Text
                                        minH="85%"
                                        maxH="85%"
                                        overflowY="hidden"
                                        fontWeight="600"
                                        fontFamily="'Zilla Slab', serif;"
                                        fontSize={{ base: '15px', sm: '15px', md: "15px", lg: "15px" }}
                                        marginBottom="2px"
                                    > {el.note}</Text>
                                    <Link to={`/note/${el._id}`}><Text color="blue" fontFamily="'Zilla Slab', serif;" fontSize="14px">Read more...</Text></Link>
                                    </Box>
                                </Flex>
                            })
                        }
                    </SimpleGrid>
                </Box>}

        </>
    )
}

export default AllNotes


                            //   <Box key={el._id}
                            //         h="50vh"
                            //         overflowY="hidden"
                            //         padding="20px"
                            //         borderRadius="2vh"
                            //         background="#d2d2d2"
                            //         display="flex"
                            //         flexDirection="column"
                            //         alignItems="left"
                            //         gap="1vh"
                            //     >
                            //         <Flex
                            //             justifyContent="space-between"
                            //             backgroundColor="blue.200">
                            //             <Box
                            //                 fontSize={{ base: '11px', sm: '11px', md: "10px", lg: "10px" }}
                            //                 textAlign="center" alignContent="center"
                            //                 h="auto" w="auto"
                            //                 padding="0.5vh 1.5vh"
                            //                 background="#3a668b"
                            //                 color="white"
                            //                 borderRadius="5px"
                            //             >{el.label.toUpperCase()}</Box>
                            //             <Box
                            //                 fontSize={{ base: '11px', sm: '11px', md: "10px", lg: "10px" }}
                            //                 textAlign="center" alignContent="center"
                            //                 h="auto" w="auto"
                            //                 padding="0.5vh 1.5vh"
                            //                 background="#3a668b"
                            //                 color="white"
                            //                 borderRadius="5px"
                            //             >{el.date}</Box>
                            //         </Flex>
                            //         <Text
                            //             fontWeight="600"
                            //             fontSize={{ base: '16px', sm: '16px', md: "20px", lg: "20px" }}
                            //         >{el.title}</Text>
                            //         <Textarea
                            //             padding="0"
                            //             minH="61%"
                            //             maxH="61%"
                            //             overflowY="hidden"
                            //             fontSize={{ base: '15px', sm: '15px', md: "15px", lg: "15px" }}
                            //             border="none"
                            //             outline="none"
                            //             variant="ghoust"
                            //             disabled
                            //             _disabled={{ color: "black" }}
                            //             background="transparent"
                            //             value={el.note}
                            //         />
                            //         <Link to={`/note/${el._id}`}><Text color="blue" fontSize="14px">Read more...</Text></Link>
                            //     </Box>