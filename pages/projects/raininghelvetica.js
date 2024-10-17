import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="It's Raining Helvetica">
    <Container>
      <Title>
        It's Raining Helvetica <Badge>Fall 2024</Badge>
      </Title>
      <P>Description</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://csci-4611-fall-2024.github.io/assignment-1-ajisairen/">
          https://csci-4611-fall-2024.github.io/assignment-1-ajisairen/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span></span>
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