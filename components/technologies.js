import { Container, Grid, Tooltip, useBreakpointValue } from '@chakra-ui/react'
import Section from './section'
import { Icon, loadIcons } from '@iconify/react'

const technologies = [
  'vscode-icons:file-type-python',
  'devicon:java',
  'vscode-icons:file-type-c3',
  'vscode-icons:file-type-cpp3',
  'vscode-icons:file-type-csharp2',
  'vscode-icons:file-type-html',
  'vscode-icons:file-type-css',
  'vscode-icons:file-type-typescript',
  'logos:react',
  'logos:svelte-icon',
  'logos:flutter',
  'skill-icons:threejs-light',
  'logos:material-ui',
  'devicon:chakraui',
  'simple-icons:express',
  'devicon:nextjs',
  'logos:nodejs-icon',
  'devicon:figma',
  'logos:adobe-xd',
  'simple-icons:uml',
  'devicon:git',
  'logos:docker-icon',
  'devicon:visualstudio',
  
]

loadIcons(technologies)

const technologyNames = {
  'vscode-icons:file-type-python': 'Python',
  'devicon:java': 'Java',
  'vscode-icons:file-type-c3': 'C',
  'vscode-icons:file-type-cpp3': 'C++',
  'vscode-icons:file-type-csharp2': 'C#',
  'vscode-icons:file-type-html': 'HTML',
  'vscode-icons:file-type-css': 'CSS',
  'vscode-icons:file-type-typescript': 'TypeScript',
  'logos:react': 'React',
  'logos:svelte-icon': 'Svelte',
  'logos:flutter': 'Flutter',
  'skill-icons:threejs-light': 'Three.js',
  'logos:material-ui': 'Material UI',
  'devicon:chakraui': 'ChakraUI',
  'simple-icons:express': 'Express.js',
  'devicon:nextjs': 'Next.js',
  'logos:nodejs-icon': 'NodeJS',
  'devicon:figma': 'Figma',
  'logos:adobe-xd': "Adobe XD",
  'simple-icons:uml': 'UML',
  'devicon:git': 'Git',
  'logos:docker-icon': 'Docker',
  'devicon:visualstudio': 'Visual Studio',
  
}

export default function Technologies() {
  const columns = useBreakpointValue({
    base: 'repeat(4, 2fr)',
    md: 'repeat(5, 2fr)'
  })
  return (
    <Container mt={10}>
      <Grid templateColumns={columns} gap={5}>
        {technologies.map((technology, index) => (
          <Section key={index} delay={0.5 + index * 0.1}>
            <Tooltip
              label={technologyNames[technology]}
              aria-label={technologyNames[technology]}
            >
              <Icon icon={technology} width="50" height="50" />
            </Tooltip>
          </Section>
        ))}
      </Grid>
    </Container>
  )
}
