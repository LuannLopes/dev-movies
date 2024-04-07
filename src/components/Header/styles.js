import styled from 'styled-components'

export const Container = styled.div`
  min-height: 50px;
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  background-color: ${(props) =>
    props.$changeBackground ? '#000' : 'transparent'};
  transition: background-color 0.6 ease-in-out;

  img {
    width: 25%;
  }
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
`

export const Li = styled.li`
  font-weight: 600;
  font-size: 25px;
  cursor: pointer;
  position: relative;

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: ${(props) => (props.$isActive ? '100%' : 0)};
    height: 3px;
    background-color: #189b20;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`
