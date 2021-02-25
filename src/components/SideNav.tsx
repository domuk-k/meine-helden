import React from 'react';
import { Box, ChakraProps, Icon, VStack } from '@chakra-ui/react';
import { NavButton } from './NavButton';
import { AiOutlineHome } from 'react-icons/ai';
import { BsMap } from 'react-icons/bs';

interface IProps extends ChakraProps {}

function SideNav(props: IProps) {
  return (
    <VStack {...props}>
      <NavButton href="/">
        <Icon as={AiOutlineHome} />
        <a>Home</a>
      </NavButton>
      <NavButton href="/map">
        <Icon as={BsMap} />
        <a>Map</a>
      </NavButton>
      <NavButton href="/category">
        <Icon as={BsMap} />
        <a>Category</a>
      </NavButton>
    </VStack>
  );
}

export default SideNav;
