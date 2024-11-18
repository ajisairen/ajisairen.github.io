import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  // List,
  // ListItem,
  Icon,
  Stack,
  Text
  // SimpleGrid,
  // useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Technologies from '../components/technologies'
import { BioSection, BioYear } from '../components/bio'
// import { GridItem } from '../components/grid-item'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        {/* <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I am a student at the University of Minnesota.
        </Box> */}
        <Box display={{ md: 'flex' }} mt={10}>
          <Box flexGrow={1}>
            <Stack direction="row" spacing={1} alignItems="baseline">
              <Heading as="h2" variant="page-title">
                Serena Xin
              </Heading>
              <Text>(they/them)</Text>
            </Stack>
            <p>Developer, Designer, and Artist</p>
            <Stack direction="row" spacing={1}>
              <Link href="https://github.com/ajisairen" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                  ml={-1}
                  size={'xs'}
                  iconSpacing={0}
                >
                  /ajisairen
                </Button>
              </Link>
              <Link href="https://github.com/ajisairen" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                  size={'xs'}
                  iconSpacing={0}
                >
                  /in/serena-xin
                </Button>
              </Link>
            </Stack>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="images/abe.png"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            Hello, my name is Serena, and I&apos;m a Junior studying Computer
            Science at the University of Minnesota-Twin Cities. I&apos;m always
            looking to learn new things and develop myself both personally and
            professionally. I would also love to develop software that is both
            meaningful and impactful to the world.
          </Paragraph>
          <Paragraph>
            I&apos;m familiar with software development, but I&apos;m working to
            expand my knowledge into web dev, game design and development,
            mobile apps, and anything else I can get my hands on, really. You
            can check out what I&apos;ve been working on in my portfolio!
          </Paragraph>
          <Box align="center" my={5}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
          <Paragraph>
            I&apos;m also a hobbyist artist and enjoy drawing and crocheting in
            my free time. Creating things has been a passion of mine ever since
            I learned to use a pencil, and I hope to continue making things in
            the future. I have some of my art posted on my art page, so feel
            free to also check it out!
          </Paragraph>
          <Box align="center" my={5}>
            <NextLink href="/art">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My art
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2004</BioYear>
            Born in Toronto, Ontario.
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            Moved to Bentonville, Arkansas.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Started studying at the University of Minnesota - Twin Cities.
          </BioSection>
          <BioSection>
            <BioYear>2026</BioYear>
            Expected graduation year from the University of Minnesota.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ❤
          </Heading>
          <Paragraph>
            Creating new things, Art, Drawing, Crochet, Anime, Video Games
          </Paragraph>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Technologies
          </Heading>
          <Technologies />
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
