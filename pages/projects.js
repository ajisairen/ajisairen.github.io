import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbRainingHelvetica from '../public/images/thumb_raining_helvetica.png'

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem
              id="raininghelvetica"
              title="It's Raining Helvetica"
              thumbnail={thumbRainingHelvetica}
            >
              Description
            </ProjectGridItem>
          </Section>
          {/* section project etc. here */}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
