import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../footer'

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="4과문 생성기입니다." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Chan-soo Kim" />
        <title>4과문 생성기</title>
      </Head>
      <Container py={10} maxW="container.xl">
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default MainLayout
