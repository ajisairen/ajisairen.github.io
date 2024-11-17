import {
  Container,
  Badge,
  Stack,
  Link,
  List,
  ListItem
  //   UnorderedList
  // AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="TomoBread">
    <Container mt={10}>
      <Title>
        TomoBread <Badge>MadHacks 2024</Badge>
      </Title>
      <Stack spacing={4}>
        <ProjectImage
          src="/images/projects/tomobread_card.gif"
          alt="Title card for Tomobread"
        />
        <P>Winner of MadHacks 2024 Hackers&apos; Choice Award </P>
        <P>
          TomoBread is an accountability app that takes inspiration from virtual
          pets like the Tamagotchi line of products. With TomoBread, users will
          not only be rewarded for doing well, but they also may be punished for
          procrastination with their pet becoming upset or unhealthy.
        </P>
      </Stack>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://to-mo.tech/">
            to-mo.tech <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Devpost</Meta>
          <Link href="https://devpost.com/software/tomobread">
            devpost.com/software/tomobread <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/CorinaNC/TomoTech">
            github.com/CorinaNC/TomoTech <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React, Chakra-UI, FastAPI, Figma, REST API, Vite, JavaScript,
            TypeScript, Python, CSS, HTML
          </span>
        </ListItem>
      </List>

      <ProjectImage src="/images/projects/tomobread_01.png" alt="TomoBread" />
    </Container>
  </Layout>
)

export default Project
// export { getServerSideProps } from '../../components/chakra'
