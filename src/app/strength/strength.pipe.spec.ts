import { StrengthPipe } from "./strength.pipe"

describe('StrengthPipe', () => {
  it('should display weak if strength is less than 10', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(5)).toEqual('5 (weak)')
  })
  it('should display strong if strength is between 10 && 20.', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(10)).toEqual('10 (strong)')
  })
  it('should display unbelievable if strength is 20 or more.', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(21)).toEqual('21 (unbelievable)')
  })
})

