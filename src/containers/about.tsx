import Title from '../components/title'
import Paragrafo from '../components/paragraph'
import styled from 'styled-components'

// Styled Components
const GitSection = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    height: 157px;

    @media (max-width: 768px) {
      height: auto;
    }
  }
`

// Template
const about = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic mollitia
      eveniet neque corporis non porro molestias consequatur? Repellat, laborum?
      Possimus natus ipsam esse placeat pariatur adipisci ullam, repellat est
      dolor.
    </Paragrafo>
    <GitSection>
      <img src="https://github-readme-stats.vercel.app/api?username=amosbarbato&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=amosbarbato&layout=compact&langs_count=7&theme=dracula" />
    </GitSection>
  </section>
)

export default about
