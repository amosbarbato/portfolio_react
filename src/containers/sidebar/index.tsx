import Avatar from '../../components/avatar'
import Title from '../../components/title'
import { SidebarContainer } from '../../containers/sidebar/styles'

const sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Nome do Usuário</Title>
    </SidebarContainer>
  </aside>
)

export default sidebar
