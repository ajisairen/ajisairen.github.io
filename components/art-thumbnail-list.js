import { SimpleGrid } from '@chakra-ui/react'
import { ProjectImage } from './project'

const ArtThumbnailList = ({ numOfImages, urlForImage, alt }) => {
  return (
    <SimpleGrid columns={[3, 3, 4]} gap={6}>
      {Array.from(Array(numOfImages).keys())
        .map(i => i + 1)
        .map(i => (
          <ProjectImage key={i} src={urlForImage(i)} alt={`${alt} ${i}`} />
        ))}
    </SimpleGrid>
  )
}

export default ArtThumbnailList
