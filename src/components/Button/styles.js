import styled from 'styled-components'

export const MainButton = styled.button`
  border: ${(props) =>
    props.$otherColor && props.$otherColor
      ? '4px solid transparent'
      : '3px solid #ffffff'};
  background: ${(props) =>
    props.$otherColor && props.$otherColor ? '#ff0000' : 'transparent'};
  color: #ffffff;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  ${(props) =>
    props.$otherColor && 'box-shadow: 0px 0px 2px 8px  rgb(255 0 0 / 30%);'}

  &:hover {
    background: ${(props) =>
      props.$otherColor && props.$otherColor ? '#ff0000' : '#ffffff'};
    color: ${(props) =>
      props.$otherColor && props.$otherColor ? '#ffffff' : '#ff0000'};
    ${(props) =>
      props.$otherColor && 'box-shadow: 0px 0px 2px 15px  rgb(255 0 0 / 30%);'}
  }
`
