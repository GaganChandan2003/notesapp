import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Image,
  Icon,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { logoutApi } from '../Store/Auth/action';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch=useDispatch();
  const handleLogout=()=>
  {
    dispatch(logoutApi());
  }

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position="sticky" top="0" zIndex="10">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Link to="/notes"><Text fontWeight="800">SPOIDY</Text></Link>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
                <Link to="/notes"><Text fontWeight="500" fontSize="15px">HOME</Text></Link>
              <Link to="/allnotes"><Text fontWeight="500" fontSize="15px">NOTES</Text></Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
               display="flex" alignItems="center" text justifyContent="center"  fontSize="20px"
                minW={0}>
               <Text fontWeight="700" >S</Text>
              </MenuButton>
              <MenuList>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            <Link to="/notes"><Text fontWeight="500" fontSize="13px">HOME</Text></Link>
              <Link to="/allnotes"><Text fontWeight="500" fontSize="13px">NOTES</Text></Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}