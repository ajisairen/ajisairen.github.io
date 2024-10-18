import {
  Container,
  Heading,
  SimpleGrid /* , Divider */
} from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbRainingHelvetica from '../public/images/thumb_raining_helvetica.png'
import thumbDroneSim from '../public/images/thumb_drone_simulation.png'

const Projects = () => {
  return (
    <Layout>
      <Container mt={10}>
        <Heading as="h3" fontSize={20} mb={4}>
          School
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem
              id="dronesim"
              title="Drone Delivery Simulation"
              thumbnail={thumbDroneSim}
            >
              A simulation for a drone delivery system on a college campus
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="textrain"
              title="It's Raining Helvetica"
              thumbnail={thumbRainingHelvetica}
            >
              An interactive installation where text falls from the sky and
              reacts to the user&apos;s movements on camera
            </ProjectGridItem>
          </Section>
          {/* section project etc. here */}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
