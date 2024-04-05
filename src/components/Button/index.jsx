import { MainButton } from './styles'

function Button({ children, ...props }) {
  return <MainButton {...props}>{children}</MainButton>
}

export default Button
