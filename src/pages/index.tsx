import { Flex, Box } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header';
import { Main } from '../components/Main';
import SideNav from '../components/SideNav';

const Container: React.FC = (props) => (
  <Box
    as="section"
    maxWidth="1280px"
    minHeight="calc(100vh - 4rem)"
    textAlign="center"
    mx="auto"
    px={6}
    {...props}
  />
);

const IndexPage = () => (
  <>
    <Header />
    <Flex>
      <SideNav
        display={['none', null, 'block']}
        maxWidth="18rem"
        bg="lightgray"
      />
      <Container>
        <Main />
      </Container>
    </Flex>
  </>
);

export default IndexPage;
