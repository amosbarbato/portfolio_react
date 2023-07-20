import Avatar from '../components/avatar'
import Title from '../components/title'
import styled from 'styled-components'
import Paragraph from '../components/paragraph'
import { P } from '../components/paragraph'

// Styled Components
const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`

const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 24px;
`

const BtnTheme = styled.button`
  color: #eee;
  font-size: 10px;
  font-style: bold;
  border-radius: 12px;
  padding: 8px;
  background-color: #282a35;
  cursor: pointer;
`

// Template
const sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Nome do Usuário</Title>
      <Paragraph tipo="secundario" fontSize={16}>
        @usuario
      </Paragraph>
      <Description fontSize={12}>Front-End Developer</Description>
      <BtnTheme>Trocar Tema</BtnTheme>
    </SidebarContainer>
  </aside>
)

export default sidebar
