import React from 'react';
import { Button, HStack, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function HeaderButtons() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <HStack>
      <Button variant="ghost" onClick={toggleColorMode}>
        {isDark ? <MoonIcon /> : <SunIcon />}
      </Button>
    </HStack>
  );
}

export default HeaderButtons;
