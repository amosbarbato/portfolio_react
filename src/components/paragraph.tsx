import styled from 'styled-components'

// Styled Components

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
}

const P = styled.p<Props>`
  font-size: 14px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;

  @media (max-width: 768px) {
    text-align: center;
  }
`
// Template

const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafo
