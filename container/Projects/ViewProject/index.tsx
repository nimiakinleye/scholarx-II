import { Container, Stack } from '../../../components'
import { Hero } from '../../../container'
import { ViewProjectWrapper } from './styles'


const ViewProject = ({ project }: any) => {
  console.log(project)

  return (
    <ViewProjectWrapper>
      <Hero image={project?.feature_image} title={JSON.parse(JSON.stringify(project?.title ? project?.title : ""))} />
      <Container>
        <Stack m="40px 0" dangerouslySetInnerHTML={{ __html: project?.html }} className='injected'>

        </Stack>
      </Container>

    </ViewProjectWrapper>
  )
}

export default ViewProject
