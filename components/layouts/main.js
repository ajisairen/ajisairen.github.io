import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=devicee-width, initial-scale=1" />
        <meta name="description" content="Serena's Homepage" />
        <meta name="author" content="Serena Xin" />
        <meta name="author" content="ajisairen" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:url" content="https://ajisairen.github.io/" />
        <meta name="theme-color" content="#9576BC" data-react-helmet="true" />
        <meta name="og:title" content="Serena Xin" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/card.png" />
        <meta
          property="og:description"
          content="Serena's personal portfolio website"
        />
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
