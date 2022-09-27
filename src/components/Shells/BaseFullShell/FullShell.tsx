import React, { ReactNode } from 'react';
// Mantine
import { Center } from '@mantine/core';

export type FullShellProps = {
  children: ReactNode;
};

const FullShell: React.FC<FullShellProps> = ({ children }) => (
  <Center
    sx={{
      height: '100vh',
    }}
  >
    {children}
  </Center>
);

export default FullShell;
