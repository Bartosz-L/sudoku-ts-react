import styled, { css } from 'styled-components'

interface IProps {
  active?: boolean
}

export const Container = styled.div<IProps>`
  ${props => css`
    align-items: center;
    background-color: ${props.active
      ? props.theme.colors.blue
      : props.theme.colors.white};
    border: 1px solid ${props.theme.colors.black};
    cursor: pointer;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    font-size: 20px;
    font-weight: bold;
    height: auto;
    justify-content: center;
    transition: ${props.theme.transition};
    user-select: none;

    &::before {
      padding-top: 100%;
      content: '';
      float: left;
    }

    &:hover {
      background-color: ${props.theme.colors.lightBlue};
    }
  `}
`
