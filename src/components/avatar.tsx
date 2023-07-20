import styled from 'styled-components'

// Styled Components

const FotoPerfil = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin-bottom: 24px;
`
// Template

const Avatar = () => <FotoPerfil src="https://github.com/amosbarbato.png" />

export default Avatar
