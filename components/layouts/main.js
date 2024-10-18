import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=devicee-width, initial-scale=1" />
        <meta content="Serena Xin" property="og:title" />
        <meta content="Serena's Homepage" property="og:description" />
        <meta
          content="https://ajisairen.github.io/"
          property="og:url"
        />
        <meta content="/images/card.png" property="og:image" />
        <meta content="#9576BC" data-react-helmet="true" name="theme-color" />
        <title>Serena Xin - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="conainer.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
