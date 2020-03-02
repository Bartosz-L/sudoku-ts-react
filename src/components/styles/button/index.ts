import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${props => css`
    align-items: center;
    background-color: ${props.theme.colors.black};
    border: 2px solid ${props.theme.colors.black};
    border-radius: 4px;
    color: ${props.theme.colors.white};
    cursor: pointer;
    display: flex;
    flex: 1;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    justify-content: center;
    margin: 4px 2px;
    min-height: 40px;
    opacity: 0.9;
    padding: 0;
    transition: ${props.theme.transition};

    &:focus {
      border-color: ${props.theme.colors.blue};
      outline: none;
    }

    &:hover {
      opacity: 0.6;
    }
  `}
`
