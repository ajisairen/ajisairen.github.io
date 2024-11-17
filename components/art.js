import NextLink from 'next/link'
import {
  Heading,
  Box,
  Image,
  Link,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <Link as={NextLink} href="/art">
      Art
    </Link>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const ArtImage = ({ src, alt }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Image
        borderRadius="lg"
        w="full"
        src={src}
        alt={alt}
        mb={4}
        onClick={onOpen}
        cursor="pointer"
      />
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={'xl'} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{alt}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={src} alt={alt} borderRadius="lg" w="full" mb={4} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
