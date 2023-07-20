import styled from 'styled-components'
import Project from '../components/project'
import Title from '../components/title'

// Styled Components
const ListGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 36px;
  row-gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0px;
    row-gap: 16px;
  }
`

// Template
const Projects = () => (
  <section>
    <Title fontSize={16}>Projetos</Title>
    <ListGroup>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
    </ListGroup>
  </section>
)

export default Projects
