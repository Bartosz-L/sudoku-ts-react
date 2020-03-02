import React, { FC } from 'react'
import { NUMBERS } from 'typings'
import { Container } from './styles'

const Numbers: FC = () => {
  return (
    <Container>
      Numbers
      {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBERS[]).map(value => (
        <button key={value}>{value}</button>
      ))}
    </Container>
  )
}

export default Numbers
