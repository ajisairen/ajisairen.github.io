import { SimpleGrid } from '@chakra-ui/react'
import { ArtImage } from './art'

const ArtThumbnailList = ({ numOfImages, urlForImage, alt }) => {
  return (
    <SimpleGrid columns={[3, 3, 4]} gap={6}>
      {Array.from(Array(numOfImages).keys())
        .map(i => i + 1)
        .map(i => (
          <ArtImage key={i} src={urlForImage(i)} alt={`${alt} ${i}`} />
        ))}
    </SimpleGrid>
  )
}

export default ArtThumbnailList
