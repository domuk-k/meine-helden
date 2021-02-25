import React from 'react';
import Link from 'next/link';
import { Box, Button } from '@chakra-ui/react';

type Props = {
  href: string;
  children: React.ReactNode;
};

export function NavButton({ href, children }: Props) {
  return (
    <Link href={href}>
      <Button
        w="90%"
        variant="ghost"
        _hover={{
          transform: 'translate(2px,0)',
        }}
      >
        {children}
      </Button>
    </Link>
  );
}
