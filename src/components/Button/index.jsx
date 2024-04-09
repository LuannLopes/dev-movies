import { MainButton } from './styles'

export function Button({ children, ...props }) {
  return <MainButton {...props}>{children}</MainButton>
}
