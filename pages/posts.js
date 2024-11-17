import { Container, Heading, Divider, HStack } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import TimeStamp from '../components/timestamp'
import { PostItem } from '../components/grid-item'

const Posts = () => {
  return (
    <Layout>
      <Container mt={10}>
        <Heading as="h3" fontSize={20} mb={4}>
          2024
        </Heading>
        <Divider mb={5} />
        <Section>
          <HStack alignItems="center">
            <PostItem id="test" title="Test Post" />
            <TimeStamp ml={5}>November 17th</TimeStamp>
          </HStack>
        </Section>
      </Container>
    </Layout>
  )
}

export default Posts
