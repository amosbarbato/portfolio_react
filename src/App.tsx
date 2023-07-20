import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/sidebar'
import About from './containers/about'
import Projects from './containers/projects'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
