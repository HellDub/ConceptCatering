import React from 'react'
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    Image,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
  } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Logo from "../../assets/RAM-logo.svg"
  interface Props {
    children: React.ReactNode
    path: string;
  }

  const Links = [
    { name: 'Home', path: '/' },
    { name: 'Food', path: '/food' },
    { name: 'Packs', path: '/packs' },
  ];

  const NavLink = (props: Props) => {
    const { children,path } = props

    return (
      <Box
        as="a"
        px={3}
        py={1}

        href={path}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          boxShadow:'0 0 11px rgba(255, 255, 255, 0.2)',
          textColor: 'yellow',
        }}
       >
        {children}
      </Box>
    )
  }

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Box m={2} textColor={"#EA906C"} bgColor={"#141E46"} px={4} rounded={10}>
      <Flex h={"60px"}  alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box as="a">
            <Image src={Logo} w={"80px"} />
          </Box>

        </HStack>
        <HStack as={'nav'}  spacing={5} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink path={link.path} key={link.name}>{link.name}</NavLink>
            ))}
          </HStack>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
              <Avatar
                size={'sm'}
                src={
                  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                }
              />
            </MenuButton>
            <MenuList textColor={"black"}>
              <MenuItem>My Account</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem textColor={"red"}>Log Out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
               <NavLink path={link.path} key={link.name}>{link.name}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>


  </>
  )
}

export default Navbar