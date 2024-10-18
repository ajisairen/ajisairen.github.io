import {
  Container,
  Badge,
  Stack,
  Link,
  List,
  ListItem
  // AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, /**ProjectImage, **/ Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Drone Delivery Simulation">
    <Container mt={10}>
      <Title>
        Drone Delivery Simulation <Badge>Spring 2024</Badge>
      </Title>
      <Stack spacing={4}>
        <P>Final project for CSCI 3801W: Program Design and Development.</P>
        <P>
          A simulation for a drone delivery system on the University of
          Minnesota - Twin Cities campus. Drones can deliver packages starting
          from any point on the 3D map using a variety of different pathfinding
          strategies. Originally, drones will deliver directly to a robot, but
          my team added an extension to modify how it works. Drones will instead
          deliver packages to a spot where robots will travel to in order to
          pick it up. If a robot does not make it to the dropoff area fast
          enough, a thief might pick it up and steal it first. My team also
          added CSV data for drone and package statistics.
        </P>
      </Stack>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://hub.docker.com/r/xin00051/final_project_drone_sim">
            DockerHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++, TypeScript, Makefile, Docker</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Project
// export { getServerSideProps } from '../../components/chakra'
