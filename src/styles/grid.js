import styled, { css } from 'styled-components'

function getGridWidth(value) {
  if (!value) return

  let width = value / 12 * 100;
  return `width: ${width}%`
}

export const Container = styled.div`
  max-width: 1360px;
  padding: 0 15px;
  margin: 0 auto;
  box-sizing: border-box;
`

export const Row = styled.div`
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;
`

export const Column = styled.div`
  float: left;
  padding: .25rem;
  min-height: 1px;
  box-sizing: border-box;
  width: 100%;

  ${({ backgroundColor }) => backgroundColor && css`
    background-color: ${backgroundColor};
  `}

  @media only screen and (max-width: 1200px) {
    ${({ xlg }) => xlg && getGridWidth(xlg) }
  }

  @media only screen and (max-width: 992px) {
    ${({ lg }) => lg && getGridWidth(lg) }
  }

  @media only screen and (max-width: 768px) {
    ${({ md }) => md && getGridWidth(md) }
  }

  @media only screen and (max-width: 576px) {
    ${({ sm }) => sm && getGridWidth(sm) }
  }
`
