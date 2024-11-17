import {
  Container,
  Badge,
  Stack,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, /**ProjectImage, **/ Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="It's Raining Helvetica">
    <Container mt={10}>
      <Title>
        It&apos;s Raining Helvetica <Badge>Fall 2024</Badge>
      </Title>
      <Stack spacing={4}>
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://youtube.com/embed/fYfgbJo7qkU"
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
        <P>
          Assignment #1 for CSCI 4611: Programming Interactive Graphics and
          Games.
        </P>

        <P>
          An interactive installation where text falls from the sky and reacts
          to the user&apos;s movements on camera. This project was inspired by
          Romy Achituv and Camille Utterback&apos;s{' '}
          <Link href="http://camilleutterback.com/projects/text-rain/">
            Text Rain
          </Link>
          . My task was to implement the falling text, its physics, and image
          manipulation.
        </P>
      </Stack>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://csci-4611-fall-2024.github.io/assignment-1-ajisairen/">
            github.io <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Node.js, TypeScript, GopherGFX (a custom graphics library)
          </span>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="wip">
            wip<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>
    </Container>
  </Layout>
)

export default Project
// export { getServerSideProps } from '../../components/chakra'
