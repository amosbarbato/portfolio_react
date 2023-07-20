import Title from '../../components/title'
import Paragrafo from '../../components/paragrafo'
import { GitSection } from './styles'

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
