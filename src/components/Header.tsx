import React, { FC } from "react";
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { IHeaderProps, IMenuItemsProps } from "@/interfaces/IHeader";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";


const MenuItems: FC<IMenuItemsProps> = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
)

const Header = ({ authenticated, ...props }: IHeaderProps) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const { isAuthenticated, signOut } = useAuth()
  const router = useRouter()

  const handleLogOut = async () => {
    await signOut()
    router.push('/')
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          Sercel Demo App
        </Heading>
      </Flex>

      <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems><Link href="/">Start</Link></MenuItems>
        <MenuItems><Link href="/rules">Rules</Link></MenuItems>
        <MenuItems><Link href="/scoreboard">Scoreboard</Link></MenuItems>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        {isAuthenticated ?
          <Button bg="transparent" onClick={() => handleLogOut()} border="1px">
            Sign out
          </Button>
          : <Link href="/signin">
            <Button bg="transparent" border="1px" >Sign in</Button>
          </Link>
        }
      </Box>
    </Flex>
  );
};

export default Header;
