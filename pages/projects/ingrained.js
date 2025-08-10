import {
  Container,
  Badge,
  Stack,
  Link,
  List,
  ListItem,
  SimpleGrid
  //   UnorderedList
  // AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Ingrained">
    <Container mt={10}>
      <Title>
        Ingrained <Badge>Minnehack 2025</Badge>
      </Title>
      <Stack spacing={4}>
        <ProjectImage
          src="/images/thumbnails/thumb_ingrained.png"
          alt="Title card for Ingrained"
        />
        <P>Created for Minnehack 2025&apos;s Strong Local Communities theme</P>
        <P>
          Ingrained is a mobile application to foster local communities that
          grow and take care of plants. Inspired by the local farmers&apos;
          market scene in and around Minneapolis, Ingrained aims to connect
          people through a shared interest of plants and create a strong
          community that can share experiences and build each other up.
        </P>
      </Stack>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>App Download</Meta>
          <Link href="https://drive.google.com/file/d/1VJvMDOYRDg-nA4VouAbEUmugK5enBaLD/view">
            Google Drive <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/ajisairen/ingrained">
            github.com/ajisairen/ingrained <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter, Firebase</span>
        </ListItem>
      </List>

      <SimpleGrid columns={3} gap={2}>
        <ProjectImage
          src="/images/projects/ingrained_01.png"
          alt="marketplace entrance page"
        />
        <ProjectImage
          src="/images/projects/ingrained_02.png"
          alt="marketplace buy page"
        />
        <ProjectImage
          src="/images/projects/ingrained_03.png"
          alt="profile page"
        />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <ProjectImage
          src="/images/projects/ingrained_04.png"
          alt="forum page"
        />
        <ProjectImage
          src="/images/projects/ingrained_05.png"
          alt="forum post"
        />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Project
