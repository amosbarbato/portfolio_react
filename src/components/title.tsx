import styled from 'styled-components'

// Styled Components
type Props = {
  children: string
  fontSize?: number
}

const TitleStyle = styled.h3<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    text-align: center;
  }
`

// Template
const Title = (props: Props) => (
  <TitleStyle fontSize={props.fontSize}>{props.children}</TitleStyle>
)

export default Title
