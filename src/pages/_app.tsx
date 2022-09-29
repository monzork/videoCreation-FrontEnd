import { Fragment, useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';

import { AppProps } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';

import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { Page } from '@/types/page';

type Props = AppProps & {
  Component: Page;
  colorScheme: ColorScheme;
};

export default function App(props: Props) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Fragment;
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title>Video Creation Platform</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Layout>
          <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
              <NotificationsProvider>
                <>{getLayout(<Component {...pageProps} />)}</>
              </NotificationsProvider>
            </MantineProvider>
          </ColorSchemeProvider>
        </Layout>
      </QueryClientProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
