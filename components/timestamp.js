import styled from '@emotion/styled'
import { useColorMode } from '@chakra-ui/react'

const TimeStamp = styled.text`
  text-align: justify;
  text-indent: 1em;
  font-size: 0.8em;
  hyphens: auto;
  color: ${({ colorMode }) => (colorMode === 'light' ? '#a0aec0' : '#718096')};
`

const ThemedTimeStamp = props => {
  const { colorMode } = useColorMode()
  return <TimeStamp colorMode={colorMode} {...props} />
}

export default ThemedTimeStamp
