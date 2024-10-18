import {
  Container,
  Heading,
  Stack,
  Link
  // AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title /**ProjectImage,  Meta **/ } from '../../components/art'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import ArtThumbnailList from '../../components/art-thumbnail-list'

const Art = () => (
  <Layout title="Crochet Projects">
    <Container mt={10}>
      <Title>Crochet Projects</Title>
      <P>
        This is a collection of the crochet projects that I have completed. I
        picked up crocheting as a hobby in my freshman year of college and have
        been working on various amigurumi since then. Although I am still a
        beginner, I hope to continue improving my skills and potentially create
        my own patterns in the future.
      </P>
      <Heading as="h2" fontSize={20} mt={6}>
        Void Chicken from Stardew Valley
      </Heading>
      <Stack spacing={4}>
        <P>
          <Link href="https://youtu.be/sZAVEMGKVhk">
            YouTube Tutorial <ExternalLinkIcon mx="2px" />
          </Link>
        </P>
        <ArtThumbnailList
          numOfImages={6}
          urlForImage={i =>
            `/images/crochet/void_chicken/vc-${String(i).padStart(2, '0')}.jpg`
          }
          alt="Void Chicken"
        />
      </Stack>
    </Container>
  </Layout>
)

export default Art
// export { getServerSideProps } from '../../components/chakra'
