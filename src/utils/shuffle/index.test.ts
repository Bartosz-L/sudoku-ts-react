import { shuffle } from 'utils'

describe('shuffle', () => {
  it('returns and array with the same length after beign shuffled', () => {
    const arr = [1, 2, 3]
    shuffle(arr)
    expect(arr).toHaveLength(3)
  })

  it('returns and array with the same elements after beign shuffled', () => {
    const arr = [1, 2, 3]
    shuffle(arr)
    expect(arr).toContain(1)
    expect(arr).toContain(2)
    expect(arr).toContain(3)
  })
})
