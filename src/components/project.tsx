import styled from 'styled-components'
import Paragrafo from './paragraph'
import Title from './title'

// Styled Components
const Card = styled.div`
  border: 1px solid #c1c1c1;
  padding: 16px;
`

const BtnLink = styled.div`
  color: #fff;
  font-size: 14px;
  background-color: #4476bf;
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`

// Template
const Project = () => (
  <Card>
    <Title>Projeto Lista de Tarefas</Title>
    <Paragrafo tipo="secundario">Lista de Tarefas feita com VueJS</Paragrafo>
    <BtnLink>Visualizar</BtnLink>
  </Card>
)

export default Project
