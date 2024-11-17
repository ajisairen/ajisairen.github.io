import {
  Container,
  Divider
  // AspectRatio
} from '@chakra-ui/react'
import { Title /**ProjectImage,  Meta **/ } from '../../components/post'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import TimeStamp from '../../components/timestamp'

const Post = () => (
  <Layout title="Test Post">
    <Container mt={10}>
      <Title>Test Post</Title>
      <TimeStamp>Posted November 17th, 2024</TimeStamp>
      <Divider my={5} />
      <P>
        This is a test wip post, I&apos;d rather be doing this than working on
        homework :c
      </P>
    </Container>
  </Layout>
)

export default Post
