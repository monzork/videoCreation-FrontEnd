import React, { ReactNode } from 'react';
// Mantine
import { AppShell, useMantineTheme } from '@mantine/core';
import NavbarNested from './Header';

export type MainShellProps = {
  children: ReactNode;
};

const MainShell: React.FC<MainShellProps> = ({ children }) => {
  const theme = useMantineTheme();

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      padding="md"
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<NavbarNested />}
      fixed
    >
      {children}
    </AppShell>
  );
};

export default MainShell;
