import styled from 'styled-components'

// Styled Components

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;

  @media (max-width: 768px) {
    text-align: center;
  }
`
// Template

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
