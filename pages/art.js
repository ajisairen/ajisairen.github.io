import {
  Container,
  Heading,
  SimpleGrid /* , Divider */
} from '@chakra-ui/react'
import Section from '../components/section'
import { ArtGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbCrochet from '../public/images/thumbnails/thumb_crochet.jpg'

const Art = () => {
  return (
    <Layout>
      <Container mt={10}>
        <Heading as="h3" fontSize={20} mb={4}>
          Art Collections
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ArtGridItem id="crochet" title="Crochet" thumbnail={thumbCrochet}>
              Collection of crochet projects
            </ArtGridItem>
          </Section>
          {/* section project etc. here */}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Art
