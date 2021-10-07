import * as S from './styles'

const Main = ({
  title = 'Boilerplate',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com um código"
    />
  </S.Wrapper>
)

export default Main
