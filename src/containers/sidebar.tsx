import Avatar from '../components/avatar'
import Title from '../components/title'
import styled from 'styled-components'

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

// Template
const sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Nome do Usuário</Title>
    </SidebarContainer>
  </aside>
)

export default sidebar
