import React, { FC, Children } from 'react'
import { GRID } from 'typings'
import { fillGrid } from 'utils'
import { Container, Row } from './styles'
import Block from './block'

const Grid: FC = () => {
  return (
    <Container>
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row>
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block colIndex={colIndex} rowIndex={rowIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
