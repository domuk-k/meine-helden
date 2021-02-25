import React from 'react';
import { Button, Flex, Heading, HStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import AuthModal from './auth/AuthModal';
import useAuthModal from '../hooks/useAuthModal';

const Header = () => {
  const { signUp, isOpen, onClose, onOpen, isSubmitting } = useAuthModal();

  return (
    <>
      <AuthModal
        isOpen={isOpen}
        onClose={onClose}
        type="Sign Up"
        onSubmit={signUp}
        isSubmitting={isSubmitting}
      />
      <Flex
        as="header"
        width="full"
        height="4rem"
        align="center"
        borderBottom="lightgrey solid 1px"
        px={[2, 6]}
      >
        <Heading as="h1" m={0} flexGrow={1}>
          <NextLink href="/">
            <a>icons</a>
          </NextLink>
        </Heading>
        <HStack spacing={[2, 4]}>
          <Button as="a" onClick={onOpen} variant="ghost">
            Sign In
          </Button>

          <NextLink href="/icons" passHref>
            <Button as="a">Find Icons</Button>
          </NextLink>
        </HStack>
      </Flex>
    </>
  );
};

export default Header;
